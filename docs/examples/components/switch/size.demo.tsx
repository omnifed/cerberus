import { sortSizeVariants } from '@/lib/design-system'
import { VStack } from '@/styled-system/jsx'
import { For, Switch, SwitchRootProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.switchRecipe.variants.size
  .values as SwitchRootProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizesDemo() {
  return (
    <VStack alignItems="flex-start" gap="lg" w="3/4">
      <For each={sortedSizes}>
        {(size) => (
          <Switch key={String(size)} size={size}>
            {String(size)} size
          </Switch>
        )}
      </For>
    </VStack>
  )
}
