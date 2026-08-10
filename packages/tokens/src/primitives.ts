import {
  collection as cerbyCollection,
  modes as cerbyPrimitiveModes,
  tokens as cerbyPrimitives,
} from './data/cerberus-colors'
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

export const primitives = {
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
