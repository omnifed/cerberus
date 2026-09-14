'use client'

import { Stack } from '@/styled-system/jsx'
import { SelectVariantProps } from '@/styled-system/recipes'
import {
  createSelectCollection,
  Field,
  For,
  Option,
  Select,
} from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants =
  recipesSpec.data.find((r) => r.name === 'select')?.variants.size ??
  ([] as SelectVariantProps['size'][])

const collection = createSelectCollection([
  { label: 'Hades', value: 'hades' },
  { label: 'Persephone', value: 'persephone' },
  { label: 'Zeus', value: 'zeus', disabled: true },
  { label: 'Poseidon', value: 'poseidon' },
  { label: 'Hera', value: 'hera' },
])

export function SizeDemo() {
  return (
    <Stack gap="lg">
      <For each={variants}>
        {(size) => (
          <Field label="Select Relative" key={String(size)}>
            <Select collection={collection} placeholder="Choose option">
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
