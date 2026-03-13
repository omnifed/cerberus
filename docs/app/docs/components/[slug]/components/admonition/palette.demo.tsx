import { Stack } from '@/styled-system/jsx'
import { Admonition, type AdmonitionProps, For } from '@cerberus-design/react'

export function PaletteDemo() {
  const palettes: AdmonitionProps['palette'][] = ['page', 'info', 'success', 'warning', 'danger']

  return (
    <Stack w="3/4">
      <For each={palettes}>
        {(palette) => (
          <Admonition key={palette} heading="Heading" palette={palette}>
            This is a {palette} admonition.
          </Admonition>
        )}
      </For>
    </Stack>
  )
}
