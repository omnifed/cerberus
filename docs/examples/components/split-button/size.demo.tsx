'use client'

import { sortSizeVariants } from '@/lib/design-system'
import { Corn } from '@carbon/icons-react'
import {
  For,
  Menu,
  SplitButton,
  SplitButtonProps,
} from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.iconButton.variants.size
  .values as SplitButtonProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizeDemo() {
  return (
    <For each={sortedSizes}>
      {(size) => (
        <SplitButton key={String(size)} actionText={`${size} Size`} size={size}>
          <Menu.Item value="corn">
            <Corn />
            Do your job
          </Menu.Item>
        </SplitButton>
      )}
    </For>
  )
}
