'use client'

import { Box } from '@/styled-system/jsx'
import {
  createSelectCollection,
  Field,
  For,
  Select,
} from '@cerberus-design/react'

const collection = createSelectCollection([
  { label: 'Hades', value: '1-hades' },
  { label: 'Persephone', value: '1-persephone' },
  { label: 'Zeus', value: '1-zeus', disabled: true },
  { label: 'Poseidon', value: '1-poseidon' },
  { label: 'Hera', value: '1-hera' },
])

export function GroupedDemo() {
  return (
    <Box w="1/2">
      <Field label="Select Relative">
        <Select collection={collection} placeholder="Choose option">
          <Select.ItemGroupWithLabel label="The fam">
            <For each={collection.items}>
              {(item) => (
                <Select.ItemWithIndicator key={item.value} item={item} />
              )}
            </For>
          </Select.ItemGroupWithLabel>
        </Select>
      </Field>
    </Box>
  )
}
