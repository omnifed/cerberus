import { DecorativeBox } from '@/app/components/decorative-box'
import { Stack } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Stack w="3/4">
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Stack>
  )
}
