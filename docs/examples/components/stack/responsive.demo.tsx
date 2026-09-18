import { DecorativeBox } from '@/app/components/decorative-box'
import { Stack } from '@/styled-system/jsx'

export function ResponsiveStackDemo() {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap="md" h="100px" w="3/4">
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
    </Stack>
  )
}
