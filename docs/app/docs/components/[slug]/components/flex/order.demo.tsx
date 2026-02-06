import { DecorativeBox } from '@/app/components/decorative-box'
import { Flex } from 'styled-system/jsx'

export function OrderDemo() {
  return (
    <Flex gap="4" w="3/4">
      <DecorativeBox height="10" order="1">
        1
      </DecorativeBox>
      <DecorativeBox height="10" order="3">
        2
      </DecorativeBox>
      <DecorativeBox height="10" order="2">
        3
      </DecorativeBox>
    </Flex>
  )
}
