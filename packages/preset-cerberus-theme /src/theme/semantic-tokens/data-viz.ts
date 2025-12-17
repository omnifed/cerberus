import { type DataVizTokens, formatSemanticTokenValue } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of data-viz tokens that are used to generate the theme.
 * @module dataVizTokens
 */

const THEME = getThemeName()

export const dataVizTokens: DataVizTokens = {
  dataViz: {
    diverging: {
      50: formatSemanticTokenValue('data-viz.diverging.050', THEME),
      100: formatSemanticTokenValue('data-viz.diverging.100', THEME),
      200: formatSemanticTokenValue('data-viz.diverging.200', THEME),
      300: formatSemanticTokenValue('data-viz.diverging.300', THEME),
      400: formatSemanticTokenValue('data-viz.diverging.400', THEME),
      500: formatSemanticTokenValue('data-viz.diverging.500', THEME),
      600: formatSemanticTokenValue('data-viz.diverging.600', THEME),
      700: formatSemanticTokenValue('data-viz.diverging.700', THEME),
      800: formatSemanticTokenValue('data-viz.diverging.800', THEME),
      900: formatSemanticTokenValue('data-viz.diverging.900', THEME),
    },

    sequential: {
      100: formatSemanticTokenValue('data-viz.sequential.100', THEME),
      200: formatSemanticTokenValue('data-viz.sequential.200', THEME),
      300: formatSemanticTokenValue('data-viz.sequential.300', THEME),
      400: formatSemanticTokenValue('data-viz.sequential.400', THEME),
      500: formatSemanticTokenValue('data-viz.sequential.500', THEME),
      600: formatSemanticTokenValue('data-viz.sequential.600', THEME),
    },

    qualitative: {
      100: formatSemanticTokenValue('data-viz.qualitative.100', THEME),
      200: formatSemanticTokenValue('data-viz.qualitative.200', THEME),
      300: formatSemanticTokenValue('data-viz.qualitative.300', THEME),
      400: formatSemanticTokenValue('data-viz.qualitative.400', THEME),
      500: formatSemanticTokenValue('data-viz.qualitative.500', THEME),
      600: formatSemanticTokenValue('data-viz.qualitative.600', THEME),
      700: formatSemanticTokenValue('data-viz.qualitative.700', THEME),
    },

    progress: {
      start: formatSemanticTokenValue('data-viz.progress.start', THEME),
      end: formatSemanticTokenValue('data-viz.progress.end', THEME),
      complete: formatSemanticTokenValue('data-viz.progress.complete', THEME),
    },
  },
}
