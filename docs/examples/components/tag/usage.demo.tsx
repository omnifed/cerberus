import { HStack } from '@/styled-system/jsx'
import { For, Tag } from '@cerberus-design/react'
import { tagUsages } from './data'

export function UsageDemo() {
  return (
    <HStack gap="md">
      <For each={tagUsages}>
        {(usage) => (
          <Tag key={String(usage)} usage={usage}>
            {String(usage)}
          </Tag>
        )}
      </For>
    </HStack>
  )
}
