import { defineRecipe } from '@pandacss/dev'
import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/types'
import { nonActionPalettes, secondaryAction } from './shared/palettes'
import { base, outlined, shapeVariants } from './shared/tag.base'

/**
 * This module contains the tag recipe.
 * @module
 */

/**
 * Styles for the Tag component
 * @definition [Tag docs](https://cerberus.digitalu.design/react/tags)
 */
export const tag: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'tag',
  description: 'WCAG Level AAA compliant tag styles.',
  jsx: ['Tag', 'ClosableTag', 'TagRoot'],

  base,

  variants: {
    palette: { ...nonActionPalettes, secondaryAction },

    usage: {
      filled: {
        bgColor: 'colorPalette.surface.200',
        color: 'colorPalette.text.200',
        _secondaryActionPalette: {
          bgColor: 'secondaryAction.bg.initial',
          color: 'secondaryAction.text.100',
        },
      },
      outlined,
    },
    shape: shapeVariants,
  },

  defaultVariants: {
    palette: 'page',
    shape: 'pill',
    usage: 'filled',
  },
})
