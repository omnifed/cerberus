import { Button, ButtonProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'button')?.variants.usage ??
  []) as ButtonProps['usage'][]

export function UsageDemo() {
  return (
    <HStack gap="md">
      <For each={variants}>
        {(usage) => (
          <Button key={usage} usage={usage}>
            {usage}
          </Button>
        )}
      </For>
    </HStack>
  )
}
