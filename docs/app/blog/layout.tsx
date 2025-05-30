import { Box } from '@/styled-system/jsx'
import { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren<object>) {
  return <Box paddingBlock="6rem">{props.children}</Box>
}
