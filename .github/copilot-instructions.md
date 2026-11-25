# Cerberus Design System

Read [`AGENTS.md`](../AGENTS.md) at the repo root before making any change. It is
the single source of truth for agents: the rules, v2 conventions, commands and
workflows for this repository. Task playbooks live in [`.agents/`](../.agents).

The rules you must never skip:

- Run every script from the repo root (`pnpm --filter <name>` for one workspace).
- Never hand-edit generated files (`primitives.ts`, `api.ts`, `index.ts` in
  `packages/react/src/components/*`, `docs/generated/**`, any `styled-system/`).
- Create React components with `pnpm gen:component <Name>`. Every abstraction
  starts with `'use client'` and runs its `children` through `extractParts`.
- Before finishing, run `pnpm lint:ox`, `pnpm lint`, `pnpm test` and
  `pnpm generate:check`.
