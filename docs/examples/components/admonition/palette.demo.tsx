import { Stack } from '@/styled-system/jsx'
import { Admonition, type AdmonitionProps, For } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'admonition')?.variants
  .palette ?? []) as AdmonitionProps['palette'][]

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
