import { Button } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function SizeDemo() {
  return (
    <HStack>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </HStack>
  )
}
