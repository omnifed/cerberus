import {
  FileUpload,
  type FileUploadContextProps as ArkFileUploadContextProps,
  type FileUploadRootProps as ArkFileUploadRootProps,
  type FileUploadLabelProps as ArkFileUploadLabelProps,
  type FileUploadDropzoneProps as ArkFileUploadDropzoneProps,
  type FileUploadTriggerProps as ArkFileUploadTriggerProps,
  type FileUploadClearTriggerProps as ArkFileUploadClearTriggerProps,
  type FileUploadItemGroupProps as ArkFileUploadItemGroupProps,
  type FileUploadItemProps as ArkFileUploadItemProps,
  type FileUploadItemPreviewProps as ArkFileUploadItemPreviewProps,
  type FileUploadItemPreviewImageProps as ArkFileUploadItemPreviewImageProps,
  type FileUploadItemNameProps as ArkFileUploadItemNameProps,
  type FileUploadItemSizeTextProps as ArkFileUploadItemSizeTextProps,
  type FileUploadItemDeleteTriggerProps as ArkFileUploadItemDeleteTriggerProps,
  type FileUploadHiddenInputProps as ArkFileUploadHiddenInputProps,
} from '@ark-ui/react/file-upload'
import {
  fileUploader,
  type FileUploaderVariantProps,
} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(fileUploader)

// Root

export type FileUploadRootProps = CerberusPrimitiveProps<
  ArkFileUploadRootProps & FileUploaderVariantProps
>
export const FileUploadRoot = withSlotRecipe(FileUpload.Root, 'root')

// Dropzone

export type FileUploadDropzoneProps =
  CerberusPrimitiveProps<ArkFileUploadDropzoneProps>
export const FileUploadDropzone = withSlotRecipe(
  FileUpload.Dropzone,
  'dropzone',
)

// Label

export type FileUploadLabelProps =
  CerberusPrimitiveProps<ArkFileUploadLabelProps>
export const FileUploadLabel = withSlotRecipe(FileUpload.Label, 'label')

// Trigger

export type FileUploadTriggerProps =
  CerberusPrimitiveProps<ArkFileUploadTriggerProps>
export const FileUploadTrigger = withSlotRecipe(FileUpload.Trigger, 'trigger')

// ClearTrigger

export type FileUploadClearTriggerProps =
  CerberusPrimitiveProps<ArkFileUploadClearTriggerProps>
export const FileUploadClearTrigger = withSlotRecipe(
  FileUpload.ClearTrigger,
  'clearTrigger',
)

// ItemGroup

export type FileUploadItemGroupProps =
  CerberusPrimitiveProps<ArkFileUploadItemGroupProps>
export const FileUploadItemGroup = withSlotRecipe(
  FileUpload.ItemGroup,
  'itemGroup',
)

// Item

export type FileUploadItemProps = CerberusPrimitiveProps<ArkFileUploadItemProps>
export const FileUploadItem = withSlotRecipe(FileUpload.Item, 'item')

// ItemPreview

export type FileUploadItemPreviewProps =
  CerberusPrimitiveProps<ArkFileUploadItemPreviewProps>
export const FileUploadItemPreview = withSlotRecipe(
  FileUpload.ItemPreview,
  'itemPreview',
)

// ItemPreviewImage

export type FileUploadItemPreviewImageProps =
  CerberusPrimitiveProps<ArkFileUploadItemPreviewImageProps>
export const FileUploadItemPreviewImage = withSlotRecipe(
  FileUpload.ItemPreviewImage,
  'itemPreviewImage',
)

// ItemName

export type FileUploadItemNameProps =
  CerberusPrimitiveProps<ArkFileUploadItemNameProps>
export const FileUploadItemName = withSlotRecipe(
  FileUpload.ItemName,
  'itemName',
)

// ItemSizeText

export type FileUploadItemSizeTextProps =
  CerberusPrimitiveProps<ArkFileUploadItemSizeTextProps>
export const FileUploadItemSizeText = withSlotRecipe(
  FileUpload.ItemSizeText,
  'itemSizeText',
)

// ItemDeleteTrigger

export type FileUploadItemDeleteTriggerProps =
  CerberusPrimitiveProps<ArkFileUploadItemDeleteTriggerProps>
export const FileUploadItemDeleteTrigger = withSlotRecipe(
  FileUpload.ItemDeleteTrigger,
  'itemDeleteTrigger',
)

// HiddenInput

export type FileUploadHiddenInputProps =
  CerberusPrimitiveProps<ArkFileUploadHiddenInputProps>
export const FileUploadHiddenInput = withNoRecipe(FileUpload.HiddenInput)

// Context

export type FileUploadContextProps =
  CerberusPrimitiveProps<ArkFileUploadContextProps>
export const FileUploadContext = withNoRecipe(FileUpload.Context)

// Content

export type FileUploadContentProps = CerberusPrimitiveProps<HTMLDivElement>
export const FileUploadContent = withSlotRecipe('div', 'label')

// Icon

export type FileUploadIconProps = CerberusPrimitiveProps<HTMLDivElement>
export const FileUploadIcon = withSlotRecipe('div', 'icon')

// Heading

export type FileUploadHeadingProps =
  CerberusPrimitiveProps<HTMLParagraphElement>
export const FileUploadHeading = withSlotRecipe('p', 'heading')

// Description

export type FileUploadDescriptionProps =
  CerberusPrimitiveProps<HTMLParagraphElement>
export const FileUploadDescription = withSlotRecipe('p', 'description')

// Types

export type { UseFileUploadContext } from '@ark-ui/react'
