import { Stack } from '@/styled-system/jsx'
import { Admonition, type AdmonitionProps, For } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.admonition.variants.palette
  .values as AdmonitionProps['palette'][]

export function PaletteDemo() {
  return (
    <Stack w="3/4">
      <For each={variants}>
        {(palette) => (
          <Admonition key={palette} heading="Heading" palette={palette}>
            This is a {palette} admonition.
          </Admonition>
        )}
      </For>
    </Stack>
  )
}
