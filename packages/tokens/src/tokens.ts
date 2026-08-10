import { tokens as textStyle, modes as textStylesMode } from './data/text-styles'

// TEMPORARY
import { nodes } from './data/text-nodes'

// Semantic Tokens
import {
  collection as acheronCollection,
  modes as acheronModes,
  tokens as acheronTokens,
} from './data/acheron'
import {
  collection as cerberusCollection,
  modes as cerberusModes,
  tokens as cerberusTokens,
} from './data/cerberus'
import {
  collection as elysiumCollection,
  modes as elysiumModes,
  tokens as elysiumTokens,
} from './data/elysium'
import {
  collection as oceanusCollection,
  modes as oceanusModes,
  tokens as oceanusTokens,
} from './data/oceanus'

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
  oceanus: {
    collection: oceanusCollection,
    tokens: oceanusTokens,
    modes: oceanusModes,
  },
}
