import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const ratingGroupDefaultVariants = {
  palette: 'action',
  orientation: 'vertical',
  size: 'sm',
}
const ratingGroupCompoundVariants = []

const ratingGroupSlotNames = [
  ['root', 'rating-group__root'],
  ['label', 'rating-group__label'],
  ['item', 'rating-group__item'],
  ['control', 'rating-group__control'],
]
const ratingGroupSlotFns = /* @__PURE__ */ ratingGroupSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      ratingGroupDefaultVariants,
      getSlotCompoundVariant(ratingGroupCompoundVariants, slotName),
    ),
  ],
)

const ratingGroupFn = memo((props = {}) => {
  return Object.fromEntries(
    ratingGroupSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const ratingGroupVariantKeys = ['palette', 'orientation', 'size']
const getVariantProps = (variants) => ({
  ...ratingGroupDefaultVariants,
  ...compact(variants),
})

export const ratingGroup = /* @__PURE__ */ Object.assign(ratingGroupFn, {
  __recipe__: false,
  __name__: 'ratingGroup',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: ratingGroupVariantKeys,
  variantMap: {
    palette: ['action', 'warning'],
    orientation: ['horizontal', 'vertical'],
    size: ['sm', 'md'],
  },
  splitVariantProps(props) {
    return splitProps(props, ratingGroupVariantKeys)
  },
  getVariantProps,
})
