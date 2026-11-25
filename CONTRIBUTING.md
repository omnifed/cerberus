# Contributing to Cerberus Design System

Thank you for investing your time in contributing to our project! ✨

Read our [Code of Conduct](https://github.com/omnifed/cerberus/blob/main/CODE_OF_CONDUCT.md) to keep our community approachable and respectable. Cerberus accepts a number of contributions from the broader community. More hands indeed make lighter work. We're however selective of the types of contributions we receive.

This usually involves vetting code quality, current focus, alignment with team philosophies etc. It's typically a good idea to submit a proposal for a change before spending time implementing it. This is to ensure that your efforts align with the current needs or more practically that work isn't completed by multiple contributors.

Note: If you would like your project listed here please submit a PR.

> **Using an AI agent?** Point it at [`AGENTS.md`](./AGENTS.md). It is the short,
> agent-ready version of this guide.

## Team Structure & Organization

There are a lot of opportunities to get involved. We organize community typically onboard dedicated contributors into focused teams:

- Core Docs & Admin (headed by [@caseybaggz](https://github.com/caseybaggz))
- Public Packages (headed by [@caseybaggz](https://github.com/caseybaggz))

Most team members are part of the Ecosystem Team or Core Team. Entry into these groups is selected by Core Members only. We do not accept applications or requests for entry. Selections are made ad-hoc according to internal needs. Selections are typically announced at Community Meetings which occur quarterly.

## Where do I start?

If you haven't found any interesting information on this page then we encourage you to start hacking at a Cerberus related utility or package that does. Building useful tools for fellow OSS ecosystem and Cerberus users enhances the whole platform.

We can't wait to see what you build!

## Setup

### Requirements

| Tool                           | Version                          | Used for                          |
| ------------------------------ | -------------------------------- | --------------------------------- |
| [Node.js](https://nodejs.org/) | `>=26`                           | Everything                        |
| [pnpm](https://pnpm.io/)       | `12.21.0` (see `packageManager`) | Workspaces and scripts            |
| [Bun](https://bun.sh/)         | `>=1.4.3`                        | Tests and the component generator |

Then install from the **root directory**:

```bash
# ~/cerberus
pnpm install
```

`pnpm install` also runs `prepare`, which sets up the Git hooks and generates
the Panda `styled-system` for the React, Data Grid and test workspaces.

### Working in the monorepo

This repository uses [pnpm workspaces](https://pnpm.io/workspaces), which
manages all scopes when you stay in the root.

1. Do not run any scripts within workspace directories
2. Run scripts in the **root directory**
3. Run workspace scripts in the **root directory** via the `--filter` flag

For example, here is how you would run the type check for the React workspace:

```bash
# ~/cerberus
pnpm --filter @cerberus-design/react run lint:ts
```

| Workspace                    | Path                    | What it is                                |
| ---------------------------- | ----------------------- | ----------------------------------------- |
| `@cerberus-design/react`     | `packages/react`        | React components                          |
| `@cerberus-design/data-grid` | `packages/data-grid`    | The Data Grid                             |
| `@cerberus-design/signals`   | `packages/signals`      | Signals                                   |
| `@cerberus/panda-preset`     | `packages/panda-preset` | Panda preset: recipes, conditions, tokens |
| `@cerberus/preset-*-theme`   | `packages/preset-*`     | Theme presets                             |
| `@cerberus/tokens`           | `packages/tokens`       | Design tokens                             |
| `docs`                       | `docs`                  | The docs site and dev sandbox             |
| `tests`                      | `tests`                 | Every test in the repo                    |
| `codegen`                    | `tools/codegen`         | The component generator                   |

The [root `package.json` file](./package.json) holds the global scripts that
target these workspaces.

### Sandbox

We dog food our products in the Docs site which also serves as the dev sandbox.
This allows us to streamline documentation while building and testing our APIs.

```bash
# ~/cerberus
pnpm start:docs
```

To see package changes in the docs while you work, run the matching watcher in a
second terminal:

```bash
# ~/cerberus
pnpm watch:react
pnpm watch:data-grid
```

> **Tip:** If docs pages start returning a 500 with a "designSystem isn't
> installed" error after rebuilding a package, stop the docs server, delete
> `docs/.next`, and start it again.

## Creating React APIs

In v2, every React API is an object that stores its primitive slots (e.g.
`Admonition.Root`, `Admonition.Heading`), so consumers only need a single import.
Do not build these by hand: use the generator.

### 1. Scaffold the component

From the **root directory**, run the generator with the component name. If an
[Ark UI](https://ark-ui.com/) API with the same name exists, the generator
bootstraps from its anatomy. For a Cerberus-only component, add its
`[name]Anatomy` to `packages/panda-preset/src/recipes/shared/anatomy.ts` first.

```bash
# ~/cerberus
pnpm gen:component DatePicker --dry-run # preview what will be created
pnpm gen:component DatePicker
```

This creates the following, and never overwrites existing files:

| File                                                  | Purpose                                    |
| ----------------------------------------------------- | ------------------------------------------ |
| `tools/codegen/configs/[name].ts`                     | The config every generator reads           |
| `packages/react/src/components/[name]/[name].tsx`     | The starter abstraction                    |
| `packages/panda-preset/src/recipes/slots/[recipe].ts` | The slot recipe, registered in the preset* |
| `tests/panda-preset/recipes/slots/[recipe].test.ts`   | The recipe test*                           |
| `tests/react/components/[name].test.tsx`              | The DX contract test                       |
| `docs/content/docs/components/[name].mdx`             | The docs page                              |
| `docs/examples/components/[name]/`                    | The demos (`index.tsx`, `basic.demo.tsx`)  |

_\*Skipped when the recipe already exists._

It then runs the generators, which write the `primitives`, `api` and `index`
files plus the docs API spec in `docs/generated/api-specs/`.

### 2. Finish the component

```bash
# ~/cerberus
pnpm codegen:panda                            # so the new recipe reaches every styled-system
pnpm --filter docs exec panda codegen --spec  # so recipe variants are documented
```

Then fill in the `TODO`s: the config description and a11y, the abstraction, the
recipe styles, the tests, the docs page and the demos.

**Do not edit generated files** (`primitives.ts`, `api.ts`, `index.ts` and
`docs/generated/`). Change the config in `tools/codegen/configs/` and regenerate
instead:

```bash
# ~/cerberus
pnpm generate:api
pnpm generate:docs
```

> **Note:** The generator only creates new components. To migrate an existing
> one, add its config to `tools/codegen/configs/` by hand (see
> `configs/accordion.ts`) and run `pnpm generate:api`.

### 3. Write abstractions with `extractParts`

All abstractions must declare the `'use client'` directive at the top and run
their `children` through `extractParts`
(`packages/react/src/internal/extract-parts.ts`). This is what powers
[part overrides](https://cerberus.digitalu.design/docs/components/composition#part-overrides):
consumers customize any inner layer by passing its primitive as a direct child.

- An empty part child (`<ProgressBar.Bar data-testid="qa" />`) patches that
  layer's props.
- A part child with `children` replaces that layer's default content.
- Every other child comes back as `content`, for the abstraction to render in
  its default slot.

```tsx
'use client'

import { extractParts } from '../../internal/extract-parts'
import { ProgressBarBar, ProgressBarRoot } from './primitives'

// Inner layers only: the root takes the component's own props
const PARTS = {
  bar: ProgressBarBar,
}

export function ProgressBarEl(props: ProgressBarProps) {
  const { now, children, ...rootProps } = props
  const { parts, content } = extractParts(children, PARTS)

  return (
    <ProgressBarRoot {...rootProps}>
      <ProgressBarBar style={{ width: `${now}%` }} {...parts.bar} />
      {content}
    </ProgressBarRoot>
  )
}
```

To let a part child replace a layer's default content, pull its `children` out
first:

```tsx
const { children: labelChildren, ...labelProps } = parts.label ?? {}

return (
  <CircularProgressLabel {...labelProps}>
    {labelChildren ?? label ?? 'Done'}
  </CircularProgressLabel>
)
```

`circular-progress/circular-progress.tsx` is a complete example. If an
abstraction always supplies a required prop to a part (like `Marquee.Edge`'s
`side`), list it in the config's `patchable` so consumers can omit it. The
generator's starter file already follows this pattern.

### 4. Test with the DX contract

Component tests use `describeDXContract` from `tests/test-utils/dx-harness.tsx`.
It checks that the primitives render, and that each abstraction renders and
accepts child part overrides.

Abstraction tests expect to render `'Content body'` for assumptions, so pass it
as the abstraction's `children` (or render it from `defaultProps`):

```tsx
import { describeDXContract } from '@/test-utils/dx-harness'
import { Admonition } from '@cerberus-design/react/admonition'

describeDXContract({
  name: 'Admonition',
  Root: Admonition.Root,
  primitiveTestNode: (
    <Admonition.Root>
      <Admonition.Content data-testid="primitive-content" />
    </Admonition.Root>
  ),
  abstractions: [
    {
      name: 'Admonition',
      Component: Admonition,
      defaultProps: { heading: 'Standard Heading' },
      children: 'Content body',
      PartToPatch: Admonition.Heading,
      PartToReplace: Admonition.Indicator,
    },
  ],
})
```

### 5. Check everything is in sync

```bash
# ~/cerberus
pnpm generate:check
pnpm test
```

`generate:check` fails if any generated file is out of date with its config.
CI runs the same check.

## Tests

Every package is required to have as close to 100% test coverage as possible.

All tests live in the `tests` workspace, in a folder that mirrors the package
they cover (`tests/react`, `tests/panda-preset`, `tests/data-grid` ...). We use
[Bun](https://bun.sh/) as our test runner with Testing Library and Happy DOM.

> We will eventually migrate everything to [Deno](https://docs.deno.com/runtime/) to compliment our JSR packages and have a single runtime and tool suite.

```bash
# ~/cerberus
pnpm test                                            # everything
pnpm --filter tests exec bun test react/components/tag   # one file or folder
pnpm --filter tests run test:ci                     # with coverage, like CI
pnpm test:codegen                                   # the generator
```

Tests use Bun's `expect`, extended with the Testing Library
[Jest DOM matchers](https://github.com/testing-library/jest-dom#custom-matchers)
(`toBeInTheDocument()`, `toHaveAttribute()` ...).

## Docs

Docs pages are MDX files in `docs/content/docs/[section]/`. A page is added to
the site and its navigation automatically, so you only need the file.

- Demos live in `docs/examples/[section]/[name]/` as `*.demo.tsx` files, and are
  registered in that folder's `index.tsx`. Render them with
  `<Example path="components/[name]" demo="[demo]" />`.
- Mark anything new with its version: `since: '2.0.0'` in the page frontmatter,
  or `<FeatureBadge since="2.0.0" />` next to a heading.
- Demos that pass primitives as children to an abstraction must be client
  components (`'use client'`).

### Page flow

Depending on where you are contributing in the docs, we prefer a specific page flow
to be used.

#### Components

1. Import
2. Usage\*
3. Variant examples\*
4. Customizing\* (child part overrides, `unstyled`)
5. API: `<ComponentApi spec="[name]" />`, generated from the component config

_\*Should include a meaningful description on what it is and how to use it._

#### Data Grid

1. Overview
2. Variant examples\*
3. Any other relevant info for the feature

_\*Should include a meaningful description on what it is and how to use it._

#### Signals

1. Usage\*
2. Variant examples\*
3. API

_\*Should include a meaningful description on what it is and how to use it._

## Code Quality

We use the [Oxc](https://oxc.rs/) toolchain: [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)
for formatting and [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for
linting. If you do not have Oxc set up for your IDE, we recommend visiting the
[Editor setup section](https://oxc.rs/docs/guide/usage/formatter/editors.html).

_This repository has built in support for [Zed IDE](https://zed.dev/)._

A pre-commit hook formats and lints your staged files for you, so you should
not worry about or nit-pick formatting. Worry about more important things like
building cool features or fixing bugs.

```bash
# ~/cerberus
pnpm lint:ox  # Oxlint
pnpm lint     # TypeScript for every package and the tests
```

## Development and Release Workflow

Cerberus uses [Trunk-Based Development](https://trunkbaseddevelopment.com/) and [Changesets](https://github.com/changesets/changesets) to manage versioning, changelogs, and package releases.

Our repository has a single source of truth: `main`. All feature work and bug fixes should be branched off `main` and merged directly back into `main` via Pull Request.

### 1. Creating a Changeset

When you submit a PR that alters the public API or fixes a bug, you must include a changeset. This tells our release bot whether your change is a major, minor, or patch bump, and provides the text for the `CHANGELOG.md`.

To create a changeset, run the following command at the root of the repository:

```bash
pnpm changeset
```

The CLI will prompt you to:

1. Select which packages your PR modifies.
2. Choose the SemVer bump type (major, minor, or patch).
3. Write a short description of the change (this will be added directly to the changelog).

Once finished, a small Markdown file will be generated in the `.changeset` folder. Commit this file along with your code changes.

> **Note:** If you forget to add a changeset, our GitHub bot will leave a comment on your PR reminding you to do so. Minor internal chores or typo fixes in documentation do not require a changeset.

### 2. Before you open a PR

CI runs these checks on every PR. Run them locally first:

```bash
# ~/cerberus
pnpm lint:ox
pnpm lint
pnpm test
pnpm generate:check
```

### 3. Validating with Canary Releases (Pre-releases)

We do not use long-lived release branches. Instead, we use continuous canary releases.

Whenever a Pull Request is merged into `main`, our CI automatically publishes a canary version (`[version]-next.[timestamp].[commit]`) to npm and JSR under the `next` tag.

If you want to test your merged feature in your own application before our official release, simply install the canary version:

```bash
# Example
pnpm install @cerberus-design/react@next
```

### 4. The Stable Release Process (Maintainers Only)

Every time a feature merges into `main`, the Changeset bot aggregates the changes and updates a single, persistent Pull Request titled "Version Packages".

This automated PR maintains the calculated version bumps and finalized changelogs. When the core team determines it is time for a stable release (usually every 2-3 weeks), we merge this PR. Merging the "Version Packages" PR automatically creates the GitHub Release tag and publishes the stable packages to both NPM and JSR.

### Review Process

1. Create a "Draft PR" and keep it a draft until all checks pass and the changeset is added.
2. Once the PR is ready, remove the draft status and an admin will be notified.
3. A maintainer will review your PR and may request changes.
4. Make the requested changes.
5. Repeat steps 3-4 until the PR is approved.

### Merge Process

1. Once the PR is approved, a maintainer will merge it.
2. The PR will be closed and the changes will be merged into the `main` branch.
3. The `main` branch will ship the latest updates in the `next` tagged release.

## AI

There is no judgement if you choose to vibe code anything. **Seriously.**

Having said that, we still pride ourselves highly on clean, high-performing, and
scalable code that provides an _excellent DX_. We've set the repo up so your
agent already knows our standards:

- [`AGENTS.md`](./AGENTS.md): the commands, rules and workflows every agent
  should follow. Most agents read it automatically.
- [`.agents/`](./.agents): detailed playbooks for specific tasks, like building
  a component or writing a docs page.
- Agent skills for Panda CSS (`panda-css`, `panda-css-theming`,
  `panda-css-migrate`) are installed for Claude, Cursor, Gemini, Copilot and
  other agents.
- Our docs site has an [llms.txt route](https://cerberus.digitalu.design/llms.txt)
  that will also help feed the machine that is killing the art of engineering.

If your agent doesn't pick up `AGENTS.md` on its own, add it to the
conversation context.
