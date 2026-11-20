'use client'

import { useFileUploadContext } from '@ark-ui/react/file-upload'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { IconButton } from '../icon-button/index'
import {
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  type FileUploadItemGroupProps,
} from './primitives'

/**
 * This module contains the FileUpload ItemGroupWithPreview abstraction.
 * @module 'react/file-upload'
 */

// `FileUpload.Item` requires a `file`, so it can't be a patch child
const PARTS = {
  itemPreview: FileUploadItemPreview,
  itemPreviewImage: FileUploadItemPreviewImage,
  itemName: FileUploadItemName,
  itemSizeText: FileUploadItemSizeText,
  itemDeleteTrigger: FileUploadItemDeleteTrigger,
}

export type FileUploadItemGroupWithPreviewProps = FileUploadItemGroupProps

/**
 * The ItemGroupWithPreview component is an abstraction of the
 * `FileUpload.ItemGroup` primitive that renders a `FileUpload.Item` per
 * accepted file, with its image preview (image files only), name, size and a
 * Cerberus `close` icon button as the delete trigger. Direct
 * `FileUpload.ItemPreview`, `FileUpload.ItemPreviewImage`,
 * `FileUpload.ItemName`, `FileUpload.ItemSizeText` and
 * `FileUpload.ItemDeleteTrigger` children patch that part of every item; an
 * `ItemDeleteTrigger` child with children replaces the icon button. Other
 * children render in the group after the items. It reads the files from the
 * nearest `FileUpload.Root` or `FileUpload.RootProvider`.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/file-uploader)
 * @description [Ark Docs](https://ark-ui.com/docs/components/file-upload)
 * @example
 * ```tsx
 * <FileUpload.Root accept="image/*">
 *   <FileUpload.Trigger>Choose files</FileUpload.Trigger>
 *   <FileUpload.ItemGroupWithPreview />
 *   <FileUpload.HiddenInput />
 * </FileUpload.Root>
 * ```
 */
export function FileUploadItemGroupWithPreview(
  props: FileUploadItemGroupWithPreviewProps,
) {
  const { children, ...groupProps } = props
  const fileUpload = useFileUploadContext()
  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  const { parts, content } = extractParts(children, PARTS)

  // Every item renders its own parts; a part child only patches props
  const { children: _previewChildren, ...previewOverrideProps } =
    parts.itemPreview ?? {}
  const { children: deleteChildren, ...deleteOverrideProps } =
    parts.itemDeleteTrigger ?? {}

  return (
    <FileUploadItemGroup {...groupProps}>
      {fileUpload.acceptedFiles.map((file) => (
        <FileUploadItem key={file.name} className="file-item" file={file}>
          <FileUploadItemPreview type="image/*" {...previewOverrideProps}>
            <FileUploadItemPreviewImage {...parts.itemPreviewImage} />
          </FileUploadItemPreview>

          <FileUploadItemName {...parts.itemName} />
          <FileUploadItemSizeText {...parts.itemSizeText} />

          {deleteChildren ? (
            <FileUploadItemDeleteTrigger {...deleteOverrideProps}>
              {deleteChildren}
            </FileUploadItemDeleteTrigger>
          ) : (
            <FileUploadItemDeleteTrigger asChild {...deleteOverrideProps}>
              <IconButton clipboard size="sm" usage="ghost">
                <CloseIcon />
              </IconButton>
            </FileUploadItemDeleteTrigger>
          )}
        </FileUploadItem>
      ))}

      {content}
    </FileUploadItemGroup>
  )
}

/**
 * The accepted files with a preview of their images; an alias of
 * `FileUpload.ItemGroupWithPreview`.
 * @see {@link FileUploadItemGroupWithPreview}
 */
export const ImgPreview = FileUploadItemGroupWithPreview
