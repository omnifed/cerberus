import { HStack } from '@/styled-system/jsx'
import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const usages = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants.usage ??
  []) as IconButtonProps['usage'][]

export function UsageDemo() {
  return (
    <HStack w="3/4">
      <For each={usages}>
        {(usage) => (
          <IconButton ariaLabel="rounded example" usage={usage}>
            <Tuning />
          </IconButton>
        )}
      </For>
    </HStack>
  )
}
