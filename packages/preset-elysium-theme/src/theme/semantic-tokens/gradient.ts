import {
  type ContractGradientTokens,
  createSemanticToken,
} from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

const THEME = getThemeName()

export const gradientTokens: ContractGradientTokens = {
  gradient: {
    'charon-light': {
      start: createSemanticToken(THEME, 'gradient.charon-light.start'),
      end: createSemanticToken(THEME, 'gradient.charon-light.end'),
      text: createSemanticToken(THEME, 'gradient.charon-light.text'),
    },
    'charon-dark': {
      start: createSemanticToken(THEME, 'gradient.charon-dark.start'),
      end: createSemanticToken(THEME, 'gradient.charon-dark.end'),
      text: createSemanticToken(THEME, 'gradient.charon-dark.text'),
    },
    'nyx-light': {
      start: createSemanticToken(THEME, 'gradient.nyx-light.start'),
      end: createSemanticToken(THEME, 'gradient.nyx-light.end'),
      text: createSemanticToken(THEME, 'gradient.nyx-light.text'),
    },
    'nyx-dark': {
      start: createSemanticToken(THEME, 'gradient.nyx-dark.start'),
      end: createSemanticToken(THEME, 'gradient.nyx-dark.end'),
      text: createSemanticToken(THEME, 'gradient.nyx-dark.text'),
    },
    'amphiaraus-light': {
      start: createSemanticToken(THEME, 'gradient.amphiaraus-light.start'),
      end: createSemanticToken(THEME, 'gradient.amphiaraus-light.end'),
      text: createSemanticToken(THEME, 'gradient.amphiaraus-light.text'),
    },
    'amphiaraus-dark': {
      start: createSemanticToken(THEME, 'gradient.amphiaraus-dark.start'),
      end: createSemanticToken(THEME, 'gradient.amphiaraus-dark.end'),
      text: createSemanticToken(THEME, 'gradient.amphiaraus-dark.text'),
    },
    'styx-light': {
      start: createSemanticToken(THEME, 'gradient.styx-light.start'),
      end: createSemanticToken(THEME, 'gradient.styx-light.end'),
      text: createSemanticToken(THEME, 'gradient.styx-light.text'),
    },
    'styx-dark': {
      start: createSemanticToken(THEME, 'gradient.styx-dark.start'),
      end: createSemanticToken(THEME, 'gradient.styx-dark.end'),
      text: createSemanticToken(THEME, 'gradient.styx-dark.text'),
    },
    'thanatos-light': {
      start: createSemanticToken(THEME, 'gradient.thanatos-light.start'),
      end: createSemanticToken(THEME, 'gradient.thanatos-light.end'),
      text: createSemanticToken(THEME, 'gradient.thanatos-light.text'),
    },
    'thanatos-dark': {
      start: createSemanticToken(THEME, 'gradient.thanatos-dark.start'),
      end: createSemanticToken(THEME, 'gradient.thanatos-dark.end'),
      text: createSemanticToken(THEME, 'gradient.thanatos-dark.text'),
    },
    'hades-light': {
      start: createSemanticToken(THEME, 'gradient.hades-light.start'),
      end: createSemanticToken(THEME, 'gradient.hades-light.end'),
      text: createSemanticToken(THEME, 'gradient.hades-light.text'),
    },
    'hades-dark': {
      start: createSemanticToken(THEME, 'gradient.hades-dark.start'),
      end: createSemanticToken(THEME, 'gradient.hades-dark.end'),
      text: createSemanticToken(THEME, 'gradient.hades-dark.text'),
    },
    'asphodel-light': {
      start: createSemanticToken(THEME, 'gradient.asphodel-light.start'),
      end: createSemanticToken(THEME, 'gradient.asphodel-light.end'),
      text: createSemanticToken(THEME, 'gradient.asphodel-light.text'),
    },
    'asphodel-dark': {
      start: createSemanticToken(THEME, 'gradient.asphodel-dark.start'),
      end: createSemanticToken(THEME, 'gradient.asphodel-dark.end'),
      text: createSemanticToken(THEME, 'gradient.asphodel-dark.text'),
    },
  },
}
