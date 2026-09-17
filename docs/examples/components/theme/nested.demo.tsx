import { Box } from '@/styled-system/jsx'
import { Theme, Button } from '@cerberus-design/react'

export function NestedDemo() {
  return (
    <Theme mode="dark" css={{ w: 'full' }}>
      <Box bgColor="page.bg.200" p="md" w="full">
        <Button css={{ mb: 'md' }}>Dark</Button>
        <Theme mode="light" css={{ w: 'full' }}>
          <Box bgColor="page.bg.200" p="md" w="full">
            <Button>Light</Button>
          </Box>
        </Theme>
      </Box>
    </Theme>
  )
}
