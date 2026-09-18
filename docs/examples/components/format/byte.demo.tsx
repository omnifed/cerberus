'use client'

import { Format } from '@cerberus-design/react'

export function ByteDemo() {
  return (
    <div>
      File size: <Format.Byte value={1450.45} />
    </div>
  )
}
