import { Avatar } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function SizesDemo() {
  return (
    <HStack justify="center" w="3/4">
      <Avatar bgColor="page.bg.200" fallback="xs" size="xs" />
      <Avatar bgColor="page.bg.200" fallback="sm" size="sm" />
      <Avatar bgColor="page.bg.200" fallback="md" size="md" />
      <Avatar bgColor="page.bg.200" fallback="lg" size="lg" />
      <Avatar bgColor="page.bg.200" fallback="xl" size="xl" />
      <Avatar bgColor="page.bg.200" fallback="2x" size="2xl" />
      <Avatar bgColor="page.bg.200" fallback="3x" size="3xl" />
      <Avatar bgColor="page.bg.200" fallback="4x" size="4xl" />
    </HStack>
  )
}
