import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const tableDefaultVariants = {
  decoration: 'default',
  size: 'md',
}
const tableCompoundVariants = []

const tableSlotNames = [
  ['root', 'table__root'],
  ['trigger', 'table__trigger'],
  ['table', 'table__table'],
  ['caption', 'table__caption'],
  ['thead', 'table__thead'],
  ['tbody', 'table__tbody'],
  ['tfoot', 'table__tfoot'],
  ['tr', 'table__tr'],
  ['th', 'table__th'],
  ['td', 'table__td'],
]
const tableSlotFns = /* @__PURE__ */ tableSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      tableDefaultVariants,
      getSlotCompoundVariant(tableCompoundVariants, slotName),
    ),
  ],
)

const tableFn = memo((props = {}) => {
  return Object.fromEntries(
    tableSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const tableVariantKeys = ['size', 'decoration']
const getVariantProps = (variants) => ({
  ...tableDefaultVariants,
  ...compact(variants),
})

export const table = /* @__PURE__ */ Object.assign(tableFn, {
  __recipe__: false,
  __name__: 'table',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tableVariantKeys,
  variantMap: {
    size: ['sm', 'md', 'lg'],
    decoration: ['default', 'zebra'],
  },
  splitVariantProps(props) {
    return splitProps(props, tableVariantKeys)
  },
  getVariantProps,
})
