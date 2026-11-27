---
name: Cerberus Docs
description: The Cerberus UI Platform docs site, built with Cerberus itself; its home page is the Styx at night, where one feature crosses from idea to production.
colors:
  realm-cerberus-violet: '#5f00b5'
  realm-acheron-gold: '#eca64b'
  realm-elysium-teal: '#5cd6c2'
  realm-oceanus-blue: '#0076cb'
  action-hover-violet: '#7f33c4'
  action-edge-lilac: '#bb93e1'
  action-link-hover-lilac: '#dfccf0'
  success-green: '#41c16e'
  underworld-night: '#130024'
  underworld-floor: '#0c0420'
  underworld-surface: '#130a2a'
  underworld-border: '#2d2246'
  underworld-border-strong: '#605579'
  bone-text: '#fcfbfe'
  bone-text-secondary: '#eeedf2'
  bone-text-muted: '#dedce5'
  daylight-bg: '#ffffff'
  daylight-text: '#130a2a'
typography:
  display-hero:
    fontFamily: 'Poppins, sans-serif'
    fontSize: 'clamp(3rem, 1.2rem + 6.4vw, 8rem)'
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: '-0.045em'
  display-statement:
    fontFamily: 'Poppins, sans-serif'
    fontSize: 'clamp(2.125rem, 1rem + 3.6vw, 5rem)'
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  display-sm:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.01875rem'
  subhead:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '1rem'
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: '0.02rem'
  card-title:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: '-0.00875rem'
  body:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0rem'
  body-md:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0rem'
  body-sm:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '0.8125rem'
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: '0rem'
  label:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: '0.02rem'
  code:
    fontFamily: 'Recursive, monospace'
    fontSize: '0.8125rem'
    fontWeight: 400
    lineHeight: 1.25
rounded:
  xs: '0.125rem'
  sm: '0.25rem'
  md: '0.375rem'
  lg: '0.5rem'
  xl: '0.75rem'
  full: '62.5rem'
spacing:
  2xs: '0.125rem'
  xs: '0.25rem'
  sm: '0.5rem'
  md: '1rem'
  lg: '1.5rem'
  xl: '2rem'
  2xl: '2.5rem'
  3xl: '4rem'
  4xl: '5rem'
components:
  button-primary:
    backgroundColor: '{colors.realm-cerberus-violet}'
    textColor: '{colors.bone-text}'
    height: '2.75rem'
    padding: '0 1.25rem'
  button-primary-hover:
    backgroundColor: '{colors.action-hover-violet}'
  live-plate:
    backgroundColor: '{colors.underworld-surface}'
    rounded: '{rounded.xl}'
    padding: '{spacing.xl}'
  install-line:
    backgroundColor: '{colors.underworld-night}'
    textColor: '{colors.bone-text}'
    typography: '{typography.code}'
    rounded: '{rounded.md}'
  claude-composer:
    backgroundColor: '{colors.underworld-night}'
    rounded: '1rem'
    padding: '{spacing.md}'
  global-nav:
    backgroundColor: '{colors.underworld-surface}'
    height: '4.75rem'
---

# Design System: Cerberus Docs

## Overview

**Creative North Star: "The crossing is the workflow"**

The docs site is the Cerberus design system wearing its own clothes. Every color, type style, radius and shadow is a Panda semantic token from `@cerberus/panda-preset`, so the site has no palette of its own: it has four. Cerberus, Acheron, Elysium and Oceanus each ship light and dark modes, and the visitor's active theme paints every surface.

The home page is the Styx at night. A fixed WebGL world renders ink smoke rising off a molten seam in dark water, with embers in the three minds' colors (designer, developer, agent) drifting up from it. The story moves the seam: it breaks into shards while the handoff problem is told, seals as Cerberus answers it, sits low and quiet under each chapter, and opens into a gate of light at the close. Over it, Poppins sets the type at poster scale, and every chapter proves its claim with live, controlled Cerberus components: a feature crossing from idea to production in the hero, the booking card decaying through four handoffs, Claude sessions, the theme switch, Signals and a 30,000-row Data Grid.

The hex values below are the **Cerberus theme** reference values (dark mode unless named "daylight"), recorded so tools can render swatches. Code never uses them: it uses the semantic token names given with each color.

**Key Characteristics:**

- Four themes, one token vocabulary: `page.*`, `action.*`, `dataViz.*` and the status palettes resolve per theme under `data-panda-theme` and the `dark` / `light` / `system` classes.
- Three minds, three colors: `dataViz.qualitative.100` (designers), `.300` (developers), `.500` (agents). The world's embers and seam, the role dots and the footer seam all use them.
- The world is one shader with one job, and it reads its colors from the DOM, so a theme change regrades it with no code change. A still poster takes its place without WebGL or motion.
- Live proof: real, controlled Cerberus components in every chapter, never screenshots. People, prompts and data are labelled as illustrative.
- Recursive is used only for code.

