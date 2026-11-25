import { describe, test, expect } from 'bun:test'
import { config } from 'scripts/src/pr-autopilot/config.mjs'
import {
  alreadyHandled,
  changedLines,
  enforceDecision,
  evaluatePr,
  isMajorBump,
  isTrustedAuthor,
  marker,
  summarizeChecks,
} from 'scripts/src/pr-autopilot/guards.mjs'

const green = [
  {
    __typename: 'CheckRun',
    name: 'Unit tests pass',
    status: 'COMPLETED',
    conclusion: 'SUCCESS',
  },
  {
    __typename: 'CheckRun',
    name: 'TS valid',
    status: 'COMPLETED',
    conclusion: 'SUCCESS',
  },
]

function makePr(overrides: Record<string, unknown> = {}) {
  return {
    number: 1,
    title: 'chore(deps-dev): bump shiki from 4.5.0 to 4.6.0',
    headRefName: 'dependabot/npm_and_yarn/shiki-4.6.0',
    headRefOid: 'abc123',
    author: { login: 'app/dependabot', isBot: true },
    authorAssociation: 'CONTRIBUTOR',
    isDraft: false,
    isCrossRepository: false,
    labels: [] as string[],
    files: [
      { path: 'docs/package.json', additions: 1, deletions: 1 },
      { path: 'pnpm-lock.yaml', additions: 900, deletions: 900 },
    ],
    mergeable: 'MERGEABLE',
    statusCheckRollup: green,
    ...overrides,
  }
}

describe('PR autopilot: markers', () => {
  test('matches only the same commit and mode', () => {
    const comments = [{ body: `hello\n${marker('abc', 'live')}` }]
    expect(alreadyHandled(comments, 'abc', 'live')).toBe(true)
    expect(alreadyHandled(comments, 'abc', 'dry-run')).toBe(false)
    expect(alreadyHandled(comments, 'def', 'live')).toBe(false)
    expect(alreadyHandled([{ body: null }], 'abc', 'live')).toBe(false)
  })
})

describe('PR autopilot: checks', () => {
  test('counts passing, pending and failing checks', () => {
    const result = summarizeChecks([
      ...green,
      {
        __typename: 'CheckRun',
        name: 'CodeQL',
        status: 'COMPLETED',
        conclusion: 'NEUTRAL',
      },
      {
        __typename: 'CheckRun',
        name: 'Build',
        status: 'IN_PROGRESS',
        conclusion: '',
      },
      {
        __typename: 'CheckRun',
        name: 'Lint',
        status: 'COMPLETED',
        conclusion: 'FAILURE',
      },
      { __typename: 'StatusContext', context: 'vercel', state: 'PENDING' },
      { __typename: 'StatusContext', context: 'netlify', state: 'ERROR' },
      {
        __typename: 'StatusContext',
        name: null,
        status: null,
        conclusion: null,
      },
    ])
    expect(result).toEqual({
      total: 7,
      passing: 3,
      pending: 2,
      failing: ['Lint', 'netlify'],
    })
  })

  test('handles a missing rollup', () => {
    expect(summarizeChecks().total).toBe(0)
  })
})

describe('PR autopilot: helpers', () => {
  test('changedLines ignores lockfiles', () => {
    expect(changedLines(makePr().files)).toBe(2)
    expect(changedLines([{ path: 'a.ts' }])).toBe(0)
  })

  test('isMajorBump', () => {
    expect(isMajorBump('bump next from 16.3.6 to 16.4.6')).toBe(false)
    expect(isMajorBump('bump glob from 13.0.6 to 14.0.3')).toBe(true)
    expect(isMajorBump('bump foo from v0.4.1 to v0.5.0')).toBe(true)
    expect(isMajorBump('bump foo from 0.4.1 to 0.4.2')).toBe(false)
    expect(isMajorBump('bump the development group with 4 updates')).toBe(false)
  })

  test('isTrustedAuthor', () => {
    expect(isTrustedAuthor(makePr())).toBe(true)
    const member = {
      author: { login: 'casey', isBot: false },
      authorAssociation: 'MEMBER',
    }
    expect(isTrustedAuthor(member)).toBe(true)
    expect(
      isTrustedAuthor({ ...member, authorAssociation: 'CONTRIBUTOR' }),
    ).toBe(false)
    expect(
      isTrustedAuthor({
        author: { login: 'app/renovate', isBot: true },
        authorAssociation: 'MEMBER',
      }),
    ).toBe(false)
  })
})

