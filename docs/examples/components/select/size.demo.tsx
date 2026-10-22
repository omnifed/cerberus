'use client'

import { sortSizeVariants } from '@/lib/design-system'
import { Stack } from '@/styled-system/jsx'
import { SelectVariantProps } from '@/styled-system/recipes'
import {
  createSelectCollection,
  Field,
  For,
  Option,
  Select,
} from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.select.variants.size
  .values as SelectVariantProps['size'][]
const sortedSizes = sortSizeVariants(variants)

const collection = createSelectCollection([
  { label: 'Hades', value: 'hades' },
  { label: 'Persephone', value: 'persephone' },
  { label: 'Zeus', value: 'zeus', disabled: true },
  { label: 'Poseidon', value: 'poseidon' },
  { label: 'Hera', value: 'hera' },
])

export function SizeDemo() {
  return (
    <Stack gap="lg" w="3/4">
      <For each={sortedSizes}>
        {(size) => (
          <Field label={`${size} Size`} key={String(size)}>
            <Select collection={collection} placeholder="Choose option" size={size}>
              <For each={collection.items}>
                {(item) => <Option key={item.value} item={item} />}
              </For>
            </Select>
          </Field>
        )}
      </For>
    </Stack>
  )
}
