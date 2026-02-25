import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const fileUploaderDefaultVariants = {}
const fileUploaderCompoundVariants = []

const fileUploaderSlotNames = [
  ['root', 'file-uploader__root'],
  ['dropzone', 'file-uploader__dropzone'],
  ['item', 'file-uploader__item'],
  ['itemDeleteTrigger', 'file-uploader__itemDeleteTrigger'],
  ['itemGroup', 'file-uploader__itemGroup'],
  ['itemName', 'file-uploader__itemName'],
  ['itemPreview', 'file-uploader__itemPreview'],
  ['itemPreviewImage', 'file-uploader__itemPreviewImage'],
  ['itemSizeText', 'file-uploader__itemSizeText'],
  ['label', 'file-uploader__label'],
  ['trigger', 'file-uploader__trigger'],
  ['clearTrigger', 'file-uploader__clearTrigger'],
  ['icon', 'file-uploader__icon'],
  ['heading', 'file-uploader__heading'],
  ['description', 'file-uploader__description'],
]
const fileUploaderSlotFns = /* @__PURE__ */ fileUploaderSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      fileUploaderDefaultVariants,
      getSlotCompoundVariant(fileUploaderCompoundVariants, slotName),
    ),
  ],
)

const fileUploaderFn = memo((props = {}) => {
  return Object.fromEntries(
    fileUploaderSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const fileUploaderVariantKeys = []
const getVariantProps = (variants) => ({
  ...fileUploaderDefaultVariants,
  ...compact(variants),
})

export const fileUploader = /* @__PURE__ */ Object.assign(fileUploaderFn, {
  __recipe__: false,
  __name__: 'fileUploader',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fileUploaderVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fileUploaderVariantKeys)
  },
  getVariantProps,
})
