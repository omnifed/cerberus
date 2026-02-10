import { Button } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function UsageDemo() {
  return (
    <HStack>
      <Button usage="filled">Filled</Button>
      <Button usage="outlined">Outlined</Button>
      <Button usage="ghost">Ghost</Button>
    </HStack>
  )
}
