import { tokens as primitiveColors, modes as colorModes } from './data/colors'
import {
  tokens as primitiveSpacing,
  modes as spacingModes,
} from './data/spacing'
import { tokens as primitiveRadii, modes as radiiModes } from './data/radii'
import {
  tokens as primitiveFontSize,
  modes as fontSizeModes,
} from './data/font-size'

// Compositions
import {
  tokens as textStyle,
  modes as textStylesMode,
} from './data/text-styles'

// Themes
import {
  collection as acheronCollection,
  tokens as acheronTokens,
  modes as acheronModes,
} from './data/acheron'
import {
  collection as cerberusCollection,
  tokens as cerberusTokens,
  modes as cerberusModes,
} from './data/cerberus'
import {
  collection as elysiumCollection,
  tokens as elysiumTokens,
  modes as elysiumModes,
} from './data/elysium'

// TEMPORARY
import { nodes } from './data/text-nodes'

export const primitives = {
  colors: {
    tokens: primitiveColors,
    modes: colorModes,
  },
  spacing: {
    tokens: primitiveSpacing,
    modes: spacingModes,
  },
  radii: {
    tokens: primitiveRadii,
    modes: radiiModes,
  },
  fontSize: {
    tokens: primitiveFontSize,
    modes: fontSizeModes,
  },
}

export const compositions = {
  textStyle: {
    /**
     * @deprecated - kill this when we have primtive tokens setup properly
     */
    nodes,
    tokens: textStyle,
    modes: textStylesMode,
  },
}

export const themes = {
  acheron: {
    collection: acheronCollection,
    tokens: acheronTokens,
    modes: acheronModes,
  },
  cerberus: {
    collection: cerberusCollection,
    tokens: cerberusTokens,
    modes: cerberusModes,
  },
  elysium: {
    collection: elysiumCollection,
    tokens: elysiumTokens,
    modes: elysiumModes,
  },
}
