import { Box, Circle, Float } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Box position="relative" w="80px" h="80px" bg="page.bg.initial">
      <Float>
        <Circle size="5" bg="red" color="white" textStyle="label-sm">
          3
        </Circle>
      </Float>
    </Box>
  )
}
