import { HStack } from '@/styled-system/jsx'
import { FileUploader } from '@cerberus-design/react'

export function BasicFileUploader() {
  return (
    <HStack justify="center" w="full">
      <FileUploader
        accept=".csv,.docx"
        heading="Upload Files"
        name="basic-example"
      />
    </HStack>
  )
}
