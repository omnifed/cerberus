'use client'

import {
  FileUploader,
  FileStatus,
  type FileStatusActions,
  processStatus,
} from '@cerberus-design/react'
import { vstack } from '@cerberus/styled-system/patterns'
import { useCallback, type MouseEvent } from 'react'

export function UploadingCardsPreview() {
  const handleClick = useCallback(
    (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) =>
      console.log(status, e),
    [],
  )

  return (
    <div
      className={vstack({
        maxW: '36rem',
        w: '3/4',
      })}
    >
      <FileUploader
        accept=".csv,.docx"
        heading="Upload Files"
        name="basic-example"
      />
      <div
        className={vstack({
          w: 'full',
        })}
      >
        <FileStatus
          file="file.txt"
          now={0}
          onClick={handleClick}
          status={processStatus.TODO}
        />
        <FileStatus
          file="file.txt"
          now={50}
          onClick={handleClick}
          status={processStatus.PROCESSING}
        />
        <FileStatus
          file="file.txt"
          now={100}
          onClick={handleClick}
          status={processStatus.DONE}
        />
        <FileStatus
          file="file.txt"
          now={0}
          onClick={handleClick}
          status={processStatus.ERROR}
        />
      </div>
    </div>
  )
}
