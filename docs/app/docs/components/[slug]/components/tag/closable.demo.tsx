'use client'

import { HStack } from '@/styled-system/jsx'
import { Tag } from '@cerberus-design/react'

export function ClosableDemo() {
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <HStack gap="md">
      <Tag onClick={handleClick}>Closable</Tag>

      <Tag palette="info" onClick={handleClick}>
        Closable
      </Tag>

      <Tag palette="danger" onClick={handleClick}>
        Closable
      </Tag>
    </HStack>
  )
}
