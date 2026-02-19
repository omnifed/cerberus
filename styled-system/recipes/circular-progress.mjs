import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const circularProgressDefaultVariants = {
  usage: 'filled',
  size: 'xs',
}
const circularProgressCompoundVariants = []

const circularProgressSlotNames = [
  ['root', 'circular-progress__root'],
  ['label', 'circular-progress__label'],
  ['track', 'circular-progress__track'],
  ['range', 'circular-progress__range'],
  ['valueText', 'circular-progress__valueText'],
  ['view', 'circular-progress__view'],
  ['circle', 'circular-progress__circle'],
  ['circleTrack', 'circular-progress__circleTrack'],
  ['circleRange', 'circular-progress__circleRange'],
  ['infoGroup', 'circular-progress__infoGroup'],
]
const circularProgressSlotFns = /* @__PURE__ */ circularProgressSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      circularProgressDefaultVariants,
      getSlotCompoundVariant(circularProgressCompoundVariants, slotName),
    ),
  ],
)

const circularProgressFn = memo((props = {}) => {
  return Object.fromEntries(
    circularProgressSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const circularProgressVariantKeys = ['usage', 'size']
const getVariantProps = (variants) => ({
  ...circularProgressDefaultVariants,
  ...compact(variants),
})

export const circularProgress = /* @__PURE__ */ Object.assign(
  circularProgressFn,
  {
    __recipe__: false,
    __name__: 'circularProgress',
    raw: (props) => props,
    classNameMap: {},
    variantKeys: circularProgressVariantKeys,
    variantMap: {
      usage: ['filled', 'transparent'],
      size: ['xs', 'sm', 'md', 'lg'],
    },
    splitVariantProps(props) {
      return splitProps(props, circularProgressVariantKeys)
    },
    getVariantProps,
  },
)
