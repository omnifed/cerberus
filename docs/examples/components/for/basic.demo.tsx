import { Stack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

export function BasicDemo() {
  const data = ['Cerberus', 'Design', 'System', 'Roolz', 'D00dz']
  return (
    <Stack gap="md">
      <For each={data}>
        {(item, index) => (
          <Text key={item} textStyle="body-lg">
            {index}. {item}
          </Text>
        )}
      </For>
    </Stack>
  )
}
