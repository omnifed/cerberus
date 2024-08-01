import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'

/**
 * This module contains the label recipe.
 * @module
 */

/**
 * Styles for the Label component
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Label docs](https://cerberus.digitalu.design/react/label)
 */
export const label: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'label',
  description: 'WCAG Level AAA compliant label styles.',

  base: {
    _disabled: {
      color: 'page.text.100',
    },
  },

  variants: {
    usage: {
      visible: {},
      hidden: {
        srOnly: true,
      },
    },
    size: {
      sm: {
        textStyle: 'label-sm',
      },
      md: {
        textStyle: 'label-md',
      },
    },
  },

  defaultVariants: {
    usage: 'visible',
    size: 'md',
  },
})
