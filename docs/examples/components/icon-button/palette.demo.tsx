import { HStack } from '@/styled-system/jsx'
import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const palettes = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants
  .palette ?? []) as IconButtonProps['palette'][]

export function PaletteDemo() {
  return (
    <HStack w="3/4">
      <For each={palettes}>
        {(palette) => (
          <IconButton ariaLabel="rounded example" palette={palette}>
            <Tuning />
          </IconButton>
        )}
      </For>
    </HStack>
  )
}
