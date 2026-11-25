# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Internal product teams (primary):** React developers inside the organization who adopt Cerberus as the shared UI layer for their apps. They come to the docs to start a project, look up a component's API, or move from v1 to v2.
- **AI coding agents:** agents that build with Cerberus on behalf of those teams. They read the site and `llms.txt` / `llms-full.txt` and need APIs that are unambiguous and machine-readable.
- **Open-source React developers:** public developers who find Cerberus on npm, JSR or GitHub and are deciding whether to use it.
- **Designers (goal, not yet true):** designers don't use the docs site today. The site should become something they can check against the Figma library.

## Product Purpose

Cerberus is an infrastructure-level UI platform for React 19: components on Ark UI, styles and tokens through Panda CSS v2, plus Data Grid and Signals packages. It gives teams and agents one source of cohesion and consistency so they can build faster together. The docs site is where people learn the platform, check that it fits, and get started.

## Positioning

"Improving React development for humans and agents." Every design system has components. Cerberus is building the larger ecosystem around them, and that ecosystem is as fluent for AI agents as it is for people. It ships agent guides, skills, llms.txt and a Panda MCP server, and every API is a single object together with its parts. It's also an infrastructure-level platform (preset, tokens, themes, recipes, components, Data Grid, Signals and Figma sync), not just a component kit.

- **Vision (not yet true; present it as direction, never as a shipped capability):** solve the human-to-AI workflow end to end, from designer to production code shipped. The goal is to be more than another UI ecosystem, component library or design system.
- **Ambition:** to be the visionaries of open source. In the user's words, "like how Art Craft has revived OSS products."
- **Business goal for the docs home page:** increase downloads and stand out from competing design systems.

## Operating Context

- Docs site: a Next.js app in `docs/` with MDX content (get-started, components, data-grid, signals, styling, theming), a blog with release posts (v2 shipped 2026-11-24), and pagefind search.
- Four themes, each with light and dark modes: Cerberus, Acheron, Elysium, Oceanus. Each theme/mode pair has its own WebGL scene background (`docs/components/scenes/`). In `system` mode, no scene renders.
- Design source of truth: the Cerberus Figma library and the "Cerberus Docs Site" Figma file.

## Capabilities and Constraints

- Packages: `@cerberus-design/react` (npm), `@cerberus-design/data-grid`, `@cerberus-design/signals`, `@cerberus/panda-preset` and `@cerberus/tokens` (JSR), and theme presets.
- Accessibility is a product claim: the hero advertises "ARIA AA Compliant".
- The docs site is built with Cerberus itself: semantic tokens and Panda style props, never raw values.

## Brand Commitments

- Maintained by Omnifederal, LLC. The footer carries the standard copyright line and the tagline "Built by demons of the Underworld".
- The naming comes from Greek mythology and the underworld (Cerberus, Charon, Hades, Acheron, Styx, Elysium, Oceanus, Thanatos). It runs through themes, gradients and demo content.
- Hero copy in use: "Cerberus UI Platform", "Improving React development for humans and agents.", "An infra-level UI platform to create cohesion and consistency so teams and agents can build faster, together."

## Evidence on Hand

- Real component library, theme presets, scenes and release posts in this repo.
- Figma comp for the v2 landing page: the "Cerberus Docs Site" file, page "landing pages", section "landing page | V2".
- Enterprise proof that can be used: the public GitHub repo and its open-source license, the npm and JSR registries, release history (blog posts from v1 to v2), the parent organization's name and branding, and an accessibility statement backing the ARIA AA claim.
- No customer testimonials, adoption numbers, named internal teams or benchmarks exist. Don't invent any.

## Product Principles

1. Prove it with the real thing: show working Cerberus components, not pictures of them.
2. Lead with the ecosystem, not the component count. The difference is the whole system and how fluent it is for agents.
3. Separate shipped from vision: say what works today, and present the designer-to-production end game honestly as where it's going.
4. Write for humans and agents equally: anything a person can learn here, an agent can too.
5. Dogfood: the site is built only with Cerberus tokens, recipes and components.
6. Themes are first-class: every surface works in all four themes and in both light and dark modes.

## Accessibility & Inclusion

- Cerberus is used mainly for US military software and is Section 508 compliant.
- Its WCAG AA conformance comes from Ark UI's accessible, WAI-ARIA-patterned primitives.
- The site itself must meet WCAG 2.x AA and Section 508, the same standards it advertises. Respect `prefers-reduced-motion`.
