---
name: Cerberus Docs
description: The Cerberus UI Platform docs site, built with Cerberus itself; its home page is a crossing of Patinir's painting of the Styx.
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
  display-realm:
    fontFamily: 'Poppins, sans-serif'
    fontSize: 'clamp(4.25rem, 0.5rem + 15vw, 16rem)'
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: '-0.06em'
  display-statement:
    fontFamily: 'Poppins, sans-serif'
    fontSize: 'clamp(2.125rem, 1rem + 3.6vw, 5rem)'
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  display-claim:
    fontFamily: 'Poppins, sans-serif'
    fontSize: 'clamp(1.75rem, 1.1rem + 1.9vw, 3rem)'
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: '-0.03em'
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
  ferry-annotation:
    backgroundColor: '{colors.underworld-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    width: '18rem'
  install-line:
    backgroundColor: '{colors.underworld-night}'
    textColor: '{colors.bone-text}'
    typography: '{typography.code}'
    rounded: '{rounded.md}'
  global-nav:
    backgroundColor: '{colors.underworld-surface}'
    height: '4.75rem'
  crossing-rail-dot:
    backgroundColor: '{colors.underworld-night}'
    rounded: '{rounded.full}'
    size: '0.75rem'
---

# Design System: Cerberus Docs

## Overview

**Creative North Star: "The Crossing"**

The docs site is the Cerberus design system wearing its own clothes. Every color, type style, radius and shadow is a Panda semantic token from `@cerberus/panda-preset`, so the site has no palette of its own: it has four. Cerberus, Acheron, Elysium and Oceanus each ship light and dark modes, and the visitor's active theme paints every surface.

The home page is one journey across one painting: Joachim Patinir's _Landscape with Charon Crossing the Styx_ (c. 1520–24, Museo Nacional del Prado, public domain). Its places are the four themes and the four parts of the ecosystem: Elysium's angels (Design), the sea on the horizon (Foundation), Charon's ferry on the river (Build) and Cerberus at the gate (Agents), then the far shore. Scroll is the camera. A fixed WebGL stage renders the painting with a living river, a focus pull and a soft-light grade in the current realm's own hue, and the page's own `page.bg.initial` veils it for reading. Poppins sets the type at poster scale over it, and each realm's proof is a live plate of real components rendered in that realm's theme.

The hex values below are the **Cerberus theme** reference values (dark mode unless named "daylight"), recorded so tools can render swatches. Code never uses them: it uses the semantic token names given with each color.

**Key Characteristics:**

- Four themes, one token vocabulary: `page.*`, `action.*` and the status palettes resolve per theme under `data-panda-theme` and the `dark` / `light` / `system` classes.
- Realms are theme-scoped subtrees: a plate or probe sets `data-panda-theme="<realm>"` and its `action.*` tokens become that realm's hue.
- The painting is the world: one camera over one public-domain image, with a still poster that takes the same framing whenever WebGL or motion is unavailable.
- Poster-scale Poppins over the painting; copy reads on feathered pools of page color, never on boxes.
- Live proof: real, controlled Cerberus components in every chapter, never screenshots.
- Recursive is used only for code.

## Colors

The palette is the active theme's: near-black night (or white daylight) surfaces, one brand hue acting, and the painting's own color carrying the atmosphere.

### Primary

