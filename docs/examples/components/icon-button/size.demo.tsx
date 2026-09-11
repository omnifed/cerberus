import { HStack } from '@/styled-system/jsx'
import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const sizes = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants.size ??
  []) as IconButtonProps['size'][]

export function SizeDemo() {
  return (
    <HStack w="3/4">
      <For each={sizes}>
        {(size) => (
          <IconButton ariaLabel="rounded example" size={size}>
            <Tuning />
          </IconButton>
        )}
      </For>
    </HStack>
  )
}
