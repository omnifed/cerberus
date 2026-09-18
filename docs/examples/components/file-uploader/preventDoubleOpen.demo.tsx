'use client'

import { FileUploadParts } from '@cerberus-design/react'

export function PreventDoubleOpenDemo() {
  return (
    <FileUploadParts.Root>
      <FileUploadParts.Dropzone disableClick>
        <FileUploadParts.Trigger>Choose Files</FileUploadParts.Trigger>
        Drag files here
      </FileUploadParts.Dropzone>
    </FileUploadParts.Root>
  )
}
