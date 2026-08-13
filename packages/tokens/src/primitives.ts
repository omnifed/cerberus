import {
  collection as cerbyCollection,
  modes as cerbyPrimitiveModes,
  tokens as cerbyPrimitives,
} from './data/cerberus-colors'
import {
  collection as acheronCollection,
  modes as acheronPrimitiveModes,
  tokens as acheronPrimitives,
} from './data/acheron-colors'
import {
  collection as elysiumCollection,
  modes as elysiumPrimitiveModes,
  tokens as elysiumPrimitives,
} from './data/elysium-colors'
import {
  collection as oceanusCollection,
  modes as oceanusPrimitiveModes,
  tokens as oceanusPrimitives,
} from './data/oceanus-colors'
import {
  collection as colorsCollection,
  modes as colorModes,
  tokens as primitiveColors,
} from './data/colors'
import {
  collection as fontSizeCollection,
  modes as fontSizeModes,
  tokens as primitiveFontSize,
} from './data/font-size'
import {
  collection as radiiCollection,
  tokens as primitiveRadii,
  modes as radiiModes,
} from './data/radii'
import {
  collection as spacingCollection,
  tokens as primitiveSpacing,
  modes as spacingModes,
} from './data/spacing'
import { RawThemes } from './semantic-tokens.types'

export type PrimitiveGroup =
  | PrimitiveThemeGroup
  | 'colors'
  | 'spacing'
  | 'radii'
  | 'fontSize'

export type PrimitiveThemeGroup = RawThemes

export type PrimitiveValue = {
  collection: any
  tokens: any
  modes: any
}

export const primitives: Record<PrimitiveGroup, PrimitiveValue> = {
  colors: {
    collection: colorsCollection,
    tokens: primitiveColors,
    modes: colorModes,
  },
  cerberus: {
    collection: cerbyCollection,
    tokens: cerbyPrimitives,
    modes: cerbyPrimitiveModes,
  },
  acheron: {
    collection: acheronCollection,
    tokens: acheronPrimitives,
    modes: acheronPrimitiveModes,
  },
  elysium: {
    collection: elysiumCollection,
    tokens: elysiumPrimitives,
    modes: elysiumPrimitiveModes,
  },
  oceanus: {
    collection: oceanusCollection,
    tokens: oceanusPrimitives,
    modes: oceanusPrimitiveModes,
  },

  spacing: {
    collection: spacingCollection,
    tokens: primitiveSpacing,
    modes: spacingModes,
  },
  radii: {
    collection: radiiCollection,
    tokens: primitiveRadii,
    modes: radiiModes,
  },
  fontSize: {
    collection: fontSizeCollection,
    tokens: primitiveFontSize,
    modes: fontSizeModes,
  },
}
