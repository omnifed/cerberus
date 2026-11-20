'use client'

import { FileUpload } from '@cerberus-design/react'

export function PreventDoubleOpenDemo() {
  return (
    <FileUpload.Root>
      <FileUpload.Dropzone disableClick>
        <FileUpload.Trigger>Choose Files</FileUpload.Trigger>
        Drag files here
      </FileUpload.Dropzone>
    </FileUpload.Root>
  )
}
