import { VStack } from '@/styled-system/jsx'
import { For, Switch, SwitchRootProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'switch')?.variants.size ??
  []) as SwitchRootProps['size'][]

export function SizesDemo() {
  return (
    <VStack alignItems="flex-start" gap="lg" w="3/4">
      <For each={variants}>
        {(size) => (
          <Switch key={String(size)} size={size}>
            {String(size)} size
          </Switch>
        )}
      </For>
    </VStack>
  )
}
