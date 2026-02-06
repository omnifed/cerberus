import { Text } from '@cerberus-design/react'
import { type PropsWithChildren } from 'react'
import { Divider, HStack } from 'styled-system/jsx'

function VertDivider(props: PropsWithChildren<object>) {
  return (
    <Divider color="page.border.initial" orientation="vertical" {...props} />
  )
}

export function OrientationDemo() {
  return (
    <HStack h="2rem" gap="lg" justify="center" pt="md" w="3/4">
      <Text>Text</Text>
      <VertDivider />
      <Text>Text</Text>
      <VertDivider />
      <Text>Text</Text>
    </HStack>
  )
}
