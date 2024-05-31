# Cerberus Design System

<img width="1454" alt="banner" src="https://github.com/omnifed/cerberus/assets/4819738/b128be81-3c24-4fc7-8811-6c9a18d26c37">

![NPM Version](https://img.shields.io/npm/v/@cerberus-design/react)
[![JSR](https://jsr.io/badges/@cerberus/react)](https://jsr.io/@cerberus/react)
![NPM License](https://img.shields.io/npm/l/@cerberus-design/react)

## Architecture

<img width="1190" alt="Cerberus archictecture visual" src="https://github.com/omnifed/cerberus/assets/4819738/c706c0e7-3906-4ba7-8519-faa22e8504d4">

**Guarding the brand integrity of the Digital University realm by creating a flexible and extensible design system.**

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
