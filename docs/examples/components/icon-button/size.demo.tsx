import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const sizes = data.recipes.iconButton.variants.size.values as IconButtonProps['size'][]

export function SizeDemo() {
  return (
    <For each={sizes}>
      {(size) => (
        <IconButton key={size} ariaLabel="rounded example" size={size} usage="filled">
          <Tuning />
        </IconButton>
      )}
    </For>
  )
}
