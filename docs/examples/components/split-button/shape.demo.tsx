'use client'

import { Corn } from '@carbon/icons-react'
import {
  For,
  Menu,
  SplitButton,
  SplitButtonProps,
} from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.shape
  .values as SplitButtonProps['shape'][]

export function ShapeDemo() {
  return (
    <For each={variants}>
      {(shape) => (
        <SplitButton key={shape} actionText={`${shape} Shape`} shape={shape}>
          <Menu.Item value="corn">
            <Corn />
            Do your job
          </Menu.Item>
        </SplitButton>
      )}
    </For>
  )
}
