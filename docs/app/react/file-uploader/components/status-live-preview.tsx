'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { FileStatus, processStatus } from '@cerberus-design/react'

const file = 'file.txt'

const api = {
  status: builder.Enum('status', [
    processStatus.TODO,
    processStatus.PROCESSING,
    processStatus.DONE,
    processStatus.ERROR,
  ]),
}

export function FileStatusLivePlayground() {
  return (
    <CodeBuilder api={api}>
      <FileStatusPreview />
    </CodeBuilder>
  )
}

export function FileStatusLivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`'use client'

import {
  FileStatus,
  processStatus,
  type FileStatusProps,
} from '@cerberus/react'
import { useCallback, type MouseEvent } from 'react'

export function MyFileStatus(props: FileStatusProps) {
  const handleClick = useCallback((
    status: FileStatusActions,
    e: MouseEvent<HTMLButtonElement>
  ) => {
    switch (status) {
      case processStatus.TODO:
        console.log('TODO', e, 'call props.onClick')
        break
      case processStatus.PROCESSING:
        console.log('PROCESSING', e, 'call props.onClick')
        break
      case processStatus.DONE:
        console.log('DONE', e, 'call props.onClick')
        break
      case processStatus.ERROR:
        console.log('ERROR', e, 'call props.onClick')
        break
      default:
        throw new Error('Unknown status passed into handleClick')
    }
  }, [])

  return (
    <FileStatus
      id={props.id}
      file={props.file}
      now={props.now}
      onClick={handleClick}
      status={{status}}
    />
  )
}`}
    >
      <FileStatusPreview />
    </CodeBuilder>
  )
}

export function FileStatusPreview() {
  const { selectedProps } = useCodeBuilder()
  switch (selectedProps.status) {
    case processStatus.TODO:
      return (
        <FileStatus
          id="live-todo"
          file={file}
          now={0}
          onClick={() => {}}
          status={processStatus.TODO}
        />
      )
    case processStatus.PROCESSING:
      return (
        <FileStatus
          id="live-processing"
          file={file}
          now={50}
          onClick={() => {}}
          status={processStatus.PROCESSING}
        />
      )
    case processStatus.DONE:
      return (
        <FileStatus
          id="live-done"
          file={file}
          now={100}
          onClick={() => {}}
          status={processStatus.DONE}
        />
      )
    case processStatus.ERROR:
      return (
        <FileStatus
          id="live-error"
          file={file}
          now={0}
          onClick={() => {}}
          status={processStatus.ERROR}
        />
      )
    default:
      return (
        <FileStatus
          id="live-todo"
          file={file}
          now={100}
          onClick={() => {}}
          status={processStatus.TODO}
        />
      )
  }
}
