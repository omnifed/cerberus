import { Bleed, Box, VStack } from 'styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { DecorativeBox } from '@/app/components/decorative-box'

export function BasicDemo() {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed inline="10">
        <DecorativeBox height="20">Bleed</DecorativeBox>
      </Bleed>

      <VStack mt="6">
        <Text as="h1" size="md">
          Some Heading
        </Text>
        <Text>This is some descriptive content of the heading.</Text>
      </VStack>
    </Box>
  )
}
