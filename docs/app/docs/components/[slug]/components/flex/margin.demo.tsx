import { DecorativeBox } from '@/app/components/decorative-box'
import { Flex } from 'styled-system/jsx'

export function MarginDemo() {
  return (
    <Flex gap="4" justify="space-between" w="3/4">
      <DecorativeBox height="10" width="40" />
      <DecorativeBox height="10" width="40" marginEnd="auto" />
      <DecorativeBox height="10" width="40" />
    </Flex>
  )
}
