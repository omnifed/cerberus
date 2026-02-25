import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const inputDefaultVariants = {
  size: 'lg',
}
const inputCompoundVariants = []

const inputSlotNames = [
  ['root', 'input__root'],
  ['input', 'input__input'],
  ['icon', 'input__icon'],
  ['startIcon', 'input__startIcon'],
]
const inputSlotFns = /* @__PURE__ */ inputSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      inputDefaultVariants,
      getSlotCompoundVariant(inputCompoundVariants, slotName),
    ),
  ],
)

const inputFn = memo((props = {}) => {
  return Object.fromEntries(
    inputSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const inputVariantKeys = ['size']
const getVariantProps = (variants) => ({
  ...inputDefaultVariants,
  ...compact(variants),
})

export const input = /* @__PURE__ */ Object.assign(inputFn, {
  __recipe__: false,
  __name__: 'input',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: inputVariantKeys,
  variantMap: {
    size: ['sm', 'md', 'lg'],
  },
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys)
  },
  getVariantProps,
})
