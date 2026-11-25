// Pure, deterministic rules for the PR autopilot. No I/O here so the rules can
// be unit tested (tests/scripts/pr-autopilot.test.ts).

import { config as defaultConfig } from './config.mjs'

export const MARKER_PREFIX = '<!-- pr-autopilot'

/** Hidden marker stamped on every autopilot comment. */
export function marker(sha, mode) {
  return `${MARKER_PREFIX} sha=${sha} mode=${mode} -->`
}

/** True when this exact head commit was already handled in this mode. */
export function alreadyHandled(comments, sha, mode) {
  const stamp = marker(sha, mode)
  return comments.some((c) => (c.body ?? '').includes(stamp))
}

const matchesAny = (patterns, value) => patterns.some((p) => p.test(value))

/**
 * Collapse a GitHub statusCheckRollup (CheckRun and StatusContext entries)
 * into counts. SKIPPED and NEUTRAL count as passing.
 */
export function summarizeChecks(rollup = []) {
  /** @type {{ total: number, passing: number, pending: number, failing: string[] }} */
  const summary = { total: 0, passing: 0, pending: 0, failing: [] }
  for (const item of rollup) {
    const name = item.name ?? item.context ?? 'unknown'
    // CheckRun: status + conclusion. StatusContext: state.
    const result = (item.conclusion ?? item.state ?? '').toUpperCase()
    const status = (item.status ?? '').toUpperCase()
    if (!result && !status) continue // empty placeholder entries
    summary.total += 1
    if (item.__typename === 'CheckRun' && status !== 'COMPLETED') {
      summary.pending += 1
    } else if (['SUCCESS', 'SKIPPED', 'NEUTRAL'].includes(result)) {
      summary.passing += 1
    } else if (
      ['PENDING', 'EXPECTED', 'QUEUED', 'IN_PROGRESS'].includes(result)
    ) {
      summary.pending += 1
    } else {
      summary.failing.push(name)
    }
  }
  return summary
}

/** Lines changed, ignoring lockfiles. */
export function changedLines(files, cfg = defaultConfig) {
  return files
    .filter((f) => !matchesAny(cfg.lockfiles, f.path))
    .reduce((sum, f) => sum + (f.additions ?? 0) + (f.deletions ?? 0), 0)
}

/** Parse "bump x from 1.2.3 to 2.0.0" and report whether it's a major bump. */
export function isMajorBump(title) {
  const match = /from v?(\d+)\.(\d+)\S* to v?(\d+)\.(\d+)/i.exec(title)
  if (!match) return false
  const [, fromMajor, fromMinor, toMajor, toMinor] = match.map(Number)
  if (fromMajor !== toMajor) return true
  // In 0.x, a minor bump is breaking.
  return fromMajor === 0 && fromMinor !== toMinor
}

export function isTrustedAuthor(pr, cfg = defaultConfig) {
  if (cfg.trustedBots.includes(pr.author.login)) return true
  if (pr.author.isBot) return false
  return cfg.trustedAssociations.includes(pr.authorAssociation)
}

/**
 * Decide what happens to a PR before Claude sees it.
 *
 * - `skip`: leave it alone this run (draft, release PR, CI still running...).
 * - `escalate`: hand it to a human with `reasons`, no Claude review.
 * - `review`: passes every hard rule; Claude classifies and decides.
 */
export function evaluatePr(pr, cfg = defaultConfig) {
  const labels = pr.labels ?? []
  if (pr.isDraft) return { action: 'skip', reasons: ['draft'] }
  if (matchesAny(cfg.skipBranches, pr.headRefName)) {
    return { action: 'skip', reasons: ['release PR'] }
  }
  const skipLabel = labels.find((l) => cfg.skipLabels.includes(l))
  if (skipLabel) return { action: 'skip', reasons: [`labeled "${skipLabel}"`] }

  const checks = summarizeChecks(pr.statusCheckRollup)
  if (checks.total === 0 || checks.pending > 0) {
    return { action: 'skip', reasons: ['checks have not finished'] }
  }
  if (pr.mergeable === 'UNKNOWN') {
    return { action: 'skip', reasons: ['mergeability not computed yet'] }
  }

  const reasons = []
  if (matchesAny(cfg.escalateBranches, pr.headRefName)) {
    reasons.push('branch always needs human sign-off')
  }
  if (pr.isCrossRepository) reasons.push('opened from a fork')
  if (!isTrustedAuthor(pr, cfg)) {
    reasons.push(`author @${pr.author.login} is not on the trusted list`)
  }
  const protectedFiles = pr.files
    .map((f) => f.path)
    .filter((path) => matchesAny(cfg.protectedPaths, path))
  if (protectedFiles.length) {
    reasons.push(`touches protected paths: ${protectedFiles.join(', ')}`)
  }
  const lines = changedLines(pr.files, cfg)
  if (lines > cfg.maxChangedLines) {
    reasons.push(`${lines} changed lines (limit ${cfg.maxChangedLines})`)
  }
  if (pr.files.length > cfg.maxChangedFiles) {
    reasons.push(
      `${pr.files.length} changed files (limit ${cfg.maxChangedFiles})`,
    )
  }
  if (checks.failing.length) {
    reasons.push(`failing checks: ${checks.failing.join(', ')}`)
  }
  if (pr.mergeable === 'CONFLICTING') reasons.push('has merge conflicts')
  if (isMajorBump(pr.title)) reasons.push('major version bump')

  return reasons.length
    ? { action: 'escalate', reasons }
    : { action: 'review', reasons: [] }
}

const touchesPackageSource = (files) =>
  files.some((f) => /^packages\/[^/]+\/src\//.test(f.path))
const hasChangeset = (files) =>
  files.some((f) => /^\.changeset\/(?!README).+\.md$/.test(f.path))
const touchesTests = (files) => files.some((f) => /^tests\//.test(f.path))

/**
 * Check one of Claude's decisions against the hard rules. Claude can only
 * lower a PR to "escalate", never raise it past what the rules allow.
 * Returns the final `{ decision, reasons }`.
 */
export function enforceDecision(decision, candidate, cfg = defaultConfig) {
  if (!candidate || candidate.evaluation.action !== 'review') {
    return { decision: 'ignore', reasons: ['not an eligible candidate'] }
  }
  if (decision.sha !== candidate.headRefOid) {
    return {
      decision: 'ignore',
      reasons: ['decision is for a different commit'],
    }
  }
  if (decision.decision !== 'merge') {
    return { decision: 'escalate', reasons: [] }
  }
  if (!cfg.mergeableCategories.includes(decision.category)) {
    return {
      decision: 'escalate',
      reasons: [`category "${decision.category}" is not auto-mergeable`],
    }
  }
  if (decision.category === 'bugfix') {
    const reasons = []
    if (!touchesTests(candidate.files))
      reasons.push('bug fix has no test changes')
    if (
      touchesPackageSource(candidate.files) &&
      !hasChangeset(candidate.files)
    ) {
      reasons.push('bug fix to a package has no changeset')
    }
    if (reasons.length) return { decision: 'escalate', reasons }
  }
  return { decision: 'merge', reasons: [] }
}
