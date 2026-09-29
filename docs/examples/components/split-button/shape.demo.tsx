'use client'

import { Corn } from '@carbon/icons-react'
import { For, MenuItem, SplitButton, SplitButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'button')?.variants.shape ??
  []) as SplitButtonProps['shape'][]

export function ShapeDemo() {
  return (
    <For each={variants}>
      {(shape) => (
        <SplitButton key={shape} actionText={`${shape} Shape`} shape={shape}>
          <MenuItem value="corn">
            <Corn />
            Do your job
          </MenuItem>
        </SplitButton>
      )}
    </For>
  )
}
