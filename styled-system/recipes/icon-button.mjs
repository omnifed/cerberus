import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const iconButtonFn = /* @__PURE__ */ createRecipe(
  'icon-btn',
  {
    palette: 'action',
    usage: 'ghost',
    shape: 'circle',
    size: 'lg',
  },
  [
    {
      palette: 'danger',
      usage: 'filled',
      css: {
        color: 'colorPalette.text.200',
        _hover: {
          _notDisabled: {
            color: 'colorPalette.text.inverse',
          },
        },
      },
    },
    {
      palette: 'danger',
      usage: 'ghost',
      css: {
        color: 'colorPalette.text.initial',
        _hover: {
          _notDisabled: {
            color: 'colorPalette.text.100',
          },
        },
      },
    },
  ],
)

const iconButtonVariantMap = {
  palette: [
    'action',
    'secondaryAction',
    'info',
    'success',
    'warning',
    'danger',
  ],
  usage: ['ghost', 'filled', 'outlined', 'outlined-subtle'],
  shape: ['square', 'circle'],
  size: ['sm', 'lg'],
}

const iconButtonVariantKeys = Object.keys(iconButtonVariantMap)

export const iconButton = /* @__PURE__ */ Object.assign(
  memo(iconButtonFn.recipeFn),
  {
    __recipe__: true,
    __name__: 'iconButton',
    __getCompoundVariantCss__: iconButtonFn.__getCompoundVariantCss__,
    raw: (props) => props,
    variantKeys: iconButtonVariantKeys,
    variantMap: iconButtonVariantMap,
    merge(recipe) {
      return mergeRecipes(this, recipe)
    },
    splitVariantProps(props) {
      return splitProps(props, iconButtonVariantKeys)
    },
    getVariantProps: iconButtonFn.getVariantProps,
  },
)
