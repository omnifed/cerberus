import { AdmonitionEl } from './admonition'
import {
  AdmonitionContent,
  AdmonitionDescription,
  AdmonitionHeading,
  AdmonitionIndicator,
  AdmonitionRoot,
} from './primitives'

/**
 * The `Admonition` component is a versatile UI element that can be used to display important information, warnings, or notes in a visually distinct manner. It is composed of several primitives that allow for customization and flexibility in its usage.
 *
 * The `Admonition` component can be used in various contexts, such as displaying alerts, tips, or any other information that needs to be highlighted. It supports different palettes and usage styles to match the design requirements of your application.
 *
 * For a customizable Admonition, use the `Admonition` object to access the
 * individual primitives of the Admonition component.
 */
export const Admonition = Object.assign(AdmonitionEl, {
  Root: AdmonitionRoot,
  Indicator: AdmonitionIndicator,
  Content: AdmonitionContent,
  Heading: AdmonitionHeading,
  Description: AdmonitionDescription,
})
