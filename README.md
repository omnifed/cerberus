# Cerberus Design System

<img width="1454" alt="banner" src="https://github.com/omnifed/cerberus/blob/main/docs/public/acheron-og-image.png?raw=true">

[![JSR](https://jsr.io/badges/@cerberus/panda-preset)](https://jsr.io/@cerberus/panda-preset)
![NPM License](https://img.shields.io/npm/l/@cerberus-design/react)

## Architecture

## Repository structure

This is a monorepo that uses [pnPm](https://pnpm.io/) to manage dependencies and [Bun](https://bun.sh/) as the runtime language. You will need to install these tools to work on this project.

## JSR Requirements

We follow the slow types requirements process of the JSR publishing standard. This means you will be required to define the return types of all your exports which result in the following:

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
- tests: The test suite for Cerberus & React related packages.

### Cerberus Package Context

- **panda-preset**: The default preset for Cerberus. This is where all the styles live.
- **react**: The React components for Cerberus. React only owns components, not styles.

## Docs

To run the docs server, use the following command in the root of the repository project:

```bash
pnpm run start:docs
```

## AI/LLM Integration

Cerberus provides a specialized endpoint for AI and Large Language Model (LLM) integrations through the `.llms` directory. This feature allows AI tools to access structured documentation content in a format optimized for LLM consumption.

### Contribution Guidelines

You can help train your LLMs to follow our project guidelines by utilizing the `.llms` directory. This directory contains structured documentation that is specifically designed for AI processing, ensuring that your LLMs can effectively understand and utilize the Cerberus design system.

- **ark-ui.txt**: Documentation for the Ark UI components which is a dependency of our React package.
- **create-react-component.md**: Documentation for creating new React component APIs.
- **docs.md**: Documentation for contributing to the official website.
- **next.txt**: Documentation for the Next.js framework which powers the docs site.
- **style-guide.md**: Documentation for the style guide used throughout the project. Arguably the most important file for LLMs to understand the coding standards and practices of the project.

### Prompts

In our Wikis tab, you can find recommended prompts to use for executing these files.

### LLM Documentation Endpoint

The documentation is available at the `/llms.txt` endpoint, which provides:

- **Structured Documentation**: All documentation content organized hierarchically by sections (Get Started, Components, Styling, Theming, Blog)
- **Direct Content Access**: Links to raw GitHub content for detailed documentation
- **Version Information**: Current package version and release notes
- **AI-Optimized Format**: Plain text format specifically designed for LLM processing

### Usage

Access the LLM-formatted documentation at:

```url
https://cerberus.digitalu.design/llms.txt
```

This endpoint dynamically generates a comprehensive text representation of the entire Cerberus documentation, making it easy for AI tools to understand and reference the design system's capabilities, components, and usage patterns.

Download the file and use it as a reference with your chosen LLM.
