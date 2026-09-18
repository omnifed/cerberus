import { HStack } from '@/styled-system/jsx'
import { Information } from '@carbon/icons-react'
import { Tag } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <HStack gap="md">
      <Tag>Filled</Tag>
      <Tag>
        <Information />
        Start icon
      </Tag>
      <Tag>
        End icon
        <Information />
      </Tag>
    </HStack>
  )
}
