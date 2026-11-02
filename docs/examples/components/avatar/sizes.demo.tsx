import { sortSizeVariants } from '@/lib/design-system'
import { type AvatarVariantProps } from '@/styled-system/recipes'
import { Avatar, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import data from 'styled-system/specs/design-system.json'

type AvatarSize = AvatarVariantProps['size']

const variants = data.slotRecipes.avatar.variants.size.values as AvatarSize[]
const sortedSizes = sortSizeVariants(variants)

export function SizesDemo() {
  return (
    <HStack justify="center" w="3/4">
      <For each={sortedSizes}>
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
