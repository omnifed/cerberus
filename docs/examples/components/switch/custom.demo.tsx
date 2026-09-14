'use client'

import { Box } from '@/styled-system/jsx'
import { SwitchParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <SwitchParts.Root>
        <SwitchParts.Label textTransform="uppercase">
          Receive in app notifications
        </SwitchParts.Label>
        <SwitchParts.Control
          rounded="sm"
          transform="skewX(-10deg)"
          _checked={{
            bgColor: 'danger.surface.initial',
          }}
        >
          <SwitchParts.Thumb rounded="sm" />
        </SwitchParts.Control>

        <SwitchParts.HiddenInput />
      </SwitchParts.Root>
    </Box>
  )
}
