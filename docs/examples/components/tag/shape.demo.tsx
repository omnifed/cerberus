import { HStack } from '@/styled-system/jsx'
import { For, Tag } from '@cerberus-design/react'
import { tagShapes } from './data'

export function ShapeDemo() {
  return (
    <HStack gap="md">
      <For each={tagShapes}>
        {(shape) => (
          <Tag key={String(shape)} shape={shape}>
            {String(shape)}
          </Tag>
        )}
      </For>
    </HStack>
  )
}
