import { DecorativeBox } from '@/app/components/decorative-box'
import { Stack } from 'styled-system/jsx'

export function HorizontalDemo() {
  return (
    <Stack direction="horizontal" gap="md" w="3/4">
      <DecorativeBox h="10" />
      <DecorativeBox h="10" />
      <DecorativeBox h="10" />
    </Stack>
  )
}
