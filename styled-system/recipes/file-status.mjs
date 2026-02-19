import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const fileStatusDefaultVariants = {
  status: 'todo',
}
const fileStatusCompoundVariants = []

const fileStatusSlotNames = [
  ['root', 'file-status__root'],
  ['icon', 'file-status__icon'],
]
const fileStatusSlotFns = /* @__PURE__ */ fileStatusSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      fileStatusDefaultVariants,
      getSlotCompoundVariant(fileStatusCompoundVariants, slotName),
    ),
  ],
)

const fileStatusFn = memo((props = {}) => {
  return Object.fromEntries(
    fileStatusSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const fileStatusVariantKeys = ['status']
const getVariantProps = (variants) => ({
  ...fileStatusDefaultVariants,
  ...compact(variants),
})

export const fileStatus = /* @__PURE__ */ Object.assign(fileStatusFn, {
  __recipe__: false,
  __name__: 'fileStatus',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fileStatusVariantKeys,
  variantMap: {
    status: ['todo', 'processing', 'done', 'error'],
  },
  splitVariantProps(props) {
    return splitProps(props, fileStatusVariantKeys)
  },
  getVariantProps,
})
