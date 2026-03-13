import { DecorativeBox } from '@/app/components/decorative-box'
import { Wrap } from 'styled-system/jsx'

export function GapDemo() {
  return (
    <Wrap gap="5" w="3/4">
      {Array.from({ length: 12 }).map((_, index) => (
        <DecorativeBox key={index} h="12" w="12" />
      ))}
    </Wrap>
  )
}
