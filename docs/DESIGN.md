---
name: Cerberus Docs
description: The Cerberus UI Platform docs site, built with Cerberus itself and told as a descent through its realms.
colors:
  realm-cerberus-violet: '#5f00b5'
  realm-acheron-gold: '#eca64b'
  realm-elysium-teal: '#5cd6c2'
  realm-oceanus-blue: '#0076cb'
  action-hover-violet: '#7f33c4'
  action-edge-lilac: '#bb93e1'
  action-link-hover-lilac: '#dfccf0'
  charon-gradient-start: '#4c0091'
  charon-gradient-end: '#9f66d3'
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
  display:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '2.5rem'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.05rem'
  display-sm:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.01875rem'
  headline:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '2.625rem'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '0rem'
  title:
    fontFamily: 'Poppins, sans-serif'
    fontSize: '2.25rem'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '0rem'
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
  showcase-card:
    backgroundColor: '{colors.underworld-surface}'
    rounded: '{rounded.md}'
    padding: '{spacing.lg}'
  realm-plane-front:
    backgroundColor: '{colors.underworld-surface}'
    rounded: '{rounded.xl}'
    padding: '{spacing.xl}'
  install-line:
    backgroundColor: '{colors.underworld-night}'
    textColor: '{colors.bone-text}'
    typography: '{typography.code}'
    rounded: '{rounded.md}'
  global-nav:
    backgroundColor: '{colors.underworld-surface}'
    height: '4.75rem'
  depth-gauge-node:
    backgroundColor: '{colors.underworld-night}'
    rounded: '{rounded.full}'
    size: '1rem'
---

# Design System: Cerberus Docs

## Overview

**Creative North Star: "The Descent"**

The docs site is the Cerberus design system wearing its own clothes. Every color, type style, radius and shadow is a Panda semantic token from `@cerberus/panda-preset`, so the site has no palette of its own: it has four. Cerberus, Acheron, Elysium and Oceanus each ship light and dark modes, and the visitor's active theme paints the whole page on near-black (or white) surfaces. The site's own contribution is how those themes are staged: as realms stacked in depth, read top to bottom from design down to the agents at the gate.

Density is editorial, not dashboard. Wide 90rem frames, generous 4xl section rhythm, one idea per realm. Proof is the real thing: the hero is a living showcase of real Cerberus components running one scripted ferry trip, and each realm's front plane holds a working artifact (a token table, a live Data Grid, an install line). Depth is literal: translucent planes recede in perspective behind the front plane, and a vertical gauge tracks how far down the visitor has gone.

The hex values below are the **Cerberus theme** reference values (dark mode unless named "daylight"). They are what the tokens resolve to in the base theme, recorded so tools can render swatches. Code never uses them: it uses the semantic token names given with each color, which resolve per theme and mode.

**Key Characteristics:**

- Four themes, one token vocabulary: `page.*`, `action.*`, status palettes and `gradient.*` tokens resolve per theme under `data-panda-theme` and the `dark` / `light` / `system` classes.
- Realms are theme-scoped subtrees: a section sets `data-panda-theme="<realm>"` and its `action.*` tokens become that realm's brand hue.
- Depth over grids: receding planes and a ringed gauge replace rows of equal cards.
- Living showcase: real, controlled components on a pausable timeline, never screenshots.
- Poppins for everything people read; Recursive mono only for code, package names and numeric readouts.

## Colors

The palette is the active theme's: a near-black violet night (or white daylight) with one brand hue doing the acting, and the four brand hues appearing together only where the realms are named.

### Primary

- **Cerberus Violet** (`brand.60`, `action.bg.initial` in the Cerberus theme): filled buttons, the active gauge node, the gauge rail and plane edges inside the Cerberus realm. Base theme hue of the whole site.
- **Acheron Gold** (Acheron `brand.60`): the Acheron realm's action hue; appears only inside `data-panda-theme="acheron"` subtrees or when the visitor picks Acheron.
- **Elysium Teal** (Elysium `brand.60`): the Elysium realm's action hue, same scoping.
- **Oceanus Blue** (Oceanus `brand.60`): the Oceanus realm's action hue, same scoping.
- **Hover Violet** (`action.bg.hover`): filled-button hover.
- **Lilac Edge** (`action.border.initial`, dark): the bright edge on the front realm plane and on a showcase card when it is the live card. Also `action.text.200` for plane titles and `action.navigation.initial` for underlined links.
- **Pale Lilac** (`action.navigation.hover`, dark): link hover.

