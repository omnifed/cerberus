import { Button, type ButtonRootProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.size
  .values as ButtonRootProps['size'][]

export function SizeDemo() {
  return (
    <HStack>
      <For each={variants}>
        {(size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        )}
      </For>
    </HStack>
  )
}
