import { DecorativeBox } from '@/components/decorative-box'
import { Flex } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Flex gap="4" w="3/4">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
