import { Box } from '@/styled-system/jsx'
import { FieldParts } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <FieldParts.Root ids={{ control: 'basicTextarea' }}>
        <FieldParts.Textarea />
      </FieldParts.Root>
    </Box>
  )
}
