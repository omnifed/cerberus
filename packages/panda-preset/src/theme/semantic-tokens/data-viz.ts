import type { SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of data-viz tokens that are used to generate the theme.
 * @module dataVizTokens
 */

export type DataVisProminence =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export interface ContractDataVizTokens {
  readonly dataViz: {
    readonly diverging: {
      readonly [P in DataVisProminence]: object
    }
    readonly sequential: {
      readonly [P in Exclude<
        DataVisProminence,
        '50' | '700' | '800' | '900'
      >]: object
    }
    readonly qualitative: {
      readonly [P in Exclude<DataVisProminence, '50' | '800' | '900'>]: object
    }
  }
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
  },
}

export interface DataVizTokens {
  readonly dataViz: {
    readonly diverging: {
      readonly [P in DataVisProminence]: SemanticToken
    }
    readonly sequential: {
      readonly [P in Exclude<
        DataVisProminence,
        '50' | '700' | '800' | '900'
      >]: SemanticToken
    }
    readonly qualitative: {
      readonly [P in Exclude<
        DataVisProminence,
        '50' | '800' | '900'
      >]: SemanticToken
    }
  }
}

export const dataVizTokens: DataVizTokens = {
  dataViz: {
    diverging: {
      50: formatSemanticTokenValue('data-viz.diverging.050'),
      100: formatSemanticTokenValue('data-viz.diverging.100'),
      200: formatSemanticTokenValue('data-viz.diverging.200'),
      300: formatSemanticTokenValue('data-viz.diverging.300'),
      400: formatSemanticTokenValue('data-viz.diverging.400'),
      500: formatSemanticTokenValue('data-viz.diverging.500'),
      600: formatSemanticTokenValue('data-viz.diverging.600'),
      700: formatSemanticTokenValue('data-viz.diverging.700'),
      800: formatSemanticTokenValue('data-viz.diverging.800'),
      900: formatSemanticTokenValue('data-viz.diverging.900'),
    },

    sequential: {
      100: formatSemanticTokenValue('data-viz.sequential.100'),
      200: formatSemanticTokenValue('data-viz.sequential.200'),
      300: formatSemanticTokenValue('data-viz.sequential.300'),
      400: formatSemanticTokenValue('data-viz.sequential.400'),
      500: formatSemanticTokenValue('data-viz.sequential.500'),
      600: formatSemanticTokenValue('data-viz.sequential.600'),
    },

    qualitative: {
      100: formatSemanticTokenValue('data-viz.qualitative-colors.100'),
      200: formatSemanticTokenValue('data-viz.qualitative-colors.200'),
      300: formatSemanticTokenValue('data-viz.qualitative-colors.300'),
      400: formatSemanticTokenValue('data-viz.qualitative-colors.400'),
      500: formatSemanticTokenValue('data-viz.qualitative-colors.500'),
      600: formatSemanticTokenValue('data-viz.qualitative-colors.600'),
      700: formatSemanticTokenValue('data-viz.qualitative-colors.700'),
    },
  },
}
