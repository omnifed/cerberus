import { Box } from 'styled-system/jsx'

export function BorderDemo() {
  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      color="page.text.100"
      p="4"
    >
      Box with a border
    </Box>
  )
}
