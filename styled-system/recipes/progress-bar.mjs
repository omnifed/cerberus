import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const progressBarDefaultVariants = {
  size: 'md',
  usage: 'rounded',
}
const progressBarCompoundVariants = []

const progressBarSlotNames = [
  ['root', 'progressBar__root'],
  ['bar', 'progressBar__bar'],
]
const progressBarSlotFns = /* @__PURE__ */ progressBarSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      progressBarDefaultVariants,
      getSlotCompoundVariant(progressBarCompoundVariants, slotName),
    ),
  ],
)

const progressBarFn = memo((props = {}) => {
  return Object.fromEntries(
    progressBarSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const progressBarVariantKeys = ['size', 'usage']
const getVariantProps = (variants) => ({
  ...progressBarDefaultVariants,
  ...compact(variants),
})

export const progressBar = /* @__PURE__ */ Object.assign(progressBarFn, {
  __recipe__: false,
  __name__: 'progressBar',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: progressBarVariantKeys,
  variantMap: {
    size: ['sm', 'md'],
    usage: ['block', 'rounded'],
  },
  splitVariantProps(props) {
    return splitProps(props, progressBarVariantKeys)
  },
  getVariantProps,
})
