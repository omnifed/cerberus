#!/usr/bin/env node
// PR autopilot CLI, run by .github/workflows/pr-autopilot.yml.
//
//   candidates --out <file>                       list open PRs and apply the hard rules
//   apply --candidates <file> --decisions <file>  act on Claude's decisions
//
// Set AUTOPILOT_MODE=live to approve, merge and label. Anything else is a dry
// run that only comments. The policy Claude follows is .github/pr-autopilot.md.

import { execFileSync } from 'node:child_process'
import {
  appendFileSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from 'node:fs'
import { parseArgs } from 'node:util'
import { config } from './config.mjs'
import {
  alreadyHandled,
  enforceDecision,
  evaluatePr,
  marker,
} from './guards.mjs'

const mode = process.env.AUTOPILOT_MODE === 'live' ? 'live' : 'dry-run'
const live = mode === 'live'

function gh(args, options = {}) {
  return execFileSync('gh', args, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'inherit'],
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  })
}
const ghJson = (args) => JSON.parse(gh(args))

const repo =
  process.env.GITHUB_REPOSITORY ??
  ghJson(['repo', 'view', '--json', 'nameWithOwner']).nameWithOwner

function summary(markdown) {
  console.log(markdown)
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${markdown}\n`)
  }
}

function output(name, value) {
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`)
  }
}

// ---------------------------------------------------------------- candidates

function candidates(outFile) {
  // author_association is only on the REST API.
  const associations = new Map(
    ghJson([
      'api',
      '--paginate',
      `repos/${repo}/pulls?state=open&base=main&per_page=100`,
      '--jq',
      '[.[] | {number, association: .author_association}]',
    ]).map((p) => [p.number, p.association]),
  )

  const prs = ghJson([
    'pr',
    'list',
    '--repo',
    repo,
    '--state',
    'open',
    '--base',
    'main',
    '--limit',
    '50',
    '--json',
    [
      'number',
      'title',
      'url',
      'headRefName',
      'headRefOid',
      'author',
      'isDraft',
      'isCrossRepository',
      'labels',
      'files',
      'mergeable',
      'mergeStateStatus',
      'statusCheckRollup',
      'comments',
    ].join(','),
  ])

  // GitHub computes mergeability lazily: list queries often say UNKNOWN until
  // a PR is asked for directly, which starts the computation.
  for (const raw of prs.filter((p) => p.mergeable === 'UNKNOWN')) {
    for (
      let attempt = 0;
      attempt < 4 && raw.mergeable === 'UNKNOWN';
      attempt++
    ) {
      if (attempt) execFileSync('sleep', ['3'])
      raw.mergeable = ghJson([
        'pr',
        'view',
        String(raw.number),
        '--repo',
        repo,
        '--json',
        'mergeable',
      ]).mergeable
    }
  }

  const results = prs.map((raw) => {
    const pr = {
      ...raw,
      author: { login: raw.author.login, isBot: Boolean(raw.author.is_bot) },
      authorAssociation: associations.get(raw.number) ?? 'NONE',
      labels: raw.labels.map((l) => l.name),
    }
    const evaluation = alreadyHandled(raw.comments, raw.headRefOid, mode)
      ? { action: 'skip', reasons: ['already handled at this commit'] }
      : evaluatePr(pr, config)
    return {
      number: pr.number,
      title: pr.title,
      url: pr.url,
      headRefName: pr.headRefName,
      headRefOid: pr.headRefOid,
      author: pr.author.login,
      files: pr.files.map(({ path, additions, deletions }) => ({
        path,
        additions,
        deletions,
      })),
      evaluation,
    }
  })

  writeFileSync(outFile, JSON.stringify({ mode, candidates: results }, null, 2))

  const toReview = results.filter((r) => r.evaluation.action === 'review')
  output('review_count', toReview.length)
  output('review_numbers', toReview.map((r) => r.number).join(' '))

  summary(
    `## PR autopilot (${mode})\n\n| PR | Author | Gate | Notes |\n| --- | --- | --- | --- |`,
  )
  for (const r of results) {
    summary(
      `| #${r.number} ${r.title.replaceAll('|', '\\|')} | ${r.author} | ${r.evaluation.action} | ${r.evaluation.reasons.join('; ')} |`,
    )
  }
}

