import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const tabsDefaultVariants = {
  palette: 'action',
}
const tabsCompoundVariants = []

const tabsSlotNames = [
  ['root', 'tab__root'],
  ['list', 'tab__list'],
  ['trigger', 'tab__trigger'],
  ['content', 'tab__content'],
  ['indicator', 'tab__indicator'],
]
const tabsSlotFns = /* @__PURE__ */ tabsSlotNames.map(([slotName, slotKey]) => [
  slotName,
  createRecipe(
    slotKey,
    tabsDefaultVariants,
    getSlotCompoundVariant(tabsCompoundVariants, slotName),
  ),
])

const tabsFn = memo((props = {}) => {
  return Object.fromEntries(
    tabsSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]),
  )
})

const tabsVariantKeys = ['palette']
const getVariantProps = (variants) => ({
  ...tabsDefaultVariants,
  ...compact(variants),
})

export const tabs = /* @__PURE__ */ Object.assign(tabsFn, {
  __recipe__: false,
  __name__: 'tabs',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tabsVariantKeys,
  variantMap: {
    palette: ['action', 'secondaryAction'],
  },
  splitVariantProps(props) {
    return splitProps(props, tabsVariantKeys)
  },
  getVariantProps,
})
