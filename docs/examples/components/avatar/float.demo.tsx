import { UserAvatar } from '@carbon/icons-react'
import { Avatar } from '@cerberus-design/react'
import { Box, Circle, Float, HStack } from 'styled-system/jsx'

export function FloatDemo() {
  return (
    <HStack justify="center" w="3/4">
      <Box pos="relative">
        <Avatar bgColor="page.bg.200" fallback={<UserAvatar />} />
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Circle
            bgColor="success.bg.active"
            outline="0.2em solid"
            outlineColor="page.surface.initial"
            size="8px"
          />
        </Float>
      </Box>
    </HStack>
  )
}