### Secondary

- **Charon Gradient** (`gradient.charon-dark.start` to `.end`): the only gradient text on the site, the "UI Platform" half of the H1, drawn bottom to top.
- **Success Green** (`success.bg.initial`): the "ARIA AA Compliant" tag and booked-trip admonition. Status palettes (`success`, `warning`, `info`, `danger`) are used only for status meaning.

### Neutral

- **Underworld Night** (`page.bg.initial`): page background, hero copy column, install-line and code-block wells, empty gauge nodes.
- **Underworld Floor** (`page.surface.initial`): the footer.
- **Underworld Surface** (`page.surface.100`): nav bar, showcase cards, the front realm plane, the close band, the gauge's mobile strip.
- **Underworld Border** (`page.border.initial`): 1px hairlines between bands, card borders, the people/agents divider. **Strong Border** (`page.border.200`): the far shore's dashed outline and swatch frames.
- **Bone Text** (`page.text.initial`): headings and primary text. **Bone Secondary** (`page.text.200`): body copy and descriptions. **Bone Muted** (`page.text.100`): package lists, captions, inactive gauge stops, "Assigned to"-style labels.
- **Daylight** (`page.bg.initial` / `page.text.initial` in light mode): the same roles in light mode; nothing else changes.

### Named Rules

**The Token-Only Rule.** Color is written as a semantic token name, never a hex, in every component. The hexes here are swatch references for the Cerberus theme; the same token is gold, teal or blue in another theme.

**The Realm Scope Rule.** A realm hue appears by scoping, not by naming. To color something Acheron gold, wrap it in `data-panda-theme="acheron"` and use `action.*`; never reach for another theme's hue directly. Cerberus needs `staticCss.themes: ['cerberus']` to be scopable inside another active theme.

**The One Actor Rule.** Within any one theme scope, `action.*` is the only hue that acts. Status palettes signal status; they never decorate.

## Typography

**Display Font:** Poppins (via `--font-body`, falls back to sans-serif), weights 400, 600, 700
**Body Font:** Poppins
**Label/Mono Font:** Recursive (via `--font-mono`, falls back to monospace)

**Character:** One geometric sans carries every voice from the 2.5rem display to the 0.75rem label; weight, not family, makes the hierarchy. Recursive appears only where the text is literally code or a measured number.

### Hierarchy

All roles are Cerberus text styles, applied with `textStyle`, never with raw sizes.

- **Display** (`display-md`, 700, 2.5rem, 115%): the H1 at md and up. `display-sm` (1.875rem) for the H1 on phones, the Descent headline at md and up, the close band and page titles.
- **Headline** (`heading-2xl`, 600, 2.625rem, 120%): realm headings and the far shore at md and up; the Descent headline on phones.
- **Title** (`heading-xl`, 600, 2.25rem): realm headings on phones. `heading-lg` (1.875rem) for accessibility-page sections.
- **Subhead** (`heading-xs`, 600, 1rem): realm plane titles, gauge stop names at lg, footer brand line, numeric readouts set in mono.
- **Card title** (`heading-2xs`, 600, 0.875rem): showcase card titles, the hero sub-line, table captions.
- **Body** (`body-lg`, 400, 1.125rem, 150%, max 46 to 60ch): every paragraph of narrative copy. `body-sm` (0.8125rem) for definition-list answers, footer links and code.
- **Label** (`label-sm`, 400, 0.75rem, +0.02rem): nav links, version, captions, gauge depth and package lines. `label-md` (1rem) with weight 600 for the "For people / For agents" terms and footer column titles.

### Named Rules

**The Mono-for-Code Rule.** Recursive is set with `fontFamily: 'mono'` on top of a Poppins text style (`label-sm`, `body-sm`, `heading-xs`) for package names, install commands, inline code, depth numbers and percentages. The `mono-*` text styles are reserved for numbers in data visualization and are not used for UI copy.

