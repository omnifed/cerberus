import { LinkOverlay, Stack } from '@/styled-system/jsx'
import { Text } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Stack position="relative">
      <Text as="h4" textStyle="heading-sm">
        Wanna try it out?
      </Text>
      <Text color="page.text.100">
        This entire area below is a link. Hover it to see the effect.
      </Text>
      <LinkOverlay
        href="#"
        textDecoration="underline"
        _hover={{
          bgColor: 'action.bg.hover',
        }}
      >
        Click me
      </LinkOverlay>
    </Stack>
  )
}
