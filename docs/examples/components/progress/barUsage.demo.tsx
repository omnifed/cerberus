import { Stack, VStack } from '@/styled-system/jsx'
import { For, ProgressBar, ProgressBarProps, Tag } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'progressBar')?.variants
  .usage ?? []) as ProgressBarProps['usage'][]

export function BarUsageDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={variants}>
        {(usage) => (
          <VStack key={`${usage}-bar`} gap="md" w="3/4">
            <ProgressBar
              id={`${usage}-bar`}
              label={`${usage} usage`}
              size="sm"
              usage={usage}
              now={75}
            />
            <Tag shape="pill">Rounded</Tag>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
