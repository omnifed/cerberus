'use client'

import { Select, Option, createSelectCollection } from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'

export function SelectBasicPreview() {
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
    { label: 'Poseidon', value: 'poseidon' },
    { label: 'Hera', value: 'hera' },
  ])

  return (
    <Box w="1/2">
      <Select
        collection={collection}
        label="Select Relative"
        placeholder="Choose option"
      >
        {collection.items.map((item) => (
          <Option key={item.value} item={item} />
        ))}
      </Select>
    </Box>
  )
}
