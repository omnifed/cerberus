import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const palettes = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants
  .palette ?? []) as IconButtonProps['palette'][]

export function PaletteDemo() {
  return (
    <For each={palettes}>
      {(palette) => (
        <IconButton key={palette} ariaLabel="rounded example" palette={palette}>
          <Tuning />
        </IconButton>
      )}
    </For>
  )
}
