import { Center } from 'styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { Phone } from '@carbon/icons-react'

export function InlineDemo() {
  return (
    <Center inline bg="page.bg.100" gap="sm" h="100px" maxW="320px" px="md">
      <Phone />
      <Text>This will be centered</Text>
    </Center>
  )
}
