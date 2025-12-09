import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { createGradientVariants } from './shared/helpers'
import { gradientValues } from '../utilities'
import type {
  Pretty,
  RecipeCompoundSelection,
  RecipeCompoundVariant,
} from '@pandacss/types'
import { nonActionPalettes, secondaryAction } from './shared/palettes'

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
  jsx: ['Tag', 'ClosableTag', 'TagRoot', 'El', /Tag$/, /TagRoot$/, /El$/],

  base: {
    alignItems: 'center',
    display: 'inline-flex',
    gap: 'xs',
    justifyContent: 'center',
    lineHeight: '0',
    textTransform: 'capitalize',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },

  variants: {
    palette: { ...nonActionPalettes, secondaryAction },

    gradient: createGradientVariants(),

    usage: {
      // solid (non-gradient) variants
      filled: {
        bgColor: 'colorPalette.surface.200',
        color: 'colorPalette.text.200',
        gradient: undefined,
        _secondaryActionPalette: {
          bgColor: 'colorPalette.bg.initial',
          color: 'colorPalette.text.100',
        },
      },
      outlined: {
        bgColor: 'inherit',
        border: '1.5px solid',
        borderColor: 'colorPalette.border.initial',
        color: 'colorPalette.text.100',
        _warningPalette: {
          color: 'colorPalette.text.initial',
        },
        _pagePalette: {
          color: 'page.text.initial',
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
    shape: 'pill',
    usage: 'filled',
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
      color: 'page.text.initial',
    },
  }))
}
