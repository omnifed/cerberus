import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const shapes = data.recipes.iconButton.variants.shape
  .values as IconButtonProps['shape'][]

export function ShapeDemo() {
  return (
    <For each={shapes}>
      {(shape) => (
        <IconButton key={shape} ariaLabel="rounded example" shape={shape}>
          <Tuning />
        </IconButton>
      )}
    </For>
  )
}
