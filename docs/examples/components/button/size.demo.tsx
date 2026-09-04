import { Button, ButtonProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import recipesSpec from 'styled-system/specs/recipes.json'

const sizes = (recipesSpec.data.find((r) => r.name === 'button')?.variants.size ??
  []) as ButtonProps['size'][]

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
