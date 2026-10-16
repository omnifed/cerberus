import { Button, ButtonProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import data from 'styled-system/specs/design-system.json'

const sizes = data.recipes.button.variants.size.values as ButtonProps['size'][]

export function SizeDemo() {
  return (
    <HStack>
      <For each={sizes}>
        {(size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        )}
      </For>
    </HStack>
  )
}
