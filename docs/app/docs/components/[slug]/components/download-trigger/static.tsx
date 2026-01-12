import { Button, DownloadTrigger } from '@cerberus-design/react'

export const Basic = () => {
  return (
    <Button asChild>
      <DownloadTrigger
        data="Hello world"
        fileName="hello.txt"
        mimeType="text/plain"
      >
        Download txt
      </DownloadTrigger>
    </Button>
  )
}
