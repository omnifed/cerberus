'use client'

import { DownloadTrigger } from '@cerberus-design/react'

export function PromiseDemo() {
  const fetchImage = async () => {
    const response = await fetch('https://picsum.photos/200/300')
    return response.blob()
  }

  return (
    <DownloadTrigger
      data={fetchImage}
      fileName="random-image.jpg"
      mimeType="image/jpeg"
    >
      Download Image
    </DownloadTrigger>
  )
}
