import { DecorativeBox } from '@/app/components/decorative-box'
import { HStack } from '@/styled-system/jsx'
import { Group } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'

export function StackDemo() {
  return (
    <HStack gap="xl">
      <Group layout="stack" orientation="horizontal">
        <Box>1</Box>
        <Box>2</Box>
      </Group>

      <Group layout="stack" orientation="vertical">
        <Box>1</Box>
        <Box>2</Box>
      </Group>
    </HStack>
  )
}

function Box({ children }: PropsWithChildren<object>) {
  return (
    <DecorativeBox h="12" w="12">
      {children}
    </DecorativeBox>
  )
}
