'use client'

import { Format } from '@cerberus-design/react'

export function CompactDemo() {
  return <Format.Number value={1500000} notation="compact" compactDisplay="short" />
}
