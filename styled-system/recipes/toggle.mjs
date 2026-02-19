import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const toggleDefaultVariants = {
  size: 'sm',
}
const toggleCompoundVariants = []

const toggleSlotNames = [
  ['track', 'toggle__track'],
  ['container', 'toggle__container'],
  ['input', 'toggle__input'],
  ['thumb', 'toggle__thumb'],
]
const toggleSlotFns = /* @__PURE__ */ toggleSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      toggleDefaultVariants,
      getSlotCompoundVariant(toggleCompoundVariants, slotName),
    ),
  ],
)

const toggleFn = memo((props = {}) => {
  return Object.fromEntries(
    toggleSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const toggleVariantKeys = ['size']
const getVariantProps = (variants) => ({
  ...toggleDefaultVariants,
  ...compact(variants),
})

export const toggle = /* @__PURE__ */ Object.assign(toggleFn, {
  __recipe__: false,
  __name__: 'toggle',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: toggleVariantKeys,
  variantMap: {
    size: ['sm', 'lg'],
  },
  splitVariantProps(props) {
    return splitProps(props, toggleVariantKeys)
  },
  getVariantProps,
})
