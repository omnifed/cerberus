import { Divider, VStack } from 'styled-system/jsx'

export function AppearanceDemo() {
  return (
    <VStack gap="lg" w="3/4">
      <Divider borderStyle="solid" />
      <Divider borderStyle="dashed" />
      <Divider borderStyle="dotted" />
    </VStack>
  )
}
