'use client'

import { Stack } from '@/styled-system/jsx'
import { Format } from '@cerberus-design/react'

export function TimeLabelDemo() {
  return (
    <Stack gap="sm">
      <span>Support window</span>
      <Format.Time value="17:15:00" format="12h" amLabel="morning" pmLabel="evening" />
    </Stack>
  )
}
