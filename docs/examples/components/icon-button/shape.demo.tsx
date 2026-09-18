import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const shapes = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants.shape ??
  []) as IconButtonProps['shape'][]

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
