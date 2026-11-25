// Hard limits for the PR autopilot. Claude's judgment only applies to PRs that
// pass every rule here, and every decision is checked against these rules again
// before anything is approved or merged. Change these through a reviewed PR.

export const config = {
  // Human who owns escalations (also the sole CODEOWNER).
  escalationReviewer: 'caseybaggz',

  // Who may have a PR merged without a human. Anyone else is escalated.
  trustedBots: ['dependabot[bot]', 'app/dependabot'],
  trustedAssociations: ['OWNER', 'MEMBER', 'COLLABORATOR'],

  // Categories Claude may merge. Everything else is escalated.
  mergeableCategories: ['dependency', 'security', 'lint', 'bugfix'],

  // A PR touching any of these is always escalated. These paths control CI,
  // releases, ownership, or the instructions agents (including this one) follow.
  protectedPaths: [
    /^\.github\//,
    /^\.changeset\/config\.json$/,
    /^scripts\//,
    /^\.husky\//,
    /^\.npmrc$/,
    /^\.mcp\.json$/,
    /^\.claude\//,
    /^\.agents\//,
    /(^|\/)AGENTS\.md$/,
    /(^|\/)CLAUDE\.md$/,
    /(^|\/)CODEOWNERS$/,
    /(^|\/)\.env/,
  ],

  // Lockfiles don't count toward the size limit.
  lockfiles: [
    /(^|\/)pnpm-lock\.yaml$/,
    /(^|\/)bun\.lockb?$/,
    /(^|\/)deno\.lock$/,
  ],
  maxChangedLines: 400,
  maxChangedFiles: 25,

  // PRs skipped without a comment.
  skipLabels: ['DO NOT MERGE', 'needs-human'],
  skipBranches: [
    // The Changesets version PR: merging it publishes a stable release.
    /^changeset-release\//,
  ],

  // PRs always escalated, whatever their content.
  escalateBranches: [
    // Figma token sync changes the design language: a human signs off.
    /^chore\/update-tokens/,
  ],

  labels: {
    merged: 'autopilot:merged',
    escalated: 'needs-human',
  },

  // Merge method used by the repo (merge commits keep the release pipeline's
  // commit-message checks working).
  mergeMethod: '--merge',
  maxMergesPerRun: 5,
  checksTimeoutMinutes: 25,
}
