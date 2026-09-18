import { DecorativeBox } from '@/app/components/decorative-box'
import { Wrap } from 'styled-system/jsx'

export function JustifyDemo() {
  return (
    <Wrap justify="center" gap="md" w="3/4">
      {Array.from({ length: 5 }).map((_, index) => (
        <DecorativeBox key={index} h="80px" w="180px">
          Box {index + 1}
        </DecorativeBox>
      ))}
    </Wrap>
  )
}