// --------------------------------------------------------------------- apply

const runUrl = process.env.GITHUB_RUN_ID
  ? `${process.env.GITHUB_SERVER_URL}/${repo}/actions/runs/${process.env.GITHUB_RUN_ID}`
  : null

function commentBody({ heading, category, text, reasons, sha }) {
  return [
    `### 🤖 PR autopilot: ${heading}`,
    category ? `**Category:** ${category}` : null,
    text || null,
    reasons?.length
      ? `**Why a human is needed:**\n${reasons.map((r) => `- ${r}`).join('\n')}`
      : null,
    `<sub>Policy: \`.github/pr-autopilot.md\`${runUrl ? ` · [run](${runUrl})` : ''} · mode: ${mode}</sub>`,
    marker(sha, mode),
  ]
    .filter(Boolean)
    .join('\n\n')
}

const comment = (number, body) =>
  gh(['pr', 'comment', String(number), '--repo', repo, '--body', body])

function escalate(candidate, { category, text, reasons }) {
  comment(
    candidate.number,
    commentBody({
      heading: live ? 'needs a human' : 'would escalate (dry run)',
      category,
      text,
      reasons,
      sha: candidate.headRefOid,
    }),
  )
  if (!live) return
  const edit = ['pr', 'edit', String(candidate.number), '--repo', repo]
  gh([...edit, '--add-label', config.labels.escalated])
  // GitHub refuses a review request to the PR's own author.
  if (candidate.author !== config.escalationReviewer) {
    gh([...edit, '--add-reviewer', config.escalationReviewer])
  }
}

/** Run one PR's handling without letting a failure stop the others. */
function safely(number, fn) {
  try {
    fn()
  } catch (error) {
    process.exitCode = 1
    summary(`- #${number}: ⚠️ ${String(error.message).split('\n')[0]}`)
  }
}

function waitForRequiredChecks(number) {
  // Give GitHub a moment to register checks for a freshly updated branch.
  execFileSync('sleep', ['20'])
  try {
    gh(
      [
        'pr',
        'checks',
        String(number),
        '--repo',
        repo,
        '--required',
        '--watch',
        '--fail-fast',
        '--interval',
        '30',
      ],
      { timeout: config.checksTimeoutMinutes * 60 * 1000 },
    )
    return true
  } catch {
    return false
  }
}

function merge(candidate, decision) {
  const number = String(candidate.number)
  const fresh = ghJson([
    'pr',
    'view',
    number,
    '--repo',
    repo,
    '--json',
    'headRefOid,mergeStateStatus,state',
  ])
  if (fresh.state !== 'OPEN') return { retry: 'closed since review' }
  if (fresh.headRefOid !== candidate.headRefOid)
    return { retry: 'new commits since review' }

  if (fresh.mergeStateStatus === 'BEHIND') {
    gh(['pr', 'update-branch', number, '--repo', repo])
    if (!waitForRequiredChecks(number)) {
      return {
        escalate: 'required checks failed after updating the branch with main',
      }
    }
  }

  // Best effort: GitHub refuses an approval from the PR's own author (e.g.
  // when running on a personal token). Merge rules decide what happens next.
  try {
    gh([
      'pr',
      'review',
      number,
      '--repo',
      repo,
      '--approve',
      '--body',
      `Approved by PR autopilot (${decision.category}).`,
    ])
  } catch {}
  try {
    gh(['pr', 'merge', number, '--repo', repo, config.mergeMethod])
  } catch (error) {
    return {
      escalate: `merge was refused: ${String(error.message).split('\n')[0]}`,
    }
  }
  gh([
    'pr',
    'edit',
    number,
    '--repo',
    repo,
    '--add-label',
    config.labels.merged,
  ])
  comment(
    candidate.number,
    commentBody({
      heading: 'merged',
      category: decision.category,
      text: decision.summary,
      sha: candidate.headRefOid,
    }),
  )
  return null
}

