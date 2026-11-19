'use client'

import { Corn } from '@carbon/icons-react'
import {
  For,
  Menu,
  SplitButton,
  SplitButtonProps,
} from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.usage
  .values as SplitButtonProps['usage'][]

export function UsageDemo() {
  return (
    <For each={variants}>
      {(usage) => (
        <SplitButton
          key={usage}
          actionText={`${usage}`}
          usage={usage}
          size="md"
        >
          <Menu.Item value="corn">
            <Corn />
            Do your job
          </Menu.Item>
        </SplitButton>
      )}
    </For>
  )
}
