import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { filledUsage, tagBase, tagPalettes } from './shared/tag.base'

const PAGE_TEXT_INITIAL = 'page.text.initial'

const outlineGradientCss = {
  borderColor: 'transparent',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  color: PAGE_TEXT_INITIAL,
}

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
    gradient: {
      blue: {
        cerbGradient: 'blue',
      },
      green: {
        cerbGradient: 'green',
      },
      purple: {
        cerbGradient: 'purple',
      },
    },
    usage: {
      filled: filledUsage,
      outlined: {
        bgColor: 'inherit',
        border: '1.5px solid',
        borderColor: 'colorPalette.border.initial',
        color: PAGE_TEXT_INITIAL,
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

  compoundVariants: [
    {
      usage: 'outlined',
      gradient: 'blue',
      shape: 'square',
      css: {
        ...outlineGradientCss,
        backgroundImage:
          'conic-gradient(var(--cerberus-colors-neutral-surface-initial) 0 0), linear-gradient(to top right, #9ACFEE, #E6F3FB)',
      },
    },
    {
      usage: 'outlined',
      gradient: 'green',
      shape: 'square',
      css: {
        ...outlineGradientCss,
        backgroundImage:
          'conic-gradient(var(--cerberus-colors-neutral-surface-initial) 0 0), linear-gradient(to top right, #71D192, #E8F8ED)',
      },
    },
    {
      usage: 'outlined',
      gradient: 'purple',
      shape: 'square',
      css: {
        ...outlineGradientCss,
        backgroundImage:
          'conic-gradient(var(--cerberus-colors-neutral-surface-initial) 0 0), linear-gradient(to top right, #BB93E1, #EFE5F8)',
      },
    },
  ],
})
