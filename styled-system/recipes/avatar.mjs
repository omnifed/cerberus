import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const avatarDefaultVariants = {
  gradient: 'none',
  size: 'md',
  shape: 'circle',
}
const avatarCompoundVariants = []

const avatarSlotNames = [
  ['root', 'avatar__root'],
  ['image', 'avatar__image'],
  ['fallback', 'avatar__fallback'],
]
const avatarSlotFns = /* @__PURE__ */ avatarSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      avatarDefaultVariants,
      getSlotCompoundVariant(avatarCompoundVariants, slotName),
    ),
  ],
)

const avatarFn = memo((props = {}) => {
  return Object.fromEntries(
    avatarSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const avatarVariantKeys = ['gradient', 'size', 'shape']
const getVariantProps = (variants) => ({
  ...avatarDefaultVariants,
  ...compact(variants),
})

export const avatar = /* @__PURE__ */ Object.assign(avatarFn, {
  __recipe__: false,
  __name__: 'avatar',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: avatarVariantKeys,
  variantMap: {
    gradient: [
      'charon-light',
      'charon-dark',
      'nyx-light',
      'nyx-dark',
      'amphiaraus-light',
      'amphiaraus-dark',
      'styx-light',
      'styx-dark',
      'thanatos-light',
      'thanatos-dark',
      'hades-light',
      'hades-dark',
      'asphodel-light',
      'asphodel-dark',
      'none',
    ],
    size: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    shape: ['circle', 'square'],
  },
  splitVariantProps(props) {
    return splitProps(props, avatarVariantKeys)
  },
  getVariantProps,
})