function ensureLabels() {
  const labels = [
    [config.labels.merged, '0e8a16', 'Merged by the PR autopilot'],
    [config.labels.escalated, 'd93f0b', 'PR autopilot handed this to a human'],
  ]
  for (const [name, color, description] of labels) {
    gh([
      'label',
      'create',
      name,
      '--repo',
      repo,
      '--color',
      color,
      '--description',
      description,
      '--force',
    ])
  }
}

function apply(candidatesFile, decisionsFile) {
  const { candidates: all } = JSON.parse(readFileSync(candidatesFile, 'utf8'))
  const byNumber = new Map(all.map((c) => [c.number, c]))
  const decisions = existsSync(decisionsFile)
    ? (JSON.parse(readFileSync(decisionsFile, 'utf8')).decisions ?? [])
    : []

  if (live) ensureLabels()
  summary(`## Actions (${mode})\n`)

  // PRs the hard rules escalated: no Claude review involved.
  for (const c of all.filter((c) => c.evaluation.action === 'escalate')) {
    safely(c.number, () => {
      escalate(c, { reasons: c.evaluation.reasons })
      summary(`- #${c.number}: escalated (${c.evaluation.reasons.join('; ')})`)
    })
  }

  let merges = 0
  const decided = new Set()
  for (const d of decisions) {
    const candidate = byNumber.get(d.number)
    const final = enforceDecision(d, candidate, config)
    if (final.decision === 'ignore') {
      summary(
        `- #${d.number}: ignored Claude's decision (${final.reasons.join('; ')})`,
      )
      continue
    }
    decided.add(d.number)

    safely(d.number, () => {
      if (final.decision === 'escalate') {
        escalate(candidate, {
          category: d.category,
          text: d.summary,
          reasons: [...(d.reasons ?? []), ...final.reasons],
        })
        summary(`- #${d.number}: escalated (${d.category})`)
        return
      }

      if (!live) {
        comment(
          d.number,
          commentBody({
            heading: 'would merge (dry run)',
            category: d.category,
            text: d.summary,
            sha: candidate.headRefOid,
          }),
        )
        summary(`- #${d.number}: would merge (${d.category})`)
        return
      }

      if (merges >= config.maxMergesPerRun) {
        summary(
          `- #${d.number}: merge deferred, hit ${config.maxMergesPerRun} merges this run`,
        )
        return
      }
      const problem = merge(candidate, d)
      if (problem?.retry) {
        summary(
          `- #${d.number}: not merged, ${problem.retry}; will retry next run`,
        )
      } else if (problem?.escalate) {
        escalate(candidate, {
          category: d.category,
          text: d.summary,
          reasons: [problem.escalate],
        })
        summary(`- #${d.number}: escalated (${problem.escalate})`)
      } else {
        merges += 1
        summary(`- #${d.number}: merged (${d.category})`)
      }
    })
  }

  for (const c of all.filter(
    (c) => c.evaluation.action === 'review' && !decided.has(c.number),
  )) {
    summary(`- #${c.number}: no decision from Claude, will retry next run`)
  }
}

// ---------------------------------------------------------------------- main

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    out: { type: 'string' },
    candidates: { type: 'string' },
    decisions: { type: 'string' },
  },
})

switch (positionals[0]) {
  case 'candidates':
    candidates(values.out ?? 'candidates.json')
    break
  case 'apply':
    apply(
      values.candidates ?? 'candidates.json',
      values.decisions ?? 'decisions.json',
    )
    break
  default:
    console.error('Usage: pr-autopilot <candidates|apply> [options]')
    process.exit(1)
}
