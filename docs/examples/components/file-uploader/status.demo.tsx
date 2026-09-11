'use client'

import {
  FileStatus,
  processStatus,
  type FileStatusActions,
} from '@cerberus-design/react'
import { type MouseEvent } from 'react'
import { vstack } from 'styled-system/patterns'

export function CardsDemo() {
  const handleClick = (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => {
    console.log(status, e)
  }

  return (
    <div
      className={vstack({
        maxW: '36rem',
        w: '3/4',
      })}
    >
      <FileStatus
        id="todo"
        file="file.txt"
        now={0}
        onClick={handleClick}
        status={processStatus.TODO}
      />
      <FileStatus
        id="processing"
        file="file.txt"
        now={50}
        onClick={handleClick}
        status={processStatus.PROCESSING}
      />
      <FileStatus
        id="done"
        file="file.txt"
        now={100}
        onClick={handleClick}
        status={processStatus.DONE}
      />
      <FileStatus
        id="error"
        file="file.txt"
        now={0}
        onClick={handleClick}
        status={processStatus.ERROR}
      />
    </div>
  )
}
