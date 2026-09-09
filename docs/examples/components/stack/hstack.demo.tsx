import { DecorativeBox } from '@/app/components/decorative-box'
import { HStack } from 'styled-system/jsx'

export function HStackDemo() {
  return (
    <HStack gap="md" w="3/4">
      <DecorativeBox h="10" />
      <DecorativeBox h="5" />
      <DecorativeBox h="20" />
    </HStack>
  )
}