## Colors

The palette is the active theme's: near-black night (or white daylight) surfaces, one brand hue acting, and the three data-viz hues naming who did the work.

### Primary

- **Cerberus Violet** (`action.bg.initial`): filled buttons, the Claude composer's send button, the active stage tab. Base hue of the whole site.
- **The three minds** (`dataViz.qualitative.100`, `.300`, `.500`): role dots beside every person or agent, the world's ember and seam colors, token-colored code, the footer seam.
- **Hover Violet** (`action.bg.hover`): filled-button hover. **Lilac links** (`action.navigation.initial` / `.hover`).

### Secondary

- **Success Green** (`success.*`): resolved comments, passing checks, "In production", the live dot. Status only.
- **Warning / Danger** (`warning.*`, `danger.*`): the fidelity readout as it falls in "The problem", failing states. Status only.

### Neutral

- **Underworld Night** (`page.bg.initial`): the stage behind the world, every feathered copy pool, code wells, the Claude composer, the opaque ledger.
- **Underworld Surface** (`page.surface.initial` / `.100` / `.200`): the footer, live plates and windows, sent Claude messages.
- **Underworld Border** (`page.border.initial`, `.200`): hairlines in plates, editor and grid. Long rules in the footer fade out at both ends.
- **Bone Text** (`page.text.initial`, `.200`, `.100`): copy, secondary copy, captions and labels.

### Named Rules

**The Token-Only Rule.** Color is written as a semantic token name, never a hex, in every component, including syntax colors in the hero's editor and the gradients in the footer.

**The World Reads the DOM Rule.** The shader's colors come only from hidden probes styled with `dataViz.qualitative.*` and `page.bg.initial`. The theme section's switch recolors the world through `setThemeOverride`.

**The One Actor Rule.** Within any theme scope, `action.*` is the only hue that acts. The three minds' colors identify; status palettes signal status; neither decorates.

## Typography

**Display and body:** Poppins (via `--font-body`), weights 400, 600, 700.
**Code:** Recursive (via `--font-mono`), code only. The hero's editor turns on Recursive's `MONO` axis.

### Hierarchy

The display sizes are fluid clamps in `components/home/styles.ts`; everything else is a Cerberus text style applied with `textStyle`.

- **Display hero** (`displayHero`: 700, 3rem to 8rem, 0.94, -0.045em): the hero H1 and "Every handoff loses something." The close uses a larger one-off (up to 13rem, 0.86).
- **Display statement** (`displayStatement`: 600, 2.125rem to 5rem, 1.02, -0.035em): chapter headings and the ledger heading.
- **Readouts** (600, 2rem to 3.5rem, tabular): the fidelity counter and the Data Grid's live stats.
- **Body** (`body-lg`, max about 38rem): lead paragraphs. `body-sm` inside plates and the Claude thread.
- **Label** (`label-sm`): captions, stage tabs, comment bylines, footer fine print.

### Named Rules

**The Clip Room Rule.** Word-by-word reveals rise inside a clip that extends 0.18em above and 0.28em below the line box (with matching negative margins) and clips only vertically, so ascenders, descenders and tight tracking never get cut at line heights under 1.

**The Mono-for-Code Rule.** Recursive only for code: package names, commands, token names, file names, the editor. The `mono-*` text styles are for numbers in data visualization only.

**The Balanced Heading Rule.** Headings use `textWrap: 'balance'`; paragraphs `textWrap: 'pretty'`. Numbers that change get `fontVariantNumeric: 'tabular-nums'`.

## Layout

Scenes, not bands. Sections are full-height over one fixed world; each sets `data-pose`, and the director blends the world between neighbours. Content sits in a centered `maxW: 90rem` frame with side padding `md` / `xl` / `4xl`.

- **Hero:** copy left (H1, the three-minds legend, lead, Get started and a copyable install line, the line for agents), and on xl the **workflow stage** right. Facts and the scroll cue run along the bottom.
- **The problem:** on wide, tall screens it pins for about 2.6 viewports while four handoff cards (Design, Ticket, Code, Agent prompt) decay and the fidelity readout falls 100 → 72 → 41 → 18. Elsewhere the cards stack.
- **The answer:** a plate of Designer / Developer / Agent names that scramble into one token per row (pinned on lg), then the heading, the lead and a live plate built from those tokens.
- **Chapters** (`Beat`): split, split-reverse or stacked; a claim, its copy, and a live plate.
- **Ledger:** opaque `page.bg.initial`; the world pauses behind it (`data-world-cover`).
- **HUD:** a ruler of section ticks on the right edge on xl.

### Named Rules

**The Feathered Pool Rule.** Copy over the world reads on a `radial-gradient(closest-side, …)` pool of `page.bg.initial`, never a box.

