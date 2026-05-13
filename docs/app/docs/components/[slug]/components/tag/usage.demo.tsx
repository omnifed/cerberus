import { HStack } from '@/styled-system/jsx'
import { Tag } from '@cerberus-design/react'

export function UsageDemo() {
  return (
    <HStack gap="md">
      <Tag usage="filled">Filled</Tag>
      <Tag usage="outlined">Outlined</Tag>
    </HStack>
  )
}
