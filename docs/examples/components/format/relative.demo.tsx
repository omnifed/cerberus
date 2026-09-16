'use client'

import { Format } from '@cerberus-design/react'

export function RelativeDemo() {
  return (
    <div>
      Edited <Format.RelativeTime value={new Date('2025-05-05')} />
    </div>
  )
}
