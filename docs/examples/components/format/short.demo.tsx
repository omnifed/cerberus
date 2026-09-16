'use client'

import { Format } from '@cerberus-design/react'

export function ShortDemo() {
  return (
    <div>
      Edited <Format.RelativeTime value={new Date('2025-05-05')} style="short" />
    </div>
  )
}
