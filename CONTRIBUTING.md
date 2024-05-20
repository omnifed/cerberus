# Contributing to Cerberus Design System

Thank you for investing your time in contributing to our project! ✨.

Read our [Code of Conduct](https://github.com/omnifed/cerberus/blob/main/CODE_OF_CONDUCT.md) to keep our community approachable and respectable. Solid accepts a number of contributions from the broader community. More hands indeed make lighter work. We're however selective of the types of contributions we receive.

This usually involves vetting code quality, current focus, alignment with team philosophies etc. It's typically a good idea to submit a proposal for a change before spending time implementing it. This is to ensure that your efforts align with the current needs or more practically that work isn't completed by multiple contributors.

Note: If you would like your project listed here please submit a PR or contact a core/ecosystem member on Discord.

## Team Structure & Organization

There are a lot of opportunities to get involved. We organize Solid community efforts via Discord and typically onboard dedicated contributors into focused teams:

- Core Docs & Admin (headed by [@caseybaggz](https://github.com/caseybaggz))

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
8. Lint your changes: `pnpm lint:ts`, `pnpm lint:es`, and `pnpm lint:ox`.
9. Commit your changes: `git commit -am 'feat: my new feature'`.
10. Push to the branch: `git push origin my-branch-name`.
11. Submit a pull request **IN DRAFT MODE**. Be sure to **fill out** the PR template.
12. Once all the tests have passed in the CI in your draft PR, mark it as ready for review. This will automatically notify and assign the maintainers.
13. Wait for a maintainer to review your PR.

**Note**: Any PR that does not follow these guidelines will be closed without any notice. This includes _properly filling out the PR template._

### Review Process

1. A maintainer will review your PR and may request changes.
2. Make the requested changes.
3. Repeat steps 7-13 until the PR is approved.

### Merge Process

1. Once the PR is approved, a maintainer will merge it.
2. The PR will be closed and the changes will be merged into the main branch.
3. The main branch will ship the latest updates in the `next` tagged release.
