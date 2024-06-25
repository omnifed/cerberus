import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { filledUsage, tagBase, tagPalettes } from './shared/tag.base'

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
    usage: {
      filled: filledUsage,
      outline: {
        bgColor: 'inherit',
        border: '1.5px solid',
        borderColor: 'colorPalette.border.initial',
        color: 'neutral.text.initial',
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
      rounded: {
        fontWeight: 600,
        h: '1.625rem',
        pxi: '3',
        rounded: 'md',
        textStyle: 'label-md',
      },
    },
  },

  defaultVariants: {
    palette: 'action',
    usage: 'filled',
    shape: 'pill',
  },
})
