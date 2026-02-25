import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const tdFn = /* @__PURE__ */ createRecipe(
  'td',
  {
    size: 'md',
  },
  [],
)

const tdVariantMap = {
  size: ['sm', 'md', 'lg'],
}

const tdVariantKeys = Object.keys(tdVariantMap)

export const td = /* @__PURE__ */ Object.assign(memo(tdFn.recipeFn), {
  __recipe__: true,
  __name__: 'td',
  __getCompoundVariantCss__: tdFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: tdVariantKeys,
  variantMap: tdVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, tdVariantKeys)
  },
  getVariantProps: tdFn.getVariantProps,
})
