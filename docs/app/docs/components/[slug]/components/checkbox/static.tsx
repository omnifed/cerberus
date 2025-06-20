'use client'

import {
  Checkbox,
  CheckboxGroup,
  For,
  CheckboxParts,
} from '@cerberus-design/react'
import { ArrowDownRight } from '@carbon/icons-react'
import { Box } from 'styled-system/jsx'

export function OverviewPreview() {
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
  ]

  return (
    <Box w="1/2">
      <CheckboxGroup name="user_acceptance">
        <For each={items}>
          {(item) => (
            <Checkbox
              key={item.id}
              ids={{ control: item.id }}
              required={Boolean(item.required)}
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

export function CustomCheckbox() {
  return (
    <Box w="1/2">
      <CheckboxParts.Root>
        <CheckboxParts.Label>Custom Checkbox</CheckboxParts.Label>
        <CheckboxParts.Control
          css={{
            bgColor: 'black',
            border: '4px solid',
            borderColor: 'danger.border.initial',
            h: 8,
            rounded: 'none',
            transform: 'skewX(-10deg)',
            w: 8,
            _checked: {
              bgColor: 'info.bg.initial',
            },
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
