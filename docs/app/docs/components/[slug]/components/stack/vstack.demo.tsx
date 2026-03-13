import { DecorativeBox } from '@/app/components/decorative-box'
import { VStack } from 'styled-system/jsx'

export function VStackDemo() {
  return (
    <VStack gap="md" w="3/4">
      <DecorativeBox h="20" w="50%" />
      <DecorativeBox h="20" w="25%" />
      <DecorativeBox h="20" w="full" />
    </VStack>
  )
}
