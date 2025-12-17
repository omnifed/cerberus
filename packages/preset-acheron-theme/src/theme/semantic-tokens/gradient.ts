import {
  type ContractGradientTokens,
  createGradientToken,
} from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

const THEME = getThemeName()

export const gradientTokens: ContractGradientTokens = {
  gradient: {
    'charon-light': createGradientToken('charon-light', THEME),
    'charon-dark': createGradientToken('charon-dark', THEME),
    'nyx-light': createGradientToken('nyx-light', THEME),
    'nyx-dark': createGradientToken('nyx-dark', THEME),
    'amphiaraus-light': createGradientToken('amphiaraus-light', THEME),
    'amphiaraus-dark': createGradientToken('amphiaraus-dark', THEME),
    'styx-light': createGradientToken('styx-light', THEME),
    'styx-dark': createGradientToken('styx-dark', THEME),
    'thanatos-light': createGradientToken('thanatos-light', THEME),
    'thanatos-dark': createGradientToken('thanatos-dark', THEME),
    'hades-light': createGradientToken('hades-light', THEME),
    'hades-dark': createGradientToken('hades-dark', THEME),
    'asphodel-light': createGradientToken('asphodel-light', THEME),
    'asphodel-dark': createGradientToken('asphodel-dark', THEME),
  },
}
