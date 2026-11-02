import { sortSizeVariants } from '@/lib/design-system'
import { Button, ButtonProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.size.values as ButtonProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizeDemo() {
  return (
    <HStack>
      <For each={sortedSizes}>
        {(size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        )}
      </For>
    </HStack>
  )
}
