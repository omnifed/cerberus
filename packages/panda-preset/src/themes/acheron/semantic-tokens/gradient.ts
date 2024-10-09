/**
 * This module is a collection of gradient tokens palette for the acheron theme.
 * @module gradientTokens
 */

import type { SemanticToken } from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

export interface GradientTokens {
  readonly gradient: {
    readonly ['charon-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['charon-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['nyx-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['nyx-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['amphiaraus-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['amphiaraus-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['styx-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['styx-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['thanatos-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['thanatos-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['hades-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['hades-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['asphodel-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['asphodel-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
  }
}

export const gradientTokens: GradientTokens = {
  gradient: {
    'charon-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-light.text',
          'acheron',
        ),
      },
    },
    'charon-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-dark.text',
          'acheron',
        ),
      },
    },
    'nyx-light': {
      text: {
        initial: formatSemanticTokenValue('gradient.nyx-light.text', 'acheron'),
      },
    },
    'nyx-dark': {
      text: {
        initial: formatSemanticTokenValue('gradient.nyx-dark.text', 'acheron'),
      },
    },
    'amphiaraus-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-light.text',
          'acheron',
        ),
      },
    },
    'amphiaraus-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-dark.text',
          'acheron',
        ),
      },
    },
    'styx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-light.text',
          'acheron',
        ),
      },
    },
    'styx-dark': {
      text: {
        initial: formatSemanticTokenValue('gradient.styx-dark.text', 'acheron'),
      },
    },
    'thanatos-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-light.text',
          'acheron',
        ),
      },
    },
    'thanatos-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-dark.text',
          'acheron',
        ),
      },
    },
    'hades-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-light.text',
          'acheron',
        ),
      },
    },
    'hades-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-dark.text',
          'acheron',
        ),
      },
    },
    'asphodel-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-light.text',
          'acheron',
        ),
      },
    },
    'asphodel-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-dark.text',
          'acheron',
        ),
      },
    },
  },
}
