import { Button, type ButtonRootProps, For } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.usage
  .values as ButtonRootProps['usage'][]

export function UsageDemo() {
  return (
    <For each={variants}>
      {(usage) => (
        <Button key={usage} usage={usage}>
          {usage}
        </Button>
      )}
    </For>
  )
}
