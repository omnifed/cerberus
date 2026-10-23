import { getGradients } from '@cerberus/tokens'
import { defineRecipe } from '@pandacss/dev'
import type {
  Pretty,
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeConfig,
  RecipeVariantRecord,
} from '@pandacss/types'
import { createGradientVariants } from './shared/helpers'
import { base, outlined, shapeVariants } from './shared/tag.base'

/**
 * This module contains the gradient tag recipe.
 * @module
 */

/**
 * Styles for the GradientTag component
 * @definition [Tag docs](https://cerberus.digitalu.design/react/tags)
 */
export const gradientTag: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'grad-tag',
  description: 'WCAG Level AAA compliant tag styles.',
  jsx: ['GradientTag', 'Tag'],

  base,

  variants: {
    gradient: createGradientVariants(),
    usage: {
      outlined,
    },
    shape: shapeVariants,
  },

  defaultVariants: {
    gradient: 'charon-light',
    shape: 'pill',
  },

  compoundVariants: createGradientOutlineVariants(),
})

function createGradientOutlineVariants(): Pretty<
  RecipeCompoundVariant<RecipeCompoundSelection<RecipeVariantRecord>>
>[] {
  return getGradients().map((name) => ({
    gradient: name,
    usage: 'outlined',
    css: {
      borderColor: 'transparent',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      bgColor: 'page.surface.initial',
      borderGradient: name,
      color: 'page.text.initial',
    },
  }))
}
