import type { ElementType } from 'react'
import {
  FileUploadContext,
  FileUploadRoot,
  FileUploadDropzone,
  FileUploadLabel,
  FileUploadTrigger,
  FileUploadClearTrigger,
  FileUploadItemGroup,
  FileUploadItem,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemName,
  FileUploadItemSizeText,
  FileUploadItemDeleteTrigger,
  FileUploadContent,
  FileUploadIcon,
  FileUploadHiddenInput,
  FileUploadHeading,
  FileUploadDescription,
} from './primitives'

/**
 * This module contains the parts of the FileUploadParts component.
 * @module 'fileUpload/parts'
 */

interface FileUploadPartsValue {
  /**
   * The container of the uploader.
   */
  Root: ElementType
  /**
   * The label of the uploader.
   */
  Label: ElementType
  /**
   * The dropzone of the uploader.
   */
  Dropzone: ElementType
  /**
   * The trigger of the uploader.
   */
  Trigger: ElementType
  /**
   * The clear trigger of the uploader.
   */
  ClearTrigger: ElementType
  /**
   * The item group of the uploader.
   */
  ItemGroup: ElementType
  /**
   * The item of the uploader.
   */
  Item: ElementType
  /**
   * The item preview of the uploader.
   */
  ItemPreview: ElementType
  /**
   * The item preview image of the uploader.
   */
  ItemPreviewImage: ElementType
  /**
   * The item name of the uploader.
   */
  ItemName: ElementType
  /**
   * The item size text of the uploader.
   */
  ItemSizeText: ElementType
  /**
   * The item delete trigger of the uploader.
   */
  ItemDeleteTrigger: ElementType
  /**
   * The hidden input of the uploader.
   */
  HiddenInput: ElementType
  /**
   * The context of the uploader.
   */
  Context: ElementType
  /**
   * The content container of the dropzone.
   */
  Content: ElementType
  /**
   * The icon of the uploader.
   */
  Icon: ElementType
  /**
   * The heading of the uploader.
   */
  Heading: ElementType
  /**
   * The description of the uploader.
   */
  Description: ElementType
}

/**
 * An Object containing the parts of the FileUploader component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the uploaderParts object and
 * the entire family of components vs. only what you use.
 */
export const FileUploadParts: FileUploadPartsValue = {
  Context: FileUploadContext,
  Root: FileUploadRoot,
  Label: FileUploadLabel,
  Dropzone: FileUploadDropzone,
  Trigger: FileUploadTrigger,
  ClearTrigger: FileUploadClearTrigger,
  ItemGroup: FileUploadItemGroup,
  Item: FileUploadItem,
  ItemPreview: FileUploadItemPreview,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemName: FileUploadItemName,
  ItemSizeText: FileUploadItemSizeText,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  HiddenInput: FileUploadHiddenInput,
  // custom cerby primitives
  Content: FileUploadContent,
  Icon: FileUploadIcon,
  Heading: FileUploadHeading,
  Description: FileUploadDescription,
}
