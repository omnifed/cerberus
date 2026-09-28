'use client'

import { Corn } from '@carbon/icons-react'
import { For, MenuItem, SplitButton, SplitButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const sizes = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants.size ??
  []) as SplitButtonProps['size'][]

export function SizeDemo() {
  return (
    <For each={sizes}>
      {(size) => (
        <SplitButton actionText={`${size} Size`} size={size}>
          <MenuItem value="corn">
            <Corn />
            Do your job
          </MenuItem>
        </SplitButton>
      )}
    </For>
  )
}
