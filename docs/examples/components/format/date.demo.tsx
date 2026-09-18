'use client'

import { Stack } from '@/styled-system/jsx'
import { Format, Text } from '@cerberus-design/react'

export function DateDemo() {
  return (
    <Stack gap="sm">
      <Text>Boarding</Text>
      <Format.Time value={new Date(2026, 1, 27, 18, 45, 34)} />
    </Stack>
  )
}
