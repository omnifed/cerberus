import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const radioGroupDefaultVariants = {
  orientation: 'horizontal',
  size: 'sm',
}
const radioGroupCompoundVariants = []

const radioGroupSlotNames = [
  ['root', 'radio-group__root'],
  ['label', 'radio-group__label'],
  ['item', 'radio-group__item'],
  ['itemText', 'radio-group__itemText'],
  ['itemControl', 'radio-group__itemControl'],
  ['indicator', 'radio-group__indicator'],
]
const radioGroupSlotFns = /* @__PURE__ */ radioGroupSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      radioGroupDefaultVariants,
      getSlotCompoundVariant(radioGroupCompoundVariants, slotName),
    ),
  ],
)

const radioGroupFn = memo((props = {}) => {
  return Object.fromEntries(
    radioGroupSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const radioGroupVariantKeys = ['orientation', 'size']
const getVariantProps = (variants) => ({
  ...radioGroupDefaultVariants,
  ...compact(variants),
})

export const radioGroup = /* @__PURE__ */ Object.assign(radioGroupFn, {
  __recipe__: false,
  __name__: 'radioGroup',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: radioGroupVariantKeys,
  variantMap: {
    orientation: ['horizontal', 'vertical'],
    size: ['sm', 'md'],
  },
  splitVariantProps(props) {
    return splitProps(props, radioGroupVariantKeys)
  },
  getVariantProps,
})
