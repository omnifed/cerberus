'use client'

import { Box } from '@/styled-system/jsx'
import {
  createSelectCollection,
  Field,
  For,
  Option,
  Select,
} from '@cerberus-design/react'

const collection = createSelectCollection([
  { label: 'Hades', value: 'hades' },
  { label: 'Persephone', value: 'persephone' },
  { label: 'Zeus', value: 'zeus', disabled: true },
  { label: 'Poseidon', value: 'poseidon' },
  { label: 'Hera', value: 'hera' },
])

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Field label="Select Relative">
        <Select collection={collection} placeholder="Choose option">
          <For each={collection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>
    </Box>
  )
}
