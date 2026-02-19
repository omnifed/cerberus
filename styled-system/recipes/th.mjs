import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const thFn = /* @__PURE__ */ createRecipe(
  'th',
  {
    size: 'md',
  },
  [],
)

const thVariantMap = {
  size: ['md', 'lg'],
}

const thVariantKeys = Object.keys(thVariantMap)

export const th = /* @__PURE__ */ Object.assign(memo(thFn.recipeFn), {
  __recipe__: true,
  __name__: 'th',
  __getCompoundVariantCss__: thFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: thVariantKeys,
  variantMap: thVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, thVariantKeys)
  },
  getVariantProps: thFn.getVariantProps,
})
