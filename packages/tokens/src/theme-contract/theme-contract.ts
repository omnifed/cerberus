import { getContractGradientToken, getGradients } from '../factories/primitives'
import { Writable } from '../types'
import type {
  ContractActionTokens,
  ContractDangerTokens,
  ContractDataVizTokens,
  ContractGradientTokens,
  ContractInfoTokens,
  ContractPageTokens,
  ContractSecondaryActionTokens,
  ContractSuccessTokens,
  ContractWarningTokens,
} from './theme-contracts.types'

/**
 * This module is used to define the theme contract.
 * @module ThemeContract
 */

// Contracts

export const contractActionTokens: ContractActionTokens = {
  action: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    border: {
      initial: {},
      100: {},
      focus: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    navigation: {
      initial: {},
      hover: {},
      visited: {},
    },
    text: {
      initial: {},
      100: {},
      200: {},
      inverse: {},
      static: {},
    },
  },
}

export const contractDangerTokens: ContractDangerTokens = {
  danger: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    border: {
      initial: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    surface: {
      initial: {},
      100: {},
      200: {},
    },
    text: {
      initial: {},
      100: {},
      200: {},
      inverse: {},
      static: {},
    },
  },
}

export const contractDataVizTokens: ContractDataVizTokens = {
  dataViz: {
    diverging: {
      '50': {},
      '100': {},
      '200': {},
      '300': {},
      '400': {},
      '500': {},
      '600': {},
      '700': {},
      '800': {},
      '900': {},
    },
    sequential: {
      '100': {},
      '200': {},
      '300': {},
      '400': {},
      '500': {},
      '600': {},
    },
    qualitative: {
      '100': {},
      '200': {},
      '300': {},
      '400': {},
      '500': {},
      '600': {},
      '700': {},
    },
    progress: {
      start: {},
      end: {},
      complete: {},
    },
  },
}

export const contractGradientTokens: ContractGradientTokens = {
  gradient: getGradients().reduce(
    (acc, gradient) => {
      acc[gradient] = getContractGradientToken()
      return acc
    },
    {} as Writable<ContractGradientTokens['gradient']>,
  ),
}

export const contractInfoTokens: ContractInfoTokens = {
  info: {
    border: {
      initial: {},
      100: {},
    },
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    surface: {
      initial: {},
      100: {},
      200: {},
    },
    text: {
      initial: {},
      100: {},
      200: {},
      static: {},
    },
  },
}

export const contractPageTokens: ContractPageTokens = {
  page: {
    backdrop: {
      initial: {},
    },
    bg: {
      initial: {},
      100: {},
      200: {},
      300: {},
    },
    border: {
      initial: {},
      100: {},
      200: {},
    },
    surface: {
      initial: {},
      inverse: {},
      100: {},
      200: {},
      300: {},
      400: {},
    },
    text: {
      initial: {},
      inverse: {},
      100: {},
      200: {},
      300: {},
    },
  },
}

export const contractSecondaryActionTokens: ContractSecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    border: {
      initial: {},
      100: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    navigation: {
      initial: {},
      hover: {},
      visited: {},
    },
    text: {
      initial: {},
      100: {},
      200: {},
      static: {},
    },
  },
}

export const contractSuccessTokens: ContractSuccessTokens = {
  success: {
    border: {
      initial: {},
    },
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    surface: {
      initial: {},
      100: {},
      200: {},
    },
    text: {
      initial: {},
      100: {},
      200: {},
      inverse: {},
      static: {},
    },
  },
}

export const contractWarningTokens: ContractWarningTokens = {
  warning: {
    border: {
      initial: {},
    },
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    surface: {
      initial: {},
      100: {},
      200: {},
    },
    text: {
      initial: {},
      100: {},
      200: {},
      inverse: {},
      static: {},
    },
  },
}
