import type { SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of gradient tokens that are used to generate the theme.
 * @module gradientTokens
 */

export interface ContractGradientTokens {
  readonly gradient: {
    readonly [k: string]: GradientTokenValue
  }
}

export interface GradientTokenValue {
  readonly start: SemanticToken
  readonly end: SemanticToken
  readonly text: SemanticToken
}

export const contractGradientTokens: ContractGradientTokens = {
  gradient: {},
}

export interface GradientTokens {
  readonly gradient: {
    readonly ['charon-light']: GradientTokenValue
    readonly ['charon-dark']: GradientTokenValue
    readonly ['nyx-light']: GradientTokenValue
    readonly ['nyx-dark']: GradientTokenValue
    readonly ['amphiaraus-light']: GradientTokenValue
    readonly ['amphiaraus-dark']: GradientTokenValue
    readonly ['styx-light']: GradientTokenValue
    readonly ['styx-dark']: GradientTokenValue
    readonly ['thanatos-light']: GradientTokenValue
    readonly ['thanatos-dark']: GradientTokenValue
    readonly ['hades-light']: GradientTokenValue
    readonly ['hades-dark']: GradientTokenValue
    readonly ['asphodel-light']: GradientTokenValue
    readonly ['asphodel-dark']: GradientTokenValue
  }
}

export const gradientTokens: GradientTokens = {
  gradient: {
    'charon-light': {
      start: formatSemanticTokenValue('gradient.charon-light.start'),
      end: formatSemanticTokenValue('gradient.charon-light.end'),
      text: formatSemanticTokenValue('gradient.charon-light.text'),
    },
    'charon-dark': {
      start: formatSemanticTokenValue('gradient.charon-dark.start'),
      end: formatSemanticTokenValue('gradient.charon-dark.end'),
      text: formatSemanticTokenValue('gradient.charon-dark.text'),
    },
    'nyx-light': {
      start: formatSemanticTokenValue('gradient.nyx-light.start'),
      end: formatSemanticTokenValue('gradient.nyx-light.end'),
      text: formatSemanticTokenValue('gradient.nyx-light.text'),
    },
    'nyx-dark': {
      start: formatSemanticTokenValue('gradient.nyx-dark.start'),
      end: formatSemanticTokenValue('gradient.nyx-dark.end'),
      text: formatSemanticTokenValue('gradient.nyx-dark.text'),
    },
    'amphiaraus-light': {
      start: formatSemanticTokenValue('gradient.amphiaraus-light.start'),
      end: formatSemanticTokenValue('gradient.amphiaraus-light.end'),
      text: formatSemanticTokenValue('gradient.amphiaraus-light.text'),
    },
    'amphiaraus-dark': {
      start: formatSemanticTokenValue('gradient.amphiaraus-dark.start'),
      end: formatSemanticTokenValue('gradient.amphiaraus-dark.end'),
      text: formatSemanticTokenValue('gradient.amphiaraus-dark.text'),
    },
    'styx-light': {
      start: formatSemanticTokenValue('gradient.styx-light.start'),
      end: formatSemanticTokenValue('gradient.styx-light.end'),
      text: formatSemanticTokenValue('gradient.styx-light.text'),
    },
    'styx-dark': {
      start: formatSemanticTokenValue('gradient.styx-dark.start'),
      end: formatSemanticTokenValue('gradient.styx-dark.end'),
      text: formatSemanticTokenValue('gradient.styx-dark.text'),
    },
    'thanatos-light': {
      start: formatSemanticTokenValue('gradient.thanatos-light.start'),
      end: formatSemanticTokenValue('gradient.thanatos-light.end'),
      text: formatSemanticTokenValue('gradient.thanatos-light.text'),
    },
    'thanatos-dark': {
      start: formatSemanticTokenValue('gradient.thanatos-dark.start'),
      end: formatSemanticTokenValue('gradient.thanatos-dark.end'),
      text: formatSemanticTokenValue('gradient.thanatos-dark.text'),
    },
    'hades-light': {
      start: formatSemanticTokenValue('gradient.hades-light.start'),
      end: formatSemanticTokenValue('gradient.hades-light.end'),
      text: formatSemanticTokenValue('gradient.hades-light.text'),
    },
    'hades-dark': {
      start: formatSemanticTokenValue('gradient.hades-dark.start'),
      end: formatSemanticTokenValue('gradient.hades-dark.end'),
      text: formatSemanticTokenValue('gradient.hades-dark.text'),
    },
    'asphodel-light': {
      start: formatSemanticTokenValue('gradient.asphodel-light.start'),
      end: formatSemanticTokenValue('gradient.asphodel-light.end'),
      text: formatSemanticTokenValue('gradient.asphodel-light.text'),
    },
    'asphodel-dark': {
      start: formatSemanticTokenValue('gradient.asphodel-dark.start'),
      end: formatSemanticTokenValue('gradient.asphodel-dark.end'),
      text: formatSemanticTokenValue('gradient.asphodel-dark.text'),
    },
  },
}
