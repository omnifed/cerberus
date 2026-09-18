import { Stack, VStack } from '@/styled-system/jsx'
import { ProgressBar, Tag } from '@cerberus-design/react'

export function BarStateDemo() {
  return (
    <Stack gap="md" w="3/4">
      <VStack gap="md" w="full">
        <ProgressBar
          id="determinate-bar"
          label="Determinate state"
          size="sm"
          now={75}
        />
        <Tag shape="pill">Determinate</Tag>
      </VStack>

      <VStack gap="md" w="full">
        <ProgressBar
          id="indeterminate-bar"
          label="Indeterminate state"
          size="sm"
          indeterminate
        />
        <Tag shape="pill">Indeterminate</Tag>
      </VStack>
    </Stack>
  )
}
