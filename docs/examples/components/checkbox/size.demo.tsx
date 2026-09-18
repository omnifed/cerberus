'use client'

import { Box } from '@/styled-system/jsx'
import { Checkbox, CheckboxGroup, CheckboxProps, For } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'checkbox')?.variants.size ??
  []) as CheckboxProps['size'][]

export function SizeDemo() {
  return (
    <Box w="1/2">
      <CheckboxGroup name="size">
        <For each={variants}>
          {(size) => (
            <Checkbox key={String(size)} size={size}>
              {String(size)}
            </Checkbox>
          )}
        </For>
      </CheckboxGroup>
    </Box>
  )
}
