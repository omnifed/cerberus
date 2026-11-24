'use client'

import type { ReactNode } from 'react'
import { fileUploader } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { Avatar } from '../avatar/api'
import { FileUploadItemGroupWithPreview } from './item-group-with-preview'
import {
  FileUploadClearTrigger,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadHeading,
  FileUploadHiddenInput,
  FileUploadIcon,
  FileUploadLabel,
  FileUploadRoot,
  type FileUploadRootProps,
} from './primitives'
import { formatFileTypes, getNodeText } from './utils'

/**
 * This module contains the default FileUpload abstraction.
 * @module 'react/file-upload'
 */

const PARTS = {
  label: FileUploadLabel,
  dropzone: FileUploadDropzone,
  icon: FileUploadIcon,
  heading: FileUploadHeading,
  description: FileUploadDescription,
  clearTrigger: FileUploadClearTrigger,
  hiddenInput: FileUploadHiddenInput,
}

export type FileUploadProps = FileUploadRootProps & {
  /**
   * The optional heading to display in the dropzone.
   */
  heading?: ReactNode
  /**
   * Show the accepted files with a preview of their images.
   * @default true
   */
  showPreview?: boolean
}

/**
 * The FileUpload component is an abstraction of the root that renders the
 * dropzone with the Cerberus `waitingFileUploader` icon, the `heading` (when
 * given), an "Import <types> files" text built from `accept` and a
 * description, then the accepted files with their previews (a
 * `FileUpload.ItemGroupWithPreview`, unless `showPreview` is `false`), its
 * non-part children, and the hidden input. Direct `FileUpload.Dropzone`,
 * `FileUpload.Icon`, `FileUpload.Heading`, `FileUpload.Description` and
 * `FileUpload.HiddenInput` children override that part; a part child with
 * children replaces its default content. `FileUpload.Label` and
 * `FileUpload.ClearTrigger` children render only when given (the label before
 * the dropzone, the clear trigger after the files). The dropzone's accessible
 * name defaults to its visible text (`translations.dropzone`, which a
 * `translations` prop overrides).
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/file-uploader)
 * @description [Ark Docs](https://ark-ui.com/docs/components/file-upload)
 * @example
 * ```tsx
 * <FileUpload accept="image/*" heading="Upload Files" name="avatar" />
 * ```
 */
export function FileUploadEl(props: FileUploadProps) {
  const {
    heading,
    showPreview = true,
    translations,
    children,
    ...rootProps
  } = props
  const { icons } = useCerberusContext()
  const { waitingFileUploader: Icon } = icons

  const { parts, content } = extractParts(children, PARTS)

  const { children: dropzoneChildren, ...dropzoneOverrideProps } =
    parts.dropzone ?? {}
  const { children: iconChildren, ...iconOverrideProps } = parts.icon ?? {}
  const { children: headingChildren, ...headingOverrideProps } =
    parts.heading ?? {}
  const { children: descriptionChildren, ...descriptionOverrideProps } =
    parts.description ?? {}

  const headingContent = headingChildren ?? heading
  const importText = `Import ${formatFileTypes(rootProps.accept)} files`
  const descriptionContent =
    descriptionChildren ?? 'Drag and drop files or click to upload'

  // Zag labels the dropzone with `translations.dropzone` ("dropzone" by
  // default), which overrides its visible text as the accessible name. Default
  // it to the same text the dropzone shows, keeping any user translations.
  const dropzoneLabel =
    getNodeText(
      dropzoneChildren ?? [
        headingContent,
        ' ',
        importText,
        ' ',
        descriptionContent,
      ],
    ) || undefined
  const rootTranslations = {
    ...translations,
    dropzone: translations?.dropzone ?? dropzoneLabel,
  }

  return (
    <FileUploadRoot {...rootProps} translations={rootTranslations}>
      {parts.label && <FileUploadLabel {...parts.label} />}

      <FileUploadDropzone {...dropzoneOverrideProps}>
        {dropzoneChildren ?? (
          <>
            <FileUploadIcon {...iconOverrideProps}>
              {iconChildren ?? (
                <Avatar gradient="charon-light" fallback={<Icon />} />
              )}
            </FileUploadIcon>

            {/* v1's `FileUploadContent`: a text group with the label styles */}
            <div className={fileUploader().label}>
              {headingContent != null && (
                <FileUploadHeading {...headingOverrideProps}>
                  {headingContent}
                </FileUploadHeading>
              )}
              {importText}
              <FileUploadDescription {...descriptionOverrideProps}>
                {descriptionContent}
              </FileUploadDescription>
            </div>
          </>
        )}
      </FileUploadDropzone>

      {showPreview && <FileUploadItemGroupWithPreview />}

      {content}

      {parts.clearTrigger && <FileUploadClearTrigger {...parts.clearTrigger} />}

      <FileUploadHiddenInput {...parts.hiddenInput} />
    </FileUploadRoot>
  )
}

/**
 * The props of `FileUploader`, an alias of `FileUploadProps`.
 */
export type FileUploaderProps = FileUploadProps

/**
 * A component that allows the user to upload files; an alias of the default
 * `<FileUpload>`.
 * @see {@link FileUploadEl}
 * @example
 * ```tsx
 * import { FileUploader } from '@cerberus/react'
 *
 * <FileUploader accept=".csv,.docx" heading="Upload Files" name="files" />
 * ```
 */
export const FileUploader = FileUploadEl