describe('PR autopilot: evaluatePr', () => {
  test('a clean Dependabot minor bump goes to review', () => {
    expect(evaluatePr(makePr())).toEqual({ action: 'review', reasons: [] })
  })

  test.each([
    ['drafts', { isDraft: true }, 'draft'],
    ['the release PR', { headRefName: 'changeset-release/main' }, 'release PR'],
    ['DO NOT MERGE', { labels: ['DO NOT MERGE'] }, 'labeled "DO NOT MERGE"'],
    ['already escalated', { labels: ['needs-human'] }, 'labeled "needs-human"'],
    ['no checks yet', { statusCheckRollup: [] }, 'checks have not finished'],
    [
      'running checks',
      {
        statusCheckRollup: [
          { __typename: 'CheckRun', name: 'x', status: 'QUEUED' },
        ],
      },
      'checks have not finished',
    ],
    [
      'unknown mergeability',
      { mergeable: 'UNKNOWN' },
      'mergeability not computed yet',
    ],
  ])('skips %s', (_, overrides, reason) => {
    expect(evaluatePr(makePr(overrides))).toEqual({
      action: 'skip',
      reasons: [reason],
    })
  })

  test('escalates everything the hard rules catch', () => {
    const result = evaluatePr(
      makePr({
        title: 'bump glob from 13.0.6 to 14.0.3',
        headRefName: 'chore/update-tokens',
        isCrossRepository: true,
        author: { login: 'stranger', isBot: false },
        files: [
          { path: '.github/workflows/release.yml', additions: 1, deletions: 0 },
          { path: 'AGENTS.md', additions: 1, deletions: 0 },
          ...Array.from({ length: 30 }, (_, i) => ({
            path: `packages/react/src/f${i}.ts`,
            additions: 20,
            deletions: 0,
          })),
        ],
        statusCheckRollup: [
          {
            __typename: 'CheckRun',
            name: 'TS valid',
            status: 'COMPLETED',
            conclusion: 'FAILURE',
          },
        ],
        mergeable: 'CONFLICTING',
      }),
    )
    expect(result.action).toBe('escalate')
    expect(result.reasons).toEqual([
      'branch always needs human sign-off',
      'opened from a fork',
      'author @stranger is not on the trusted list',
      'touches protected paths: .github/workflows/release.yml, AGENTS.md',
      `602 changed lines (limit ${config.maxChangedLines})`,
      `32 changed files (limit ${config.maxChangedFiles})`,
      'failing checks: TS valid',
      'has merge conflicts',
      'major version bump',
    ])
  })
})

describe('PR autopilot: enforceDecision', () => {
  const candidate = {
    headRefOid: 'abc123',
    evaluation: { action: 'review', reasons: [] },
    files: [{ path: 'docs/package.json' }],
  }
  const merge = {
    number: 1,
    sha: 'abc123',
    category: 'dependency',
    decision: 'merge',
  }

  test('allows a merge the rules permit', () => {
    expect(enforceDecision(merge, candidate)).toEqual({
      decision: 'merge',
      reasons: [],
    })
  })

  test('ignores PRs that were not eligible or have moved on', () => {
    expect(enforceDecision(merge, undefined).decision).toBe('ignore')
    expect(
      enforceDecision(merge, {
        ...candidate,
        evaluation: { action: 'escalate', reasons: [] },
      }).decision,
    ).toBe('ignore')
    expect(
      enforceDecision({ ...merge, sha: 'zzz' }, candidate).reasons,
    ).toEqual(['decision is for a different commit'])
  })

  test('passes escalations through', () => {
    expect(
      enforceDecision({ ...merge, decision: 'escalate' }, candidate),
    ).toEqual({
      decision: 'escalate',
      reasons: [],
    })
  })

  test('never merges features', () => {
    expect(
      enforceDecision({ ...merge, category: 'feature' }, candidate),
    ).toEqual({
      decision: 'escalate',
      reasons: ['category "feature" is not auto-mergeable'],
    })
  })

  test('bug fixes need a test and a changeset', () => {
    const fix = { ...merge, category: 'bugfix' }
    const src = { path: 'packages/react/src/components/tag/tag.tsx' }
    expect(
      enforceDecision(fix, { ...candidate, files: [src] }).reasons,
    ).toEqual([
      'bug fix has no test changes',
      'bug fix to a package has no changeset',
    ])
    expect(
      enforceDecision(fix, {
        ...candidate,
        files: [
          src,
          { path: 'tests/react/components/tag.test.tsx' },
          { path: '.changeset/red-fox.md' },
        ],
      }),
    ).toEqual({ decision: 'merge', reasons: [] })
  })
})
