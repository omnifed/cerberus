import { Box, Stack } from '@/styled-system/jsx'
import { Button, Theme } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Stack w="3/4">
      <Box w="full">
        <Button>Default</Button>
      </Box>

      <Theme mode="light" css={{ w: 'full' }}>
        <Box bgColor="page.bg.200" p="md" w="full">
          <Button>Light</Button>
        </Box>
      </Theme>

      <Theme mode="dark" css={{ w: 'full' }}>
        <Box bgColor="page.bg.200" p="md" w="full">
          <Button>Dark</Button>
        </Box>
      </Theme>

      <Theme mode="system" css={{ w: 'full' }}>
        <Box bgColor="page.bg.200" p="md" w="full">
          <Button>System</Button>
        </Box>
      </Theme>

      <Theme mode="dark" theme="acheron" css={{ w: 'full' }}>
        <Box bgColor="page.bg.200" p="md" w="full">
          <Button>Dark Acheron</Button>
        </Box>
      </Theme>
    </Stack>
  )
}
