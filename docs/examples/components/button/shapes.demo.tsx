import { Button } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function ShapesDemo() {
  return (
    <HStack>
      <Button shape="default">Default</Button>
      <Button shape="sharp">Sharp</Button>
      <Button shape="rounded">Rounded</Button>
    </HStack>
  )
}