**The Tabular Readout Rule.** Any number that changes or aligns (version, depth, progress percent) gets `fontVariantNumeric: 'tabular-nums'`.

**The Balanced Heading Rule.** Headings use `textWrap: 'balance'`; paragraphs use `textWrap: 'pretty'`.

## Layout

Bands, not cards. Each band spans the viewport with a 1px `page.border.initial` hairline between bands, and its content sits in a centered frame of `maxW: 90rem` with side padding `md` (phone), `xl` (md), `2xl` (lg). Vertical rhythm is `4xl` (5rem) per section and per realm; inner stacks step `xs` / `md` / `lg`.

- **Hero:** one column on phones; at lg a 2fr / 3fr split. The copy column is sticky under the nav, vertically centered in `100dvh - var(--nav-height)`, and lifted with `shadow.lg` over the showcase. The showcase on the right is a two-column grid (one column on phones, where tablet-only cards are hidden) on a 40% `page.bg.initial` veil over the theme's WebGL scene, and it runs past the fold.
- **Descent:** at lg a `15rem` gauge column plus the content column; the gauge is sticky below the nav. Under lg the gauge becomes a horizontal, scrollable strip pinned under the nav. Each realm is a 5fr / 7fr copy-and-plane grid at xl, min height 80dvh, stacked below xl.
- **Close and footer:** two-column at lg, aligned to the bottom edge; footer columns are grouped link lists.
- Anchored sections set `scrollMarginTop` to clear the nav (`--nav-height: 4.75rem`).

Breakpoints are Panda's: sm 40rem, md 48rem, lg 64rem, xl 80rem, 2xl 96rem.

## Elevation & Depth

A hybrid: tonal layering does most of the work (night background, surface one step up), with the preset's soft violet-tinted ambient shadows for lift, and true 3D perspective for the Descent.

### Shadow Vocabulary

- **Ambient low** (`shadow.sm`): nav bar and resting showcase cards.
- **Ambient mid** (`shadow.md`): the live showcase card.
- **Ambient high** (`shadow.lg`): the sticky hero copy column and receding realm planes.
- **Lifted** (`shadow.xl`): the front realm plane.

### Depth planes

Behind each realm's front plane, one plane per realm still below it recedes: each is scoped to its own realm theme, filled with `action.bg.initial` at 12% opacity, edged in `action.border.initial`, and pushed back with perspective, rotateX and scale steps while opacity falls. The front plane is opaque `page.surface.100` with the bright edge in the realm's `action.border.initial`. Where `animation-timeline: view()` is supported and motion is safe, the front plane rises from depth with the `descend` keyframe as it scrolls into view.

### Named Rules

**The Bright Front Edge Rule.** Only the plane in front gets the bright `action.border.initial` edge at full opacity; everything behind it is translucent. On cards the same edge marks the one live element.

**The Flat-at-Rest Rule.** Showcase cards are hairline-bordered and `shadow.sm` at rest; elevation rises only to mark state (the live card) or depth (the front plane).

## Shapes

Gently rounded, never pill-shaped except where the component says so. Cards are `rounded.md` (0.375rem), compact cards `rounded.sm`, realm planes and the far shore `rounded.xl` (0.75rem), install lines and code wells `rounded.md`. Primary calls to action use the button's **sharp** shape: `lg` radius on the top-right and bottom-left corners only, square on the other two, the Cerberus signature silhouette. Gauge nodes are full circles. The far shore, the one thing not yet shipped, is the only dashed outline on the page; its gauge node is dashed to match.

## Components

### Buttons

- **Shape:** the docs config makes `squared` (`rounded.sm`) the default; marketing calls to action pass `shape="sharp"`.
- **Primary:** `button()` recipe, `action` palette, filled: `action.bg.initial` with `action.text.initial`, size lg (2.75rem tall, 1.25rem side padding), weight 600, trailing Carbon arrow icon.
- **Hover / Focus:** background shifts to `action.bg.hover`; focus uses the preset's `focusVisibleRing: 'outside'`.
- **Outlined:** used inside the showcase (Request quote). **Ghost icon buttons:** the showcase pause control and the clipboard trigger.

