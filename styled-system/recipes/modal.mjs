import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const modalDefaultVariants = {}
const modalCompoundVariants = []

const modalSlotNames = [
  ['dialog', 'modal__dialog'],
  ['icon', 'modal__icon'],
  ['heading', 'modal__heading'],
  ['description', 'modal__description'],
]
const modalSlotFns = /* @__PURE__ */ modalSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      modalDefaultVariants,
      getSlotCompoundVariant(modalCompoundVariants, slotName),
    ),
  ],
)

const modalFn = memo((props = {}) => {
  return Object.fromEntries(
    modalSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const modalVariantKeys = []
const getVariantProps = (variants) => ({
  ...modalDefaultVariants,
  ...compact(variants),
})

export const modal = /* @__PURE__ */ Object.assign(modalFn, {
  __recipe__: false,
  __name__: 'modal',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: modalVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, modalVariantKeys)
  },
  getVariantProps,
})
