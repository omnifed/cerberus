import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const usages = (recipesSpec.data.find((r) => r.name === 'iconButton')?.variants.usage ??
  []) as IconButtonProps['usage'][]

export function UsageDemo() {
  return (
    <For each={usages}>
      {(usage) => (
        <IconButton key={usage} ariaLabel="rounded example" usage={usage}>
          <Tuning />
        </IconButton>
      )}
    </For>
  )
}
