---
version: 1
slug: 'app-page-tsx'
primary_target: 'app/page.tsx'
related_targets: ['components/home', 'components/site-footer.tsx']
---

# Docs home page (v5: The crossing is the workflow)

- **Scope:** `docs/app/page.tsx` and `docs/components/home/*`, plus the global nav's clear state over the home page and the site footer.
- **Visitor mode:** Persuade, with immersive storytelling. Cerberus is a new product, so the page has to teach before it sells.
- **Audience:** internal product teams first, then AI coding agents and open-source React developers. Designers should feel as addressed as developers.
- **Goal:** more installs, and being read as a workflow ecosystem, not a component library or design system. Copy is written for Problem Aware and Solution Aware readers.
- **Proof:** live Cerberus components in every beat, the real llms.txt, a real theme switch with the correct preset install, a full-width streaming Data Grid with sort, filters, pinning, search and pagination, a package ledger with real install commands, and Section 508 / open-source facts. Nothing is invented. Demo data, the agent session and the Claude prompt are labelled, and the workspace is labelled "In development".
- **Memorable moment:** the Styx at night behind the page: smoke rising off a molten seam, with embers in the three minds' colors. The seam breaks into shards while the handoff problem is told, seals as Cerberus answers it, takes on a theme's colors when you switch themes, and opens into a gate of light at the close.
- **Revised with the user (2026-11-27):** the ribbons read as generic; the world became the Styx. The hero stopped hiding components and shows the real workflow. 02 and 03 gained scroll-driven drama, agents copy gained the human role, prompts mirror Claude, the theme block is fixed-height, the Data Grid carries 30,000 rows, and the footer lost its giant wordmark and hard rules.
- **Decided by the user (2026-11-26):**
  - Concept: "Three minds, one system (Recommended)", with the note: "Are we missing an opportunity leaving out something about the workflow instead of "system"? … I think this is an OK direction, but I'm not sure until I see it".
  - Hero copy: "One system for humans and agents to ship product. (Recommended)", shipped as "One workflow for humans and agents to ship product." in answer to that note.

## Direction contract

THESIS: The page is one story about one workflow. The handoff from design to ticket to code to agent loses something at every step; Cerberus gives designers, developers and agents one shared language. It refuses the category's component grid, logo wall and "build your UI" framing, and it never names sections after themes or gradients.

OWN-WORLD: A WebGL underworld (`world/styx.ts`): domain-warped ink smoke, a molten seam and rising embers, colored by the active theme's `dataViz.qualitative.100/300/500` tokens; ink on paper in light mode. Poppins at poster scale (hero up to 8rem, close up to 13rem). Recursive only for code. Live plates are solid page surfaces. A right-edge ruler marks the story on wide screens.

STORY:

1. Hero: one workflow, three minds named in a legend, and the workflow stage: comments resolved on a page of components (Idea), a designer prompting Claude (Prototype), an agent writing v2 APIs in an IDE (Build), the live form and release (Production).
2. The problem: the booking card decays through four handoffs while a fidelity readout falls to 18%. Then the answer: three teams' names scramble into one token.
3. Agents first: agents start the work, people make the call. The real llms.txt, a Claude session, and a review the visitor can approve.
4. Design anywhere: a Claude session with the Cerberus design system, and Figma with `@cerberus/figma`.
5. One language: change one token, every surface follows; theme presets installed correctly, in a fixed-height setup block.
6. Signals, then Ship: 30,000 pull requests in one virtualized, live Data Grid, with the DOM row count measured.
7. What's next: the workspace, in development.
8. Install, the close ("Three minds. One workflow." over the opened gate), and the footer's horizon.

FIRST VIEWPORT: "One workflow for humans and agents to ship product." at up to 8rem, left, over the low seam; on xl the workflow stage (Idea · Prototype · Build · Production) on the right. Beneath it are the three-minds legend, the lead, Get started, a copyable `npm install` line, and "Are you an agent? Start at /llms.txt". The facts and a "Scroll to see the workflow" cue run along the bottom. The nav is clear over the page.

FORM: A whole-surface redesign in an established design system. seed: none (not pinned). The user picked this concept and headline from options the builder wrote, offered through a question, and said "I'm not sure until I see it", so the world is provisional until the user reviews the built page. No roll was run for this round.

Signature interaction: scroll is the world's pose. A director maps every `[data-pose]` section to a state (unity, spread, horizon, tilt, heat, gate) and blends between them. Lenis plus the GSAP ticker drive it, and Three.js renders it. The pointer warms the seam and parts the embers; a tap sends a heat wave along it. Without motion or WebGL, a still poster stands in, and every section renders final.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
