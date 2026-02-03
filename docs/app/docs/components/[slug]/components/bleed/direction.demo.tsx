import { DecorativeBox } from '@/app/components/decorative-box'
import { Bleed, Box, VStack } from 'styled-system/jsx'

export function DirectionDemo() {
  return (
    <VStack gap="8">
      <Box padding="8" rounded="sm" borderWidth="1px">
        <Bleed inline="8">
          <DecorativeBox height="8">inline</DecorativeBox>
        </Bleed>
      </Box>

      <Box padding="8" rounded="sm" borderWidth="1px">
        <Bleed block="8">
          <DecorativeBox height="8">block</DecorativeBox>
        </Bleed>
      </Box>
    </VStack>
  )
}
