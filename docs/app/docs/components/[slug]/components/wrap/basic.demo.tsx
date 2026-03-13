import { DecorativeBox } from '@/app/components/decorative-box'
import { Wrap } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Wrap w="3/4">
      <DecorativeBox h="20" />
      <DecorativeBox h="20" w="calc(50% - 4px)" />
      <DecorativeBox h="20" w="calc(50% - 4px)" />
    </Wrap>
  )
}
