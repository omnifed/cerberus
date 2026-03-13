import { DecorativeBox } from '@/app/components/decorative-box'
import { Wrap } from 'styled-system/jsx'

export function RowColDemo() {
  return (
    <Wrap rowGap="md" columnGap="xl" w="1/2">
      {Array.from({ length: 10 }).map((_, index) => (
        <DecorativeBox key={index} h="12" w="12" />
      ))}
    </Wrap>
  )
}
