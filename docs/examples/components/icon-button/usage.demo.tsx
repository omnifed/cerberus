import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const usages = data.recipes.iconButton.variants.usage
  .values as IconButtonProps['usage'][]

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
