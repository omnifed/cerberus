import { DecorativeBox } from '@/app/components/decorative-box'
import { AspectRatio } from 'styled-system/jsx'

export function ResponsiveDemo() {
  return (
    <AspectRatio maxWidth="300px" ratio={{ base: 1, md: 16 / 9 }} w="full">
      <DecorativeBox>Box</DecorativeBox>
    </AspectRatio>
  )
}
