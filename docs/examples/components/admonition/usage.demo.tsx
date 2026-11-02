import { Stack } from '@/styled-system/jsx'
import { Admonition, type AdmonitionProps, For } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.admonition.variants.usage
  .values as AdmonitionProps['usage'][]

export function UsageDemo() {
  return (
    <Stack w="3/4">
      <For each={variants}>
        {(usage) => (
          <Admonition key={usage} heading="Heading" usage={usage}>
            This is a {usage} admonition.
          </Admonition>
        )}
      </For>
    </Stack>
  )
}
