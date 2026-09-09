import { Center, HStack } from 'styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { Phone } from '@carbon/icons-react'

export function IconDemo() {
  return (
    <HStack>
      <Center w="40px" h="40px" bg="tomato" color="white">
        <Phone />
      </Center>

      <Center w="40px" h="40px" bg="tomato" color="white">
        <Text as="span" fontWeight="bold" fontSize="lg">
          1
        </Text>
      </Center>
    </HStack>
  )
}
