import { Text } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export default function Layout(props: PropsWithChildren<object>) {
  return (
    <Box paddingBlock="20rem">
      <Text>This is the blog layout</Text>
      <Box>{props.children}</Box>
    </Box>
  )
}
