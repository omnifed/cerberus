import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps, Tooltip } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const palettes = data.recipes.iconButton.variants.palette
  .values as IconButtonProps['palette'][]

export function PaletteDemo() {
  return (
    <For each={palettes}>
      {(palette) => (
        <Tooltip key={palette} content={palette} asChild>
          <IconButton ariaLabel={`${palette} Palette`} palette={palette}>
            <Tuning />
          </IconButton>
        </Tooltip>
      )}
    </For>
  )
}
