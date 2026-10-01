---
name: charons-ferry
description: Review and standardize a Figma file to align with the Cerberus UI Platform.
disable-model-invocation: true
---

A file is ready to be cleaned up and standardized to ensure it matches the guidelines of the Cerberus Components file. This includes standardizing variables, text styles, components, and other design elements to ensure consistency and compliance with the Cerberus Design System file.

## Validate Libraries

The first step to achieve this is to validate the following files are selected on the Libraries options:

1. Created in this file
2. Cerberus Components

If these files are not selected, ask the user to select them before proceeding and re-run the skill. If these are additional Libraries added, confirm with the user before proceeding.

## Validate Dependency Skills

This task relies on other skills to exist before it can be run. Each dependency skill is reponsible for a specific standardization update for a particular aspect of the design system (e.g. spacing, typography, etc.).

The following skills are required:

- [token-hound](https://github.com/cerberus-ai/cerberus/tree/main/.agents/skills/token-hound)

If these skills are not available, the task cannot be run. Prompt the user to install the required skills before attempting to run this task. Once the skills are installed, the task can be retried.

## Step 1: Token Hound

This step uses the [token-hound](https://github.com/cerberus-ai/cerberus/tree/main/.agents/skills/token-hound) skill to inspect all frames for missing variables for all measurement attirbutes related to spacing.

Run `token-hound` now and proceed when it completes.
