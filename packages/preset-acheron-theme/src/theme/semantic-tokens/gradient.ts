import {
  type ContractGradientTokens,
  createContractGradientToken,
  createGradientToken,
} from '@cerberus/tokens'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

const THEME = 'acheron'

export const contractGradientTokens: ContractGradientTokens = {
  gradient: {
    'charon-light': createContractGradientToken(),
    'charon-dark': createContractGradientToken(),
    'nyx-light': createContractGradientToken(),
    'nyx-dark': createContractGradientToken(),
    'amphiaraus-light': createContractGradientToken(),
    'amphiaraus-dark': createContractGradientToken(),
    'styx-light': createContractGradientToken(),
    'styx-dark': createContractGradientToken(),
    'thanatos-light': createContractGradientToken(),
    'thanatos-dark': createContractGradientToken(),
    'hades-light': createContractGradientToken(),
    'hades-dark': createContractGradientToken(),
    'asphodel-light': createContractGradientToken(),
    'asphodel-dark': createContractGradientToken(),
  },
}

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
