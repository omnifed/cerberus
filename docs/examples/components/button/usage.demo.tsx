import { Button, ButtonProps, For } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.usage.values as ButtonProps['usage'][]

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
