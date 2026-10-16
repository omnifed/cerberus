'use client'

import { Corn } from '@carbon/icons-react'
import { For, MenuItem, SplitButton, SplitButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const sizes = data.recipes.iconButton.variants.size.values as SplitButtonProps['size'][]

export function SizeDemo() {
  return (
    <For each={sizes}>
      {(size) => (
        <SplitButton key={String(size)} actionText={`${size} Size`} size={size}>
          <MenuItem value="corn">
            <Corn />
            Do your job
          </MenuItem>
        </SplitButton>
      )}
    </For>
  )
}
