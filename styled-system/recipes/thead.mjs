import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const theadFn = /* @__PURE__ */ createRecipe('thead', {}, [])

const theadVariantMap = {}

const theadVariantKeys = Object.keys(theadVariantMap)

export const thead = /* @__PURE__ */ Object.assign(memo(theadFn.recipeFn), {
  __recipe__: true,
  __name__: 'thead',
  __getCompoundVariantCss__: theadFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: theadVariantKeys,
  variantMap: theadVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, theadVariantKeys)
  },
  getVariantProps: theadFn.getVariantProps,
})
