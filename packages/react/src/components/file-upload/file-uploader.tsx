'use client'

import { PropsWithChildren, type InputHTMLAttributes } from 'react'
import { Show } from '../show/index'
import { useCerberusContext } from '../../context/cerberus'
import { Avatar } from '../avatar/avatar'
import { ImgPreview } from './img-preview'
import { FileUploadParts } from './parts'

export interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The optional heading to display in the FileUploader component.
   */
  heading?: string
  /**
   * The name of the file input element.
   */
  name: string
  /**
   * Disable the FileUploader component. Good for single-use file uploads.
   */
  disabled?: boolean
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
  const { showPreview = true } = props

  const { icons } = useCerberusContext()
  const { waitingFileUploader: Icon } = icons

  return (
    <FileUploadParts.Root>
      <FileUploadParts.Dropzone>
        <FileUploadParts.Icon>
          <Avatar gradient="charon-light" fallback={<Icon />} />
        </FileUploadParts.Icon>

        <FileUploadParts.Label>
          <Show when={props.heading}>
            <FileUploadParts.Heading>{props.heading}</FileUploadParts.Heading>
          </Show>
          Import {props.accept?.replace(',', ', ')} files
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
