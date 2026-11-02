'use client'

import { Corn } from '@carbon/icons-react'
import { For, MenuItem, SplitButton, SplitButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.usage
  .values as SplitButtonProps['usage'][]

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
