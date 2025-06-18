import { Box, VStack } from '@/styled-system/jsx'
import { Button } from '@cerberus-design/react'

export function BasicExample() {
  return (
    <VStack alignItems="flex-start" w="3/4">
      <Box w="full">
        <Button>Default</Button>
      </Box>

      <Box bgColor="page.bg.100" w="full">
        <Button>Light</Button>
      </Box>

      <Box bgColor="page.bg.100" w="full">
        <Button>Dark</Button>
      </Box>

      <Box bgColor="page.bg.100" w="full">
        <Button>System</Button>
      </Box>

      <Box bgColor="page.bg.100" w="full">
        <Button>Dark Acheron</Button>
      </Box>
    </VStack>
  )
}
