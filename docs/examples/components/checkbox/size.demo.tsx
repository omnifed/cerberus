'use client'

import { Box } from '@/styled-system/jsx'
import { Checkbox, CheckboxGroup } from '@cerberus-design/react'

export function SizeDemo() {
  return (
    <Box w="1/2">
      <CheckboxGroup name="size">
        <Checkbox ids={{ control: 'small' }} size="sm">
          Small
        </Checkbox>
        <Checkbox ids={{ control: 'medium' }} size="md">
          Medium
        </Checkbox>
      </CheckboxGroup>
    </Box>
  )
}
