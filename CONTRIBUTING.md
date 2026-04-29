# Contributing to Cerberus Design System

Thank you for investing your time in contributing to our project! ✨.

Read our [Code of Conduct](https://github.com/omnifed/cerberus/blob/main/CODE_OF_CONDUCT.md) to keep our community approachable and respectable. Solid accepts a number of contributions from the broader community. More hands indeed make lighter work. We're however selective of the types of contributions we receive.

This usually involves vetting code quality, current focus, alignment with team philosophies etc. It's typically a good idea to submit a proposal for a change before spending time implementing it. This is to ensure that your efforts align with the current needs or more practically that work isn't completed by multiple contributors.

Note: If you would like your project listed here please submit a PR.

## Team Structure & Organization

There are a lot of opportunities to get involved. We organize community typically onboard dedicated contributors into focused teams:

- Core Docs & Admin (headed by [@caseybaggz](https://github.com/caseybaggz))
- Public Packages (headed by [@caseybaggz](https://github.com/caseybaggz))

Most team members are part of the Ecosystem Team or Core Team. Entry into these groups is selected by Core Members only. We do not accept applications or requests for entry. Selections are made ad-hoc according to internal needs. Selections are typically announced at Community Meetings which occur quarterly.

## Where do I start?

If you haven't found any interesting information on this page then we encourage you to start hacking at a Cerberus related utility or package that does. Building useful tools for fellow OSS ecosystem and Cerberus users enhances the whole platform.

We can't wait to see what you build!

## Contribution Process

1. Fork the repository.
2. Clone the forked repository to your local system.
3. Install the required tools: [pnPm](https://pnpm.io/) and [Bun](https://bun.sh)
4. Install the dependencies: `pnpm install` in the **root directory**.
5. Create a new branch: `git checkout -b my-branch-name`.
6. Make your changes (including unit tests).
7. Test your changes: `pnpm test:ci`.
8. Lint your changes: `pnpm lint` and `pnpm lint:ox`.
9. Commit your changes: `git commit -am 'feat: my new feature'`.
10. Push to the branch: `git push origin my-branch-name`.
11. Submit a pull request **IN DRAFT MODE** to the current `next/*` branch. Be sure to **fill out** the PR template.
12. Once all the tests have passed in the CI in your draft PR, mark it as ready for review. _This will automatically notify and assign the maintainers._
13. Wait for a maintainer to review your PR.

**Note**: Any PR that does not follow these guidelines will be closed without any notice. This includes _properly filling out the PR template._

**First time contributors**: If this is your first PR, you will need approval for
CI jobs to run. Contact or wait for an admin to handle this process.

### Review Process

1. A maintainer will review your PR and may request changes.
2. Make the requested changes.
3. Repeat steps 7-13 until the PR is approved.

### Merge Process

1. Once the PR is approved, a maintainer will merge it.
2. The PR will be closed and the changes will be merged into the main branch.
3. The main branch will ship the latest updates in the `next` tagged release.

## Development

For the best outcome to the repo, we recommend **working in the root directory**.
This repository uses [pnPm workspaces](https://pnpm.io/workspaces) which automagically
manages all scopes when you stay in the root.

1. Do not run any scripts within workspace directories
2. Run scripts in the **root directory**
3. Run workspace scripts in the **root directory** via the `--filter` flag

For example, here is how you would run the lint command for the React workspace:

```bash
# ~/cerberus
pnpm --filter @cerberus-design/react run lint:ts
```

There are a handful of global scripts that target workspaces on hand located
in the [root `package.json` file](./package.json)

### Sandboxes

We dogfood our products in the Docs site which also serves as the dev sandbox.
This allows us to streamline documentation while building and testing our APIs.

Once you have run `pnpm install` from the **root directory**, then you are ready
to fire up the dev environment via:

```bash
# ~/cerberus
pnpm start:docs
```

## Tests

Every package is required to have as close to 100% test coverage as possible.

All tests are located in the `tests` directory. We use [Bun](https://bun.sh/) as
our test runner and preferred Runtime environment.

> We will eventually migrate everything to [Deno](https://docs.deno.com/runtime/) to compliment our JSR packages and have a single runtime and tool suite.

1. Find the workspace directory
2. Find (or create if new) the file you are testing for
3. Write tests

To ensure you have full coverage run `test:ci` from **the root directory**.

## Docs

Our docs are currently being refactored to a new architecture design. However,
this should not stop you from contributing.

### Sections

Depending on where you are contributing in the docs, we prefer a specific page flow
to be used.

### Docs

#### Components

1. Import
2. Usage\*
3. Variant examples\*
4. Primitives

- Slots
- Data Attributes

5. API

- Grouped by meaningful slots
- Parts

_\*Should include a meaningful description on what it is and how to use it._

#### Data Grid

1. Overview
2. Variant examples\*
3. Any other relevant info for the feature

_\*Should include a meaningful description on what it is and how to use it._

#### Signals

1. Import
2. Usage\*
3. Variant examples\*
4. API
5. Return

_\*Should include a meaningful description on what it is and how to use it._

## Formatting

We use [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) as our preferred
linter. If you do not have Oxc setup for your IDE, we recommend visiting the
[Editor setup section](https://oxc.rs/docs/guide/usage/formatter/editors.html)
to ensure you have the best experience.

_This repository has built in support for [Zed IDE](https://zed.dev/)._

### Formatting Expectations

Once you have your IDE setup to be compatible with Oxc, you should not worry about
or nit-pick formatting. This is why we use Oxfmt. Worry about more important
things like building cool features or fixing bugs.

## AI

If you choose to use AI, we have an [`.llms`](./llms) directory that contains some
scripts that will help provide context to your preferred overlord.

Likewise, our docs site also contains a [LLMS.txt route](https://cerberus.digitalu.design/llms.txt) that will also help feed the machine that is killing art of engineering.

There is no judgement if you choose to vibe code anything. **Seriously.**

Having said that, we still pride ourselves highly on clean, high-performing, and
scalable code that provides an _excellent DX_.

Thus, if you choose to vibe, please include these standards into your prompts.
