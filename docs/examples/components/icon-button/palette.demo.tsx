import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const palettes = data.recipes.iconButton.variants.palette
  .values as IconButtonProps['palette'][]

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
