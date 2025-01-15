# Cerberus Design System

<img width="1454" alt="banner" src="https://github.com/omnifed/cerberus/blob/main/docs/public/acheron-og-image.png?raw=true">

[![JSR](https://jsr.io/badges/@cerberus/panda-preset)](https://jsr.io/@cerberus/panda-preset)
![NPM License](https://img.shields.io/npm/l/@cerberus-design/react)

## Architecture

## Repository structure

This is a monorepo that uses [pnPm](https://pnpm.io/) to manage dependencies and [Bun](https://bun.sh/) as the runtime language. You will need to install these tools to work on this project.

## JSR Requirements

We follow the slow requirements process of the JSR publishing standard. This means you will be required to define the return types of all your exports which result in the following:

1. Significantly improve your package users' type checking performance.
2. Improve the automatic documentation generation.
3. Enable automatic .d.ts generation for Node.js.

## Getting started

### Install Required Tools

1. Install [pnpm](https://pnpm.io/installation)
2. Install [Bun](https://bun.sh/)

### Setup the project

After you fork the repository, install the dependencies by running the following command **in the root of the project**:

```bash
pnpm install
```

This will install all the dependencies for the project including the workspaces.

## Workspace Context

- docs: The official docs website for Cerberus.
- figma: Figma related files that run jobs on the CI using the Figma API.
- packages: The core packages that make up Cerberus.
- tests: The test suite for Cerberus.

### Cerberus Package Context

- **panda-preset**: The default preset for Cerberus. This is where all the styles live.
- **react**: The React components for Cerberus. React only owns components, not styles.
- **styled-system**: The source of truth preset build for Cerberus. This how people consume the styles from the preset. **This is the only package that should not be touched. It is purely generated files.**
- **icons**: DEPRECATED. Will be deleted in the future.
