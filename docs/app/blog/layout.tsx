import { Text } from '@cerberus-design/react'
import { Box, Container } from '@/styled-system/jsx'
import { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren<object>) {
  return (
    <Container paddingBlock="10rem">
      <header>
        <Text as="h1" textStyle="heading-xl">
          Changeblog
        </Text>
        <Text
          color="page.text.100"
          fontSize="1.25rem"
          paddingBlockStart="sm"
          textStyle="body-lg"
        >
          The Cerberus blog and updates for changes and releases.
        </Text>
      </header>

      <Box paddingBlockStart="4rem">{props.children}</Box>
    </Container>
  )
}
