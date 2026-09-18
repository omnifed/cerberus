'use client'

import { Button, DownloadTrigger } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Button asChild>
      <DownloadTrigger data="Hello world" fileName="hello.txt" mimeType="text/plain">
        Download txt
      </DownloadTrigger>
    </Button>
  )
}
