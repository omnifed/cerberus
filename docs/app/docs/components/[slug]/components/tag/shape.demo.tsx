import { HStack } from '@/styled-system/jsx'
import { Tag } from '@cerberus-design/react'

export function ShapeDemo() {
  return (
    <HStack gap="md">
      <Tag shape="pill">Pill</Tag>
      <Tag shape="square">Square</Tag>
    </HStack>
  )
}
