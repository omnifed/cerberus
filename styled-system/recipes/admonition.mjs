import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const admonitionDefaultVariants = {
  palette: 'page',
  usage: 'filled',
}
const admonitionCompoundVariants = [
  {
    palette: 'page',
    usage: 'filled',
    css: {
      root: {
        bgColor: 'page.surface.200',
        color: 'page.text.initial',
      },
    },
  },
  {
    palette: 'page',
    usage: 'outlined',
    css: {
      root: {
        bgColor: 'page.surface.100',
        borderColor: 'page.border.200',
        color: 'page.text.initial',
      },
    },
  },
]

const admonitionSlotNames = [
  ['root', 'admonition__root'],
  ['indicator', 'admonition__indicator'],
  ['heading', 'admonition__heading'],
  ['description', 'admonition__description'],
]
const admonitionSlotFns = /* @__PURE__ */ admonitionSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      admonitionDefaultVariants,
      getSlotCompoundVariant(admonitionCompoundVariants, slotName),
    ),
  ],
)

const admonitionFn = memo((props = {}) => {
  return Object.fromEntries(
    admonitionSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const admonitionVariantKeys = ['palette', 'usage']
const getVariantProps = (variants) => ({
  ...admonitionDefaultVariants,
  ...compact(variants),
})

export const admonition = /* @__PURE__ */ Object.assign(admonitionFn, {
  __recipe__: false,
  __name__: 'admonition',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: admonitionVariantKeys,
  variantMap: {
    palette: ['page', 'info', 'success', 'warning', 'danger'],
    usage: ['filled', 'outlined'],
  },
  splitVariantProps(props) {
    return splitProps(props, admonitionVariantKeys)
  },
  getVariantProps,
})
