import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const tbodyFn = /* @__PURE__ */ createRecipe(
  'tbody',
  {
    decoration: 'default',
  },
  [],
)

const tbodyVariantMap = {
  decoration: ['zebra', 'default'],
}

const tbodyVariantKeys = Object.keys(tbodyVariantMap)

export const tbody = /* @__PURE__ */ Object.assign(memo(tbodyFn.recipeFn), {
  __recipe__: true,
  __name__: 'tbody',
  __getCompoundVariantCss__: tbodyFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: tbodyVariantKeys,
  variantMap: tbodyVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, tbodyVariantKeys)
  },
  getVariantProps: tbodyFn.getVariantProps,
})