### Chips

- **Tags** use the Cerberus `Tag`: `shape="square"` `usage="filled"` for the hero proof tags (success for the AA claim, page for Panda CSS), `shape="pill"` for showcase highlights and the far shore's "In progress" (outlined, page palette).

### Cards / Containers

- **Showcase card:** `page.surface.100`, 1px `page.border.initial`, `rounded.md`, `shadow.sm`, `lg` padding, `heading-2xs` title plus `label-sm` description. When live (`data-live=true`) the border becomes `action.border.initial` and the shadow `md`, transitioning over `slow` with the `out` easing.
- **Front realm plane:** see Elevation & Depth. Header row is the realm name and area in `action.text.200` `heading-xs`, then package names in mono `label-sm` `page.text.100`.

### Inputs / Fields

Cerberus `Field` with `DatePicker`, `NumberInput`, `Switch`, `Radio`, `Checkbox`, `Textarea`, `Rating`, `FileUploader`, styled entirely by their recipes; the site does not restyle them.

### Navigation

- **Global nav:** sticky, `var(--nav-height)` tall, `page.surface.100` with `shadow.sm` and a slight backdrop blur; three-column grid at lg with search centered. Links are `label-sm` `page.text.initial`, hover `action.navigation.hover`, current page `action.navigation.visited`. Version, GitHub, mode menu and theme menu sit right.
- **Text links in copy:** `action.navigation.initial`, underlined at 0.2em offset, hover `action.navigation.hover`.
- **Footer:** `page.surface.initial`, `body-sm` `page.text.200` links that turn `page.text.initial` and underline on hover.

### Depth Gauge (signature)

A vertical ordered list of realm stops that doubles as the ecosystem map. Each stop is a link with a 1rem ringed node (2px ring in the stop realm's `action.bg.initial`, `page.bg.initial` fill) joined by a 2px rail in the realm hue; the current stop (by IntersectionObserver, `aria-current="location"`) fills its node and gains a 4px `action.ghost.hover` halo. Labels stack mono depth number, `heading-xs` name, area and mono package line. The far shore stop has a dashed `page.text.100` node.

### Living Showcase (signature)

A two-column grid of real components (date range, number input, switch, admonition, progress bar with popover, file upload, avatar status, rating, radio vote) driven by one timeline that walks a ferry trip card by card. Every component stays controlled, a pause control is always present, autoplay waits for the intro and never runs under reduced motion, and the resting state is the server-rendered state.

### Install Line

A `Clipboard` control: `page.bg.initial` well, 1px `page.border.initial`, `rounded.md`, the command in mono `body-sm`, and a small ghost icon button that copies.

## Do's and Don'ts

### Do:

- **Do** write color as semantic tokens (`page.text.initial`, `action.border.initial`) and type as text styles (`textStyle: 'body-lg'`); the hexes in this file are Cerberus-theme references only.
- **Do** color a realm by scoping a subtree with `data-panda-theme="<realm>"` and using `action.*` inside it.
- **Do** check every surface in all four themes and in light, dark and system modes.
- **Do** show real, controlled Cerberus components, with a pause control on anything that moves on its own and nothing autoplaying under `prefers-reduced-motion`.
- **Do** put motion behind `_motionSafe` and Panda duration and easing tokens (`normal` for color, `slow` with `out` for card state, `slowest` for the hero intro).
- **Do** set code, package names and numeric readouts in Recursive with `fontFamily: 'mono'` over a Poppins text style, numbers with tabular figures.
- **Do** separate bands with a 1px `page.border.initial` hairline and keep content inside the 90rem frame.

### Don't:

- **Don't** hard-code a hex, rgb or pixel value in component styles; use the token, or add one to the preset.
- **Don't** use the `mono-*` text styles for UI copy; they are reserved for numbers in data visualization.
- **Don't** use a status palette (`success`, `warning`, `info`, `danger`) for decoration.
- **Don't** reach for another theme's brand hue by value; scope the subtree instead.
- **Don't** replace a working component with a picture of it.
- **Don't** use v1 forms: `--font-poppins`/`--font-recursive`, `data-color-mode`, `_cerberusTheme`, `shape="default"`.
