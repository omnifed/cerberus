import { sortSizeVariants } from '@/lib/design-system'
import { Tuning } from '@carbon/icons-react'
import { For, IconButton, IconButtonProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.iconButton.variants.size
  .values as IconButtonProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizeDemo() {
  return (
    <For each={sortedSizes}>
      {(size) => (
        <IconButton key={size} ariaLabel="rounded example" size={size} usage="filled">
          <Tuning />
        </IconButton>
      )}
    </For>
  )
}
