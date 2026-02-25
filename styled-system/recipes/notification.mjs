import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const notificationDefaultVariants = {
  palette: 'info',
}
const notificationCompoundVariants = []

const notificationSlotNames = [
  ['center', 'notification__center'],
  ['dialog', 'notification__dialog'],
  ['icon', 'notification__icon'],
  ['heading', 'notification__heading'],
  ['description', 'notification__description'],
  ['close', 'notification__close'],
  ['closeAll', 'notification__closeAll'],
]
const notificationSlotFns = /* @__PURE__ */ notificationSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      notificationDefaultVariants,
      getSlotCompoundVariant(notificationCompoundVariants, slotName),
    ),
  ],
)

const notificationFn = memo((props = {}) => {
  return Object.fromEntries(
    notificationSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const notificationVariantKeys = ['palette']
const getVariantProps = (variants) => ({
  ...notificationDefaultVariants,
  ...compact(variants),
})

export const notification = /* @__PURE__ */ Object.assign(notificationFn, {
  __recipe__: false,
  __name__: 'notification',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: notificationVariantKeys,
  variantMap: {
    palette: ['info', 'success', 'warning', 'danger'],
  },
  splitVariantProps(props) {
    return splitProps(props, notificationVariantKeys)
  },
  getVariantProps,
})
