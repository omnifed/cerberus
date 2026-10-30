import { sortSizeVariants } from '@/lib/design-system'
import { Stack, VStack } from '@/styled-system/jsx'
import { For, ProgressBar, ProgressBarProps, Tag } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.progressBar.variants.size
  .values as ProgressBarProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function BarSizeDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={sortedSizes}>
        {(size, idx) => (
          <VStack key={`${size}-bar`} gap="md" w="full">
            <ProgressBar
              id={`${size}-bar`}
              label={`${size} size`}
              size={size}
              now={33 * (idx + 1) + 1}
            />
            <Tag shape="pill" textTransform="initial">
              {String(size)}
            </Tag>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
