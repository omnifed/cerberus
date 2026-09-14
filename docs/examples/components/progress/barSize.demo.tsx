import { Stack, VStack } from '@/styled-system/jsx'
import { For, ProgressBar, ProgressBarProps, Tag } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'progressBar')?.variants
  .size ?? []) as ProgressBarProps['size'][]

export function BarSizeDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={variants}>
        {(size) => (
          <VStack key={`${size}-bar`} gap="md" w="3/4">
            <ProgressBar
              id={`${size}-bar`}
              label={`${size} size`}
              size={size}
              now={75}
            />
            <Tag shape="pill">Rounded</Tag>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