- **Cerberus Violet** (`action.bg.initial` in the Cerberus theme): filled buttons and the Cerberus realm's grade, rail dot and plate edge. Base theme hue of the whole site.
- **Acheron Gold**, **Elysium Teal**, **Oceanus Blue** (each theme's `action.bg.initial`): appear only inside a `data-panda-theme` subtree for that realm, or when the visitor picks that theme. The world reads them from hidden probe elements to grade the painting.
- **Hover Violet** (`action.bg.hover`): filled-button hover.
- **Lilac Edge** (`action.border.initial`, dark): the 1px edge on every live plate and Elysium leaf, in the plate's realm theme. Also `action.text.200` for package names in realm captions and `action.navigation.initial` for text links.
- **Pale Lilac** (`action.navigation.hover`, dark): link hover.

### Secondary

- **Success Green** (`success.text.100` / `success.bg.initial`): booking confirmations and status only.

### Neutral

- **Underworld Night** (`page.bg.initial`): the stage behind the painting, the veil color, every copy pool and scrim, install-line and code wells, the opaque ledger, empty rail dots.
- **Underworld Floor** (`page.surface.initial`): the footer.
- **Underworld Surface** (`page.surface.100`): live plates, the ferry annotation, the nav once scrolled, the rail strip on phones, rail name tags. The docked Cerberus session uses it at 88%.
- **Underworld Border** (`page.border.initial`): install-line and code-well hairlines, token-list rules. **Strong Border** (`page.border.200`): ledger rows, the people/agents divider, swatch frames, the dashed Figma canvas.
- **Bone Text** (`page.text.initial`): all type over the painting. **Bone Secondary** (`page.text.200`): ledger descriptions, caption tails, inactive rail stops. **Bone Muted** (`page.text.100`): registry names, plate labels, the footer's painting credit.
- **Daylight** (light mode `page.bg.initial` / `page.text.initial`): same roles; in light mode the world's veil is scaled to 45% so the painting stays in color.

### Named Rules

**The Token-Only Rule.** Color is written as a semantic token name, never a hex, in every component. The hexes here are swatch references for the Cerberus theme; the same token is gold, teal or blue in another theme.

**The Realm Scope Rule.** A realm hue appears by scoping, not by naming. Wrap the subtree in `data-panda-theme="<realm>"` and use `action.*`; never reach for another theme's hue by value. Cerberus needs `staticCss.themes: ['cerberus']` to be scopable inside another active theme.

**The Painting Grades, the Page Veils Rule.** The world's hue grade comes only from the realm's own `action.bg.initial`, read from the DOM; its veil comes only from `page.bg.initial`. Change the theme and the painting follows with no code change.

**The One Actor Rule.** Within any one theme scope, `action.*` is the only hue that acts. Status palettes signal status; they never decorate.

## Typography

**Display Font:** Poppins (via `--font-body`, falls back to sans-serif), weights 400, 600, 700
**Body Font:** Poppins
**Label/Mono Font:** Recursive (via `--font-mono`, falls back to monospace), code only

**Character:** One geometric sans carries every voice, from 16rem realm names to 0.75rem labels. At poster scale, with tight negative tracking, Poppins holds its own against a Flemish masterpiece; weight and size, not a second family, make the hierarchy.

### Hierarchy

The four display sizes are fluid clamps defined once in the home page's shared styles; everything else is a Cerberus text style applied with `textStyle`.

- **Display hero** (700, 3rem to 8rem, 0.94, -0.045em, max 11 to 12ch): the hero H1 and the final call.
- **Display realm** (700, 4.25rem to 16rem, 0.82, -0.06em): a realm's name, at the scale of the painting.
- **Display statement** (600, 2.125rem to 5rem, 1.02, -0.035em): the problem, the far shore and the ledger heading.
- **Display claim** (600, 1.75rem to 3rem, 1.06, -0.03em): a chapter's claim under the realm name.
- **Display small** (`display-sm`, 700, 1.875rem): page titles on the rest of the docs site.
- **Subhead** (`heading-xs`, 600, 1rem) and **Card title** (`heading-2xs`, 600, 0.875rem): plate and leaf titles, the ferry annotation title.
- **Body** (`body-lg`, 400, 1.125rem, 150%, max 34 to 46rem): lead paragraphs. `body-md` (1rem) for realm captions and ledger rows at md, `body-sm` (0.8125rem) for definitions, descriptions and code.
- **Label** (`label-sm`, 400, 0.75rem, +0.02rem): facts strip, painting credits, the scroll cue, rail stops, plate labels. `label-md` with weight 600 for "For people / For agents" and the closing links.

### Named Rules

**The Poster Scale Rule.** Display type over the painting uses only the four clamps above, with negative em tracking between -0.03em and -0.06em and line height at or under 1.06. Never add a fifth size or a second display face.

**The Mono-for-Code Rule.** Recursive is set with `fontFamily: 'mono'` on top of a Poppins label or body text style (`label-sm`, `body-sm`, `body-md`) and only for code: package names, install commands, token names, file names and inline code. The `mono-*` text styles are reserved for numbers in data visualization and are not used for UI copy.

**The Balanced Heading Rule.** Headings use `textWrap: 'balance'`; paragraphs use `textWrap: 'pretty'`. Numbers that change or align get `fontVariantNumeric: 'tabular-nums'`.

## Layout

Scenes, not bands. The page is a sequence of full-height sections over one fixed world; each section that marks a `[data-shot]` is a place the camera visits. Content sits in a centered `maxW: 90rem` frame with side padding `md` (phone), `xl` (md), `4xl` (lg). Sections breathe at `4xl` vertical padding and 85 to 120svh minimum heights.

- **Hero:** three rows in `100svh - var(--nav-height)`. The H1, lead, sharp Get started button and install line sit top left over the sky; the facts strip, painting credit and "Scroll to cross" cue run along the bottom; the ferry annotation rides Charon's boat on lg and sits in the flow on phones.
- **Chapters**, in two beats each: a vista (the realm name and its museum-label caption, bottom-aligned, placed `start` or `end` so it never covers the painting's subject), then the substance (claim, prose and a live plate). Four compositions:
  - **Diptych** (Elysium): copy above, then on lg a three-column grid of two leaves ("In Figma", "In code") flanking a `minmax(12rem, 0.7fr)` window where the angels stay in focus, captioned in italic `label-sm`. Stacked on phones.
  - **Horizon** (Oceanus): centered copy over the sky, the plate (max 52rem) riding the horizon below.
  - **Stacked** (Acheron): short copy, then one wide plate across the river.
  - **Docked** (Cerberus): on lg a 5fr / 7fr grid at 100svh that runs to the screen's right edge; the session plate docks there, sized to its content, and the copy stands by the gate on the left.
- **Ledger:** an opaque `page.bg.initial` page of packages, a 4fr / 4fr / 4fr row grid at lg separated by `page.border.200` rules. The world pauses behind it.
- **Crossing rail:** a fixed column of dots at the left edge, vertically centered, shown only while the crossing is on screen; a sticky scrollable strip under the nav on phones.
- Anchored sections set `scrollMarginTop` to clear the nav (`--nav-height: 4.75rem`). Breakpoints are Panda's: sm 40rem, md 48rem, lg 64rem, xl 80rem, 2xl 96rem.

### Named Rules

**The Feathered Pool Rule.** Copy over the painting reads on a pool of page color, never a box: an absolutely positioned, `aria-hidden` span behind the text with `radial-gradient(closest-side, …)` of `page.bg.initial` (about 80% at the center, transparent at the edge), centered inside its own box and inset beyond the text so it fades out before any edge shows. Realm names, chapter copy, the hero strip and the diptych caption all use it.

## Elevation & Depth

Depth is the painting's own: the page is flat type and plates floating over a lit landscape. Plates lift with one strong shadow; nothing else on the page casts one.

### Shadow Vocabulary

- **Plate lift** (`shadow.2xl`): every live plate, Elysium leaf and the ferry annotation.
- **Ambient low** (`shadow.sm`): the nav once scrolled, and rail name tags.

### World depth

The WebGL stage does the rest: a mip-bias depth of field that keeps the subject sharp and softens the edges, a stronger focus pull (`data-focus`) when a section's interface is in front, a vignette into the veil, and fine grain. Per anchor, `data-veil` sets how much page color covers the painting and `data-pan` slides the framing so the subject stays in the space the copy leaves open. Elysium's content beat keeps focus at 0.35 so the angels stay sharp between the leaves; Cerberus pans +0.22 so the gate shows beside the docked session.

### Named Rules

**The One Lift Rule.** A surface that holds live components gets `shadow.2xl` and a 1px `action.border.initial` edge in its realm's theme; copy never gets a surface or a shadow.

## Shapes

Gently rounded. Plates and leaves are `rounded.xl` (0.75rem), the ferry annotation `rounded.lg`, install lines and code wells `rounded.md`, swatches and tags `rounded.sm`. The docked Cerberus session drops its right border and right rounding where it meets the screen edge. Primary calls to action use the button's **sharp** shape: radius on the top-right and bottom-left corners only, the Cerberus signature silhouette. Rail dots are full circles; the far shore's dot is dashed, the one unfinished stop.

## Components

### Buttons

- **Shape:** the docs config makes `squared` the default; home calls to action pass `shape="sharp"`.
- **Primary:** `button()` recipe, filled `action.bg.initial` with `action.text.initial`, size lg (2.75rem tall), trailing Carbon `ArrowRight`.
- **Hover / Focus:** `action.bg.hover`; focus uses the preset's `focusVisibleRing: 'outside'`.

### Chips

- Cerberus `Tag`, `shape="pill"` `usage="outlined"` `palette="page"`: "Live components" on the ferry annotation and "In progress" on the far shore.

### Live Plate (signature)

A `page.surface.100` panel with a 1px `action.border.initial` edge, `shadow.2xl`, `rounded.xl` and `lg` / `xl` padding, rendered inside `data-panda-theme="<realm>"` so its components wear that realm's theme. It holds real, controlled components: the Elysium diptych leaves, the Oceanus theme switcher (which also regrades the sea), Charon's trip and the streaming Data Grid manifest, and the agent session.

### Ferry Annotation (signature)

A live booking form pinned to Charon's boat: a pulsing `page.text.initial` marker, a 1px leader line and an 18rem plate with a `NumberInput` and a sharp `Button`. On lg with motion it rides the boat as the camera moves and fades out with the hero.

### Install Line

A `Clipboard` control: `page.bg.initial` well, 1px `page.border.initial`, `rounded.md`, the command in mono `body-sm`, a ghost square icon button that copies.

### Navigation

- **Global nav:** sticky, `var(--nav-height)` tall. On the home page it is clear (no background, shadow or blur) while the page is at the top, then becomes `page.surface.100` with `shadow.sm` over `slow`. Without script it stays solid.
- **Crossing rail:** an ordered list of 0.75rem dots, each ringed 2px in its realm's `action.bg.initial` with a `page.bg.initial` fill; the current stop (`aria-current="location"`) fills and scales to 1.35. On lg a stop's name appears in a small surface tag beside its dot on hover or focus only.
- **Text links:** `action.navigation.initial`, underlined at 0.22em offset, hover `action.navigation.hover`.
- **Footer:** `page.surface.initial`; a `credit` slot carries media credits in `label-sm` `page.text.100`.

### Motion

GSAP with exactly one Lenis smooth-scroll engine on the GSAP ticker, driving ScrollTrigger. A director maps every `[data-shot]` anchor to a camera shot of the painting and blends between neighbors with smoothstep. Realm names and claims reveal word by word (`expo.out`, 1.1s); the problem statement lights word by word from 0.16 opacity as it scrolls; plates rise 72px from opacity 0 (`expo.out`, 1.2s). At first paint the poster comes into focus (`worldFocus`, 2.4s); the scroll cue flows (`cueFlow`) and the ferry marker pulses (`ferryPulse`).

**The Reachable Reveal Rule.** Reveals animate opacity and transform only, never `visibility` or `display`; anything already on screen is never hidden, and a plate's reveal finishes at once on `focusin`, so every control stays keyboard reachable.

**The Still Poster Rule.** Under `prefers-reduced-motion`, on the server and before hydration there is no smooth scroll, no camera and no canvas: the painting is a still poster and every section renders in its final state.

## Do's and Don'ts

### Do:

- **Do** write color as semantic tokens and type as text styles or the four display clamps; the hexes in this file are Cerberus-theme references only.
- **Do** color a realm by scoping a subtree with `data-panda-theme="<realm>"` and using `action.*` inside it.
- **Do** check every surface in all four themes and in light, dark and system modes, with WebGL on and off.
- **Do** set copy over the painting on a feathered `radial-gradient(closest-side, …)` pool of `page.bg.initial`.
- **Do** show real, controlled Cerberus components on live plates with `shadow.2xl` and the realm's `action.border.initial` edge.
- **Do** route all scroll motion through the one Lenis engine and GSAP, with a still poster and final states under reduced motion.
- **Do** credit the painting where it is shown, and keep provenance beside every shipped raster.

### Don't:

- **Don't** hard-code a hex, rgb or pixel value in component styles; use the token, or add one to the preset.
- **Don't** use Recursive for anything but code, and don't use the `mono-*` text styles for UI copy.
- **Don't** put copy over the painting in a hard-edged box or a full-width dark band; feather it.
- **Don't** add a second smooth-scroll engine, or hide a revealed element with `visibility`.
- **Don't** use a status palette (`success`, `warning`, `info`, `danger`) for decoration.
- **Don't** replace a working component with a picture of it.
- **Don't** use v1 forms: `--font-poppins`/`--font-recursive`, `data-color-mode`, `_cerberusTheme`, `shape="default"`.
