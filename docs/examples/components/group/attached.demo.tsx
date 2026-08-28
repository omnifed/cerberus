import { VStack } from 'styled-system/jsx'
import { Button, Group, Tag } from '@cerberus-design/react'

export function AttachedDemo() {
  return (
    <VStack gap="md" w="3/4">
      <Group layout="attached">
        <Button usage="outlined">Item 1</Button>
        <Button usage="outlined">Item 2</Button>
      </Group>

      <Group layout="attached">
        <Tag usage="filled">Commit status</Tag>
        <Tag usage="filled" palette="success">
          90+
        </Tag>
      </Group>
    </VStack>
  )
}
