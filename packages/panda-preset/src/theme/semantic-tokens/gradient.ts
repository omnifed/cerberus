import type { SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

export interface ContractGradientTokens {
  readonly gradient: {
    readonly ['charon-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['charon-dark']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['nyx-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['nyx-dark']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['amphiaraus-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['amphiaraus-dark']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['styx-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['styx-dark']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['thanatos-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['thanatos-dark']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['hades-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['hades-dark']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['asphodel-light']: {
      readonly text: {
        initial: object
      }
    }
    readonly ['asphodel-dark']: {
      readonly text: {
        initial: object
      }
    }
  }
}

export const contractGradientTokens: ContractGradientTokens = {
  gradient: {
    'charon-light': {
      text: {
        initial: {},
      },
    },
    'charon-dark': {
      text: {
        initial: {},
      },
    },
    'nyx-light': {
      text: {
        initial: {},
      },
    },
    'nyx-dark': {
      text: {
        initial: {},
      },
    },
    'amphiaraus-light': {
      text: {
        initial: {},
      },
    },
    'amphiaraus-dark': {
      text: {
        initial: {},
      },
    },
    'styx-light': {
      text: {
        initial: {},
      },
    },
    'styx-dark': {
      text: {
        initial: {},
      },
    },
    'thanatos-light': {
      text: {
        initial: {},
      },
    },
    'thanatos-dark': {
      text: {
        initial: {},
      },
    },
    'hades-light': {
      text: {
        initial: {},
      },
    },
    'hades-dark': {
      text: {
        initial: {},
      },
    },
    'asphodel-light': {
      text: {
        initial: {},
      },
    },
    'asphodel-dark': {
      text: {
        initial: {},
      },
    },
  },
}

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
          'cerberus',
        ),
      },
    },
    'charon-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-dark.text',
          'cerberus',
        ),
      },
    },
    'nyx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.nyx-light.text',
          'cerberus',
        ),
      },
    },
    'nyx-dark': {
      text: {
        initial: formatSemanticTokenValue('gradient.nyx-dark.text', 'cerberus'),
      },
    },
    'amphiaraus-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-light.text',
          'cerberus',
        ),
      },
    },
    'amphiaraus-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-dark.text',
          'cerberus',
        ),
      },
    },
    'styx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-light.text',
          'cerberus',
        ),
      },
    },
    'styx-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-dark.text',
          'cerberus',
        ),
      },
    },
    'thanatos-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-light.text',
          'cerberus',
        ),
      },
    },
    'thanatos-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-dark.text',
          'cerberus',
        ),
      },
    },
    'hades-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-light.text',
          'cerberus',
        ),
      },
    },
    'hades-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-dark.text',
          'cerberus',
        ),
      },
    },
    'asphodel-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-light.text',
          'cerberus',
        ),
      },
    },
    'asphodel-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-dark.text',
          'cerberus',
        ),
      },
    },
  },
}