**The Fixed Frame Rule.** Anything that changes content in place (the workflow stage, the theme setup code) holds a fixed size: the stage has fixed heights per breakpoint, and the theme setups are stacked in one grid cell so the tallest sets the height.

## Elevation & Depth

Plates and windows lift with `shadow.2xl`; the Claude composer and comment cards take `sm` and `xl`. Depth beyond that is the world's.

### The world (`components/home/world/styx.ts`)

One fullscreen ShaderMaterial: domain-warped smoke lit only near the seam, a jagged seam with a hot core and colored inner glow, glints on the water below, heat shimmer above, and three parallax layers of embers that cool from white to their mind's color. Light mode inverts it: ink smoke on paper, a dark seam with a soft colored halo.

Each pose is a `WorldState`: `unity` (shards to one seam), `spread`, `horizon`, `tilt`, `heat`, `gate`. Chapters keep the seam low (horizon -0.2 to -0.42) so copy stays clear; `final` opens the gate at center height, between the closing headline and its call to action. The pointer warms the seam and parts the embers; a tap sends a heat wave along it.

Budget: pixel ratio capped at 1.25, low-power preference, modest fbm octaves, no per-frame allocation, paused when hidden or covered, context loss handled, full disposal.

## Shapes

Plates and windows `rounded.xl`; comment cards and nested panels `rounded.lg`; code wells `rounded.md`. The Claude composer is `rounded.2xl`, and sent messages `rounded.xl`. Primary calls to action use the button's `sharp` shape. Role dots and comment pins are full circles.

## Components

### Workflow stage (signature)

The hero's product window. A real Cerberus `Tabs` switcher (Idea · Prototype · Build · Production) whose triggers fill as each stage plays; stages loop, tabs jump, and a pause button stops it. Every stage shows real components from its first frame:

- **Idea:** a design canvas with the booking page; comments from a designer, a developer and an agent pin onto components and are resolved.
- **Prototype:** the designer prompts Claude in its composer; a price breakdown appears on the canvas, marked new.
- **Build:** an IDE where an agent writes the form with current v2 APIs and runs the tests.
- **Production:** the live form in a browser frame on `booking.example.com`, and the release going out.

The picture is `aria-hidden` and `inert`, with an sr-only sentence per stage. Without motion every tab shows its finished frame.

### Claude prompt (`claude-prompt.tsx`)

`ClaudeComposer` (the message box with tools, model name and send button), `ClaudeUserMessage` (a sent prompt), `ClaudeByline`, and `ClaudeSession`, which types the prompt, sends it and reveals each `data-step` of the reply once, on view. Used wherever the page shows a prompt, always labelled as an illustrative Claude session.

### Live plate

`page.surface.100`, 1px `page.border.initial`, `shadow.2xl`, `rounded.xl`. Holds real, controlled components.

### Release feed

The Data Grid with 30,000 generated pull requests, no pagination (so it virtualizes), a new pull request every few seconds through Signals, and live stats, including the number of rows actually in the DOM, measured.

### Navigation and footer

- **Global nav:** clear over the home page at the top, then `page.surface.100` with `shadow.sm`.
- **Footer:** `page.surface.initial` under a horizon: the three-color seam, the soft light it casts, and a bright point that follows the pointer. Rules fade at both ends; fine print is sentence case `label-sm`.

### Motion

GSAP with exactly one Lenis smooth-scroll engine on the GSAP ticker, driving ScrollTrigger. The hero's intro raises the H1 word by word and eases the rest up after hydration; section headings reveal word by word (`expo.out`); plates rise 72px from opacity 0. The problem and answer are scrubbed and pinned through `gsap.matchMedia()`.

**The Reachable Reveal Rule.** Reveals animate opacity and transform only; anything already on screen is never hidden, and focus arriving early finishes a reveal at once.

**The Still Poster Rule.** Under `prefers-reduced-motion`, on the server and before hydration there is no smooth scroll, no world and no playback: the world is a still poster (`public/home/world/`) and every section renders its final state.

## Do's and Don'ts

### Do:

- **Do** write color as semantic tokens and type as text styles or the clamps in `styles.ts`.
- **Do** mark who did the work with the three minds' role dots, never avatars with initials or faces.
- **Do** check every surface in all four themes, light and dark, with WebGL on and off.
- **Do** label illustrative people, prompts and data, and measure anything you show as a live number.
- **Do** keep provenance beside every shipped raster (the posters' `.json` sidecars).

### Don't:

- **Don't** hide components and slowly reveal them; show the UI and animate the work happening on it.
- **Don't** hard-code a hex, rgb or pixel value in component styles.
- **Don't** add a second smooth-scroll engine, or hide a revealed element with `visibility`.
- **Don't** use a status palette for decoration.
- **Don't** replace a working component with a picture of it.
- **Don't** use v1 forms: `--font-poppins`/`--font-recursive`, `data-color-mode`, `_cerberusTheme`, `shape="default"`.
