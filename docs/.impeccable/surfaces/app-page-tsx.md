---
version: 1
slug: 'app-page-tsx'
primary_target: 'app/page.tsx'
related_targets: ['components/home', 'components/site-footer.tsx']
---

# Docs home page (v4: Three minds, one workflow)

- **Scope:** `docs/app/page.tsx` and `docs/components/home/*`, plus the global nav's clear state over the home page and the site footer.
- **Visitor mode:** Persuade, with immersive storytelling. Cerberus is a new product, so the page has to teach before it sells.
- **Audience:** internal product teams first, then AI coding agents and open-source React developers. Designers should feel as addressed as developers.
- **Goal:** more installs, and being read as a workflow ecosystem, not a component library or design system. Copy is written for Problem Aware and Solution Aware readers.
- **Proof:** live Cerberus components in every beat, the real llms.txt, a real theme switch with the correct preset install, a full-width streaming Data Grid with sort, filters, pinning, search and pagination, a package ledger with real install commands, and Section 508 / open-source facts. Nothing is invented. Demo data, the agent session and the Claude prompt are labelled, and the workspace is labelled "In development".
- **Memorable moment:** three streams of light, one per mind, live behind the page. They tangle while the handoff problem is told, braid as Cerberus answers it, take on a theme's colors when you switch themes, and converge into one beam at the close.
- **Decided by the user (2026-11-26):**
  - Concept: "Three minds, one system (Recommended)", with the note: "Are we missing an opportunity leaving out something about the workflow instead of "system"? … I think this is an OK direction, but I'm not sure until I see it".
  - Hero copy: "One system for humans and agents to ship product. (Recommended)", shipped as "One workflow for humans and agents to ship product." in answer to that note.

## Direction contract

THESIS: The page is one story about one workflow. The handoff from design to ticket to code to agent loses something at every step; Cerberus gives designers, developers and agents one shared language. It refuses the category's component grid, logo wall and "build your UI" framing, and it never names sections after themes or gradients.

OWN-WORLD: A living WebGL organism of three streams of light on the page's own background, colored by the active theme's `dataViz.qualitative.100/300/500` tokens: additive glow in dark mode, per-stream ink in light mode. Poppins at poster scale (hero up to 8rem, close up to 13rem, footer wordmark up to 24rem). Recursive only for code. Live plates are solid page surfaces. A right-edge ruler marks the story on wide screens.

STORY:

1. Hero: one workflow, three minds named in a legend.
2. The problem: every handoff loses something. Then the answer: one shared language.
3. Agents first: what an agent reads (the real llms.txt) and what it ships (live code).
4. Design anywhere: Claude with the Cerberus design system, Figma with `@cerberus/figma`.
5. One language: change one token, every surface follows; theme presets installed correctly.
6. Ship: a release feed of changes from every kind of author, in the Data Grid.
7. What's next: the workspace, in development.
8. Install, then the close: "Three minds. One workflow."

FIRST VIEWPORT: "One workflow for humans and agents to ship product." at up to 8rem, top left, over the braided organism. Beneath it are the three-minds legend, the lead, Get started, a copyable `npm install` line, and "Are you an agent? Start at /llms.txt". The facts and a "Scroll to see the workflow" cue run along the bottom. The nav is clear over the page.

FORM: A whole-surface redesign in an established design system. seed: none (not pinned). The user picked this concept and headline from options the builder wrote, offered through a question, and said "I'm not sure until I see it", so the world is provisional until the user reviews the built page. No roll was run for this round.

Signature interaction: scroll is the organism's pose. A director maps every `[data-pose]` section to a state (braid, radius, axis, angle, energy) and blends between them. Lenis plus the GSAP ticker drive it, and Three.js renders it. The pointer bends the streams and a tap sends a ring. Without motion or WebGL, a still frame of the organism stands in, and every section renders final.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
