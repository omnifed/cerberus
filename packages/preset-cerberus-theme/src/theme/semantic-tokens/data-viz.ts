import { DataVizTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of data-viz tokens that are used to generate the theme.
 * @module dataVizTokens
 */

const THEME = getThemeName()

export const dataVizTokens: DataVizTokens = {
  dataViz: {
    diverging: {
      50: createSemanticToken(THEME, 'data-viz.diverging.050'),
      100: createSemanticToken(THEME, 'data-viz.diverging.100'),
      200: createSemanticToken(THEME, 'data-viz.diverging.200'),
      300: createSemanticToken(THEME, 'data-viz.diverging.300'),
      400: createSemanticToken(THEME, 'data-viz.diverging.400'),
      500: createSemanticToken(THEME, 'data-viz.diverging.500'),
      600: createSemanticToken(THEME, 'data-viz.diverging.600'),
      700: createSemanticToken(THEME, 'data-viz.diverging.700'),
      800: createSemanticToken(THEME, 'data-viz.diverging.800'),
      900: createSemanticToken(THEME, 'data-viz.diverging.900'),
    },

    sequential: {
      100: createSemanticToken(THEME, 'data-viz.sequential.100'),
      200: createSemanticToken(THEME, 'data-viz.sequential.200'),
      300: createSemanticToken(THEME, 'data-viz.sequential.300'),
      400: createSemanticToken(THEME, 'data-viz.sequential.400'),
      500: createSemanticToken(THEME, 'data-viz.sequential.500'),
      600: createSemanticToken(THEME, 'data-viz.sequential.600'),
    },

    qualitative: {
      100: createSemanticToken(THEME, 'data-viz.qualitative.100'),
      200: createSemanticToken(THEME, 'data-viz.qualitative.200'),
      300: createSemanticToken(THEME, 'data-viz.qualitative.300'),
      400: createSemanticToken(THEME, 'data-viz.qualitative.400'),
      500: createSemanticToken(THEME, 'data-viz.qualitative.500'),
      600: createSemanticToken(THEME, 'data-viz.qualitative.600'),
      700: createSemanticToken(THEME, 'data-viz.qualitative.700'),
    },

    progress: {
      start: createSemanticToken(THEME, 'data-viz.progress.start'),
      end: createSemanticToken(THEME, 'data-viz.progress.end'),
      complete: createSemanticToken(THEME, 'data-viz.progress.complete'),
    },
  },
}
