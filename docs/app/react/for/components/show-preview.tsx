import { For, Text } from '@cerberus-design/react'
import { VStack } from '@cerberus-design/styled-system/jsx'

export default function ForPreview() {
  const data = ['Cerberus', 'Design', 'System', 'Roolz', 'D00dz']
  return (
    <VStack alignItems="flex-start" gap="md">
      <For each={data}>
        {(item, index) => (
          <Text key={item} textStyle="body-lg">
            {index}. {item}
          </Text>
        )}
      </For>
    </VStack>
  )
}
