'use client'

import { Corn } from '@carbon/icons-react'
import { For, MenuItem, SplitButton, SplitButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'button')?.variants.usage ??
  []) as SplitButtonProps['usage'][]

export function UsageDemo() {
  return (
    <For each={variants}>
      {(usage) => (
        <SplitButton key={usage} actionText={`${usage}`} usage={usage} size="md">
          <MenuItem value="corn">
            <Corn />
            Do your job
          </MenuItem>
        </SplitButton>
      )}
    </For>
  )
}
