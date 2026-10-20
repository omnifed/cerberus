import { sortSizeVariants } from '@/lib/design-system'
import { type InputVariantProps } from '@/styled-system/recipes'
import { Field, For, Input } from '@cerberus-design/react'
import { Stack } from 'styled-system/jsx'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.input.variants.size
  .values as InputVariantProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizeDemo() {
  return (
    <Stack gap="md" w="1/2">
      <For each={sortedSizes}>
        {(size) => (
          <Field key={String(size)} label={`${size} Size`}>
            <Input size={size} />
          </Field>
        )}
      </For>
    </Stack>
  )
}
