import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const buttonGroupFn = /* @__PURE__ */ createRecipe(
  'buttonGroup',
  {
    layout: 'default',
    shape: 'sharp',
  },
  [
    {
      layout: 'attached',
      shape: 'sharp',
      css: {
        '& > :is([data-scope="icon-button"])': {
          borderBottomRightRadius: '0!',
        },
      },
    },
  ],
)

const buttonGroupVariantMap = {
  layout: ['default', 'attached'],
  shape: ['default', 'sharp', 'rounded'],
}

const buttonGroupVariantKeys = Object.keys(buttonGroupVariantMap)

export const buttonGroup = /* @__PURE__ */ Object.assign(
  memo(buttonGroupFn.recipeFn),
  {
    __recipe__: true,
    __name__: 'buttonGroup',
    __getCompoundVariantCss__: buttonGroupFn.__getCompoundVariantCss__,
    raw: (props) => props,
    variantKeys: buttonGroupVariantKeys,
    variantMap: buttonGroupVariantMap,
    merge(recipe) {
      return mergeRecipes(this, recipe)
    },
    splitVariantProps(props) {
      return splitProps(props, buttonGroupVariantKeys)
    },
    getVariantProps: buttonGroupFn.getVariantProps,
  },
)
