import { Box, Circle, Float } from 'styled-system/jsx'

export function OffsetXDemo() {
  return (
    <Box position="relative" w="80px" h="80px" bg="page.surface.100">
      <Float offsetX="-4">
        <Circle size="5" bg="red" color="white" textStyle="label-sm">
          3
        </Circle>
      </Float>
    </Box>
  )
}
