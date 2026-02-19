import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const groupFn = /* @__PURE__ */ createRecipe(
  'group',
  {
    orientation: 'horizontal',
    layout: 'default',
  },
  [
    {
      orientation: 'horizontal',
      layout: 'attached',
      css: {
        '& > *:first-child': {
          borderEndRadius: '0',
          marginEnd: '-1px',
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0',
          marginEnd: '-1px',
        },
        '& > *:last-child': {
          borderStartRadius: '0',
        },
      },
    },
    {
      orientation: 'vertical',
      layout: 'attached',
      css: {
        '& > *:first-child': {
          borderBottomRadius: '0!',
          marginBottom: '-1px',
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0!',
          marginBottom: '-1px',
        },
        '& > *:last-child': {
          borderTopRadius: '0!',
        },
      },
    },
  ],
)

const groupVariantMap = {
  orientation: ['horizontal', 'vertical'],
  layout: ['default', 'attached', 'grow'],
}

const groupVariantKeys = Object.keys(groupVariantMap)

export const group = /* @__PURE__ */ Object.assign(memo(groupFn.recipeFn), {
  __recipe__: true,
  __name__: 'group',
  __getCompoundVariantCss__: groupFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: groupVariantKeys,
  variantMap: groupVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, groupVariantKeys)
  },
  getVariantProps: groupFn.getVariantProps,
})
