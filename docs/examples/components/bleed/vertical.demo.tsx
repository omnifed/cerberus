import { DecorativeBox } from '@/app/components/decorative-box'
import { Bleed, Box } from 'styled-system/jsx'

export function VerticalDemo() {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed block="10">
        <DecorativeBox height="20">Bleed</DecorativeBox>
      </Bleed>
    </Box>
  )
}
