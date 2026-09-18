'use client'

import { Box } from '@/styled-system/jsx'
import { ArrowDownRight } from '@carbon/icons-react'
import { CheckboxParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <CheckboxParts.Root>
        <CheckboxParts.Label>Custom Checkbox</CheckboxParts.Label>
        <CheckboxParts.Control
          bgColor="black"
          border="4px solid"
          borderColor="danger.border.initial"
          h={8}
          rounded="none"
          transform="skewX(-10deg)"
          w={8}
          _checked={{
            bgColor: 'info.bg.initial',
          }}
        >
          <CheckboxParts.Indicator>
            <ArrowDownRight />
          </CheckboxParts.Indicator>
        </CheckboxParts.Control>
        <CheckboxParts.HiddenInput />
      </CheckboxParts.Root>
    </Box>
  )
}
