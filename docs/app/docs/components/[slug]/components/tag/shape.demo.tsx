import { HStack } from '@/styled-system/jsx'
import { For, Tag } from '@cerberus-design/react'
import { tagShapes } from './data'

export function ShapeDemo() {
  return (
    <HStack gap="md">
      <For each={tagShapes}>
        {(shape) => (
          <Tag key={shape} shape={shape}>
            {shape}
          </Tag>
        )}
      </For>
    </HStack>
  )
}
