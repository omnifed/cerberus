import { Box, Circle, Float } from 'styled-system/jsx'

export function OffsetYDemo() {
  return (
    <Box position="relative" w="80px" h="80px" bg="page.bg.initial">
      <Float offsetY="-4">
        <Circle size="5" bg="red" color="white" textStyle="label-sm">
          3
        </Circle>
      </Float>
    </Box>
  )
}
