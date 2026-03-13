import { Box } from '@/styled-system/jsx'
import { Admonition } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="3/4">
      <Admonition heading="Note">
        This is a note admonition that is commonly use to display a page-level informational
        message.
      </Admonition>
    </Box>
  )
}
