import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const buttonFn = /* @__PURE__ */ createRecipe(
  'button',
  {
    palette: 'action',
    usage: 'filled',
    shape: 'sharp',
  },
  [],
)

const buttonVariantMap = {
  palette: ['action', 'danger'],
  usage: ['text', 'outline', 'filled'],
  shape: ['sharp', 'rounded'],
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: 'button',
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps: buttonFn.getVariantProps,
})
