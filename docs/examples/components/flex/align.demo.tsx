import { DecorativeBox } from '@/app/components/decorative-box'
import { Flex } from 'styled-system/jsx'

export function AlignDemo() {
  return (
    <Flex align="center" gap="4" w="3/4">
      <DecorativeBox height="4" />
      <DecorativeBox height="8" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
