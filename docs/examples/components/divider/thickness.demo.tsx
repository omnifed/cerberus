import { Divider, VStack } from 'styled-system/jsx'

export function ThicknessDemo() {
  return (
    <VStack gap="lg" w="3/4">
      <Divider thickness="1px" />
      <Divider thickness="2px" />
      <Divider thickness="4px" />
    </VStack>
  )
}
