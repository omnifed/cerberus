import { Stack, VStack } from '@/styled-system/jsx'
import { For, ProgressBar, ProgressBarProps, Tag } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.progressBar.variants.usage
  .values as ProgressBarProps['usage'][]

export function BarUsageDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={variants}>
        {(usage) => (
          <VStack key={`${usage}-bar`} gap="md" w="full">
            <ProgressBar
              id={`${usage}-bar`}
              label={`${usage} usage`}
              size="sm"
              usage={usage}
              now={75}
            />
            <Tag shape="pill" textTransform="initial">
              {String(usage)}
            </Tag>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
