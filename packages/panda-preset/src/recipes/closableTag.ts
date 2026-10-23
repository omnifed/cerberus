import { defineRecipe } from '@pandacss/dev'
import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/types'
import { actionPalettes, danger } from './shared/palettes'
import { base, outlined } from './shared/tag.base'

/**
 * This module contains the tag recipe.
 * @module
 */

/**
 * Styles for the ClosableTag component
 * @definition [Tag docs](https://cerberus.digitalu.design/react/tags)
 */
export const closableTag: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'closable-tag',
  description: 'WCAG Level AAA compliant tag styles.',
  jsx: ['Tag', 'ClosableTag', 'ClosableTagRoot'],

  base: {
    ...base,
    fontWeight: 400,
    h: '1.5rem',
    px: 2,
    pe: 0,
    rounded: 'full',
    textStyle: 'label-sm',
  },

  variants: {
    palette: { ...actionPalettes, danger },

    usage: {
      filled: {
        bgColor: 'colorPalette.bg.initial',
        color: 'colorPalette.text.inverse',
      },
      outlined,
    },
  },

  defaultVariants: {
    palette: 'secondaryAction',
    usage: 'filled',
  },
})
