'use client'

import { PropsWithChildren } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { splitProps } from '../../utils'
import { Show } from '../show/index'
import { Avatar } from '../avatar/avatar'
import { formatFileTypes } from './utils'
import { ImgPreview } from './img-preview'
import { FileUploadParts } from './parts'
import { FileUploadRootProps } from './primitives'

export interface FileUploaderProps extends FileUploadRootProps {
  /**
   * The optional heading to display in the FileUploader component.
   */
  heading?: string
  /**
   * Show a preview of the uploaded image.
   */
  showPreview?: boolean
}

/**
 * A component that allows the user to upload files.
 * @see https://cerberus.digitalu.design/docs/components/file-uploader
 */
export function FileUploader(props: PropsWithChildren<FileUploaderProps>) {
  const [elProps, rootProps] = splitProps(props, ['heading', 'showPreview'])
  const { showPreview = true } = elProps

  const { icons } = useCerberusContext()
  const { waitingFileUploader: Icon } = icons

  return (
    <FileUploadParts.Root {...rootProps}>
      <FileUploadParts.Dropzone>
        <FileUploadParts.Icon>
          <Avatar gradient="charon-light" fallback={<Icon />} />
        </FileUploadParts.Icon>

        <FileUploadParts.Label>
          <Show when={elProps.heading}>
            <FileUploadParts.Heading>{elProps.heading}</FileUploadParts.Heading>
          </Show>
          Import {formatFileTypes(rootProps.accept)} files
          <FileUploadParts.Description>
            Drag and drop files or click to upload
          </FileUploadParts.Description>
        </FileUploadParts.Label>
      </FileUploadParts.Dropzone>

      <Show when={showPreview}>{() => <ImgPreview />}</Show>

      <FileUploadParts.HiddenInput />
    </FileUploadParts.Root>
  )
}
