'use client'

import { Box } from '@/styled-system/jsx'
import { ArrowDownRight } from '@carbon/icons-react'
import { Checkbox } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <Checkbox.Root>
        <Checkbox.Label>Custom Checkbox</Checkbox.Label>
        <Checkbox.Control
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
          <Checkbox.Indicator>
            <ArrowDownRight />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </Box>
  )
}
