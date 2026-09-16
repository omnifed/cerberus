'use client'

import { Stack } from '@/styled-system/jsx'
import { Format } from '@cerberus-design/react'

export function SecondsDemo() {
  return (
    <Stack gap="sm">
      <span>Last sync</span>
      <Format.Time value="03:07:19" format="12h" withSeconds />
    </Stack>
  )
}
