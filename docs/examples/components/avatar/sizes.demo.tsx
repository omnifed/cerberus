import { Avatar, AvatarProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'avatar')?.variants.size ??
  []) as AvatarProps['size'][]

export function SizesDemo() {
  return (
    <HStack justify="center" w="3/4">
      <For each={variants}>
        {(size) => (
          <Avatar
            key={String(size)}
            bgColor="page.bg.200"
            fallback={String(size)}
            size={size}
          />
        )}
      </For>
    </HStack>
  )
}
