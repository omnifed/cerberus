import { Stack } from '@/styled-system/jsx'
import { Admonition, type AdmonitionProps, For } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'admonition')?.variants
  .usage ?? []) as AdmonitionProps['usage'][]

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
