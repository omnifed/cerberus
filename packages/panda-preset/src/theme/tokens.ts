import {
  formatPrimitiveColors,
  formatPrimitiveGradients,
  formatSpacingTokens,
  type PandaColor,
  type PandaGradient,
  type PandaToken,
} from '../tokens'

/**
 * This module contains the tokens used in the main theme.
 * @module
 */

const colors: PandaColor = formatPrimitiveColors()
const gradients: PandaGradient = formatPrimitiveGradients()
const spacing: PandaToken = formatSpacingTokens()

const fonts = {
  display: {
    description: 'Primary font reserved for display headings',
    value: 'var(--font-display, var(--font-poppins, sans-serif))',
  },
  sans: {
    description: 'Primary font used for body and headings',
    value: 'var(--font-sans, var(--font-poppins, sans-serif))',
  },
  mono: {
    description: 'Code font used for any code related scenarios',
    value: 'var(--font-mono, var(--font-recursive, monospace))',
  },
}

const shadows = {
  sm: {
    value: {
      offsetX: 0,
      offsetY: 2,
      blur: 16,
      spread: 0,
      color: 'hsla(274, 95%, 8%, 0.1)',
    },
  },
  md: {
    value: {
      offsetX: 0,
      offsetY: 0,
      blur: 20,
      spread: 4,
      color: 'hsla(274, 95%, 8%, 0.1)',
    },
  },
  lg: {
    value: {
      offsetX: 0,
      offsetY: 0,
      blur: 20,
      spread: 8,
      color: 'hsla(274, 95%, 8%, 0.25)',
    },
  },
}

const zIndex = {
  hide: {
    description: 'Used for when you need to hide elements in the layer stack',
    value: -1,
  },
  base: { description: 'Initial layer value', value: 0 },

  // pseudo-elements, borders, etc.
  decorator: {
    description:
      'Used for positioning pseudo-elements, borders, and other similar elements in the layer stack',
    value: 50,
  },

  // elements
  dropdown: {
    description:
      'Used for positioning any dropdown like elements in the layer stack',
    value: 1000,
  },
  sticky: {
    description:
      'Used for positioning elements that need to stick to their nearest scrolling ancestor in the layer stack',
    value: 1200,
  },
  banner: {
    description:
      'Used for positioning any elements that are used like a admonition in the layer stack',
    value: 1300,
  },
  overlay: {
    description: 'Used for positioning overlay elements in the layer stack',
    value: 1400,
  },
  modal: {
    description: 'Used for positioning modal elements in the layer stack',
    value: 1500,
  },
  popover: {
    description: 'Used for positioning popover elements in the layer stack',
    value: 1600,
  },
  toast: {
    description: 'Used for positioning toast elements in the layer stack',
    value: 1700,
  },
  tooltip: {
    description: 'Used for positioning tooltip elements in the layer stack',
    value: 1800,
  },
}

export const tokens = {
  colors,
  fonts,
  gradients,
  spacing,
  shadows,
  zIndex,
}
