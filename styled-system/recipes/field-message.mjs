import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const fieldMessageFn = /* @__PURE__ */ createRecipe('field-message', {}, [])

const fieldMessageVariantMap = {}

const fieldMessageVariantKeys = Object.keys(fieldMessageVariantMap)

export const fieldMessage = /* @__PURE__ */ Object.assign(
  memo(fieldMessageFn.recipeFn),
  {
    __recipe__: true,
    __name__: 'fieldMessage',
    __getCompoundVariantCss__: fieldMessageFn.__getCompoundVariantCss__,
    raw: (props) => props,
    variantKeys: fieldMessageVariantKeys,
    variantMap: fieldMessageVariantMap,
    merge(recipe) {
      return mergeRecipes(this, recipe)
    },
    splitVariantProps(props) {
      return splitProps(props, fieldMessageVariantKeys)
    },
    getVariantProps: fieldMessageFn.getVariantProps,
  },
)
