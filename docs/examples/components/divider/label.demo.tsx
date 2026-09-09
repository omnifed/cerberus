import { Text } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'
import { Divider, HStack, Stack } from 'styled-system/jsx'

function TextLabel(props: PropsWithChildren<object>) {
  return <Text flexShrink="0" textStyle="label-sm" {...props} />
}

export function LabelDemo() {
  return (
    <Stack w="3/4">
      <HStack>
        <TextLabel>Label (start)</TextLabel>
        <Divider flex="1" />
      </HStack>

      <HStack>
        <Divider flex="1" />
        <TextLabel>Label (end)</TextLabel>
      </HStack>

      <HStack>
        <Divider flex="1" />
        <TextLabel>Label (center)</TextLabel>
        <Divider flex="1" />
      </HStack>
    </Stack>
  )
}
