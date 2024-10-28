import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { filledUsage, tagBase, tagPalettes } from './shared/tag.base'
import { createGradientVariants } from './shared/helpers'
import { gradientValues } from '../utilities'
import type {
  Pretty,
  RecipeCompoundSelection,
  RecipeCompoundVariant,
} from '@pandacss/types'

const PAGE_TEXT_INITIAL = 'page.text.initial'

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

  base: tagBase,

  variants: {
    palette: tagPalettes,
    gradient: createGradientVariants(),
    usage: {
      filled: filledUsage,
      outlined: {
        bgColor: 'inherit',
        border: '1.5px solid',
        borderColor: 'colorPalette.border.initial',
        _warningPalette: {
          color: PAGE_TEXT_INITIAL,
        },
        _pagePalette: {
          color: PAGE_TEXT_INITIAL,
        },
      },
    },
    shape: {
      pill: {
        fontWeight: 400,
        h: '1.5rem',
        pxi: '2',
        rounded: 'full',
        textStyle: 'label-sm',
      },
      square: {
        fontWeight: 600,
        h: '1.625rem',
        pxi: '3',
        rounded: 'md',
        textStyle: 'label-md',
      },
    },
  },

  defaultVariants: {
    palette: 'page',
    usage: 'filled',
    shape: 'pill',
  },

  compoundVariants: createGradientOutlineVariants(),
})

function createGradientOutlineVariants(): Pretty<
  RecipeCompoundVariant<RecipeCompoundSelection<RecipeVariantRecord>>
>[] {
  return gradientValues.map((name) => ({
    gradient: name,
    usage: 'outlined',
    css: {
      borderColor: 'transparent',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      bgColor: 'page.surface.initial',
      borderGradient: name,
      color: PAGE_TEXT_INITIAL,
    },
  }))
}
