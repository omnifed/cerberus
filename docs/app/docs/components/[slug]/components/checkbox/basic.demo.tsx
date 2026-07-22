'use client'

import { Box } from '@/styled-system/jsx'
import { Checkbox, CheckboxGroup, For } from '@cerberus-design/react'
import { checkbox } from '@cerberus/panda-preset/src/recipes/slots/checkbox'

const items = [
  {
    id: 'terms',
    label: 'I agree to the terms and conditions',
    required: true,
  },
  {
    id: 'legal',
    label: 'I would like to receive marketing emails',
  },
  {
    id: 'disabled',
    label: 'This is a disabled checkbox',
    disabled: true,
    checked: true,
  },
]

export function BasicDemo() {
  return (
    <Box w="1/2">
      <CheckboxGroup name="user_acceptance">
        <For each={items}>
          {(item) => (
            <Checkbox
              key={item.id}
              disabled={item?.disabled}
              ids={{ control: item.id }}
              required={item?.required}
              checked={item?.checked}
            >
              {item.label}
            </Checkbox>
          )}
        </For>

        <Checkbox ids={{ control: 'mixed' }} checked="indeterminate">
          The indeterminate state
        </Checkbox>
      </CheckboxGroup>
    </Box>
  )
}
