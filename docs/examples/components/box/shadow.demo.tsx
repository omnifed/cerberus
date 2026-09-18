import { Box } from 'styled-system/jsx'

export function ShadowDemo() {
  return (
    <Box
      bgColor="page.surface.100"
      color="page.text.100"
      p="4"
      rounded="md"
      shadow="md"
    >
      This is the Box with shadow
    </Box>
  )
}
