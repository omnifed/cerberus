import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'

/**
 * This module contains the fieldMessage recipe.
 * @module
 */

/**
 * Styles for the FieldMessage component
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [FieldMessage docs](https://cerberus.digitalu.design/react/field-message)
 */
export const fieldMessage: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'field-message',
  description: 'WCAG Level AAA compliant input description styles.',

  base: {
    color: 'page.text.200',
    textStyle: 'label-sm',
    _userInvalid: {
      color: 'danger.text.100',
    },
  },

  variants: {},

  defaultVariants: {},
})
