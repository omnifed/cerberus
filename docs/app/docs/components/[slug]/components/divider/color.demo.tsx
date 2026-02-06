import { Divider, VStack } from 'styled-system/jsx'

export function ColorDemo() {
  return (
    <VStack gap="lg" w="3/4">
      <Divider color="page.border.initial" />
      <Divider color="info.border.initial" />
      <Divider color="neutral.100" />
    </VStack>
  )
}
