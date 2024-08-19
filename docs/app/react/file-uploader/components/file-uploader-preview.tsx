import { FileUploader } from '@cerberus-design/react'

export function BasicFileUploader() {
  return (
    <FileUploader
      accept=".csv,.docx"
      heading="Upload Files"
      name="basic-example"
    />
  )
}
