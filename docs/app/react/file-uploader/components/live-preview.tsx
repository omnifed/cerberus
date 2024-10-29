'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { FileUploader } from '@cerberus-design/react'

const api = {
  heading: builder.Text('heading', 'Upload your files'),
  name: builder.Text('name', 'add_uuid'),
  accept: builder.Text('accept', '.txt'),
  disabled: builder.Boolean('disabled', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <FileUploadPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { FileUploader, type FileUploaderProps } from '@cerberus/react'

export function MyFileUploader(props: FileUploaderProps) {
  return (
    <FileUploader
      disabled={{disabled}}
      accept={{accept}}
      heading={{heading}}
      name={{name}}
    />
  )
}`}
    >
      <FileUploadPreview />
    </CodeBuilder>
  )
}

export function FileUploadPreview() {
  const { selectedProps } = useCodeBuilder()
  return (
    <FileUploader
      disabled={selectedProps.disabled as boolean}
      accept={selectedProps.accept as string}
      heading={selectedProps.heading as string}
      name={selectedProps.file as string}
    />
  )
}
