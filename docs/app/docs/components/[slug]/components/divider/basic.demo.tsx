import { Text } from '@cerberus-design/react'
import { Divider, VStack } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <VStack w="3/4">
      <Text>First</Text>
      <Divider color="page.border.initial" />
      <Text>Second</Text>
      <Divider color="page.border.initial" />
      <Text>Third</Text>
    </VStack>
  )
}
