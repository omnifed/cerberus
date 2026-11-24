'use client'

import { Box } from '@/styled-system/jsx'
import { Switch } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <Switch.Root>
        <Switch.Label textTransform="uppercase">
          Receive in app notifications
        </Switch.Label>
        <Switch.Control
          rounded="sm"
          transform="skewX(-10deg)"
          _checked={{
            bgColor: 'danger.surface.initial',
          }}
        >
          <Switch.Thumb rounded="sm" />
        </Switch.Control>

        <Switch.HiddenInput />
      </Switch.Root>
    </Box>
  )
}
