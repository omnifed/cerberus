import { FileUploadParts } from '@cerberus-design/react'

export function PreventDoubleOpenDemo() {
  return (
    <FileUploadParts.Dropzone disableClick>
      <FileUploadParts.Trigger>Choose Files</FileUploadParts.Trigger>
      Drag files here
    </FileUploadParts.Dropzone>
  )
}
