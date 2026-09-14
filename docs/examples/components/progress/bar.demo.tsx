import { VStack } from '@/styled-system/jsx'
import { ProgressBar, Tag } from '@cerberus-design/react'

export function BarDemo() {
  return (
    <VStack gap="md" w="3/4">
      <ProgressBar
        id="basic-example"
        label="rounded progress example"
        size="sm"
        now={75}
      />
      <Tag shape="pill">Rounded</Tag>
    </VStack>
  )
}
