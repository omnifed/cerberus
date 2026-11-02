import { Button, ButtonProps, For } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const palettes = data.recipes.iconButton.variants.palette
  .values as ButtonProps['palette'][]

export function PaletteDemo() {
  return (
    <For each={palettes}>
      {(palette) => (
        <Button key={palette} palette={palette}>
          {palette}
        </Button>
      )}
    </For>
  )
}
