'use client'

import { Box, Circle, Divider, Float, HStack, Stack } from '@/styled-system/jsx'
import { AiAgentInvocation, Chat, Time, UserFollow } from '@carbon/icons-react'
import { Avatar, Button, ButtonGroup, Popover, Text } from '@cerberus-design/react'

export function SlotsDemo() {
  return (
    <Popover trigger={<Button>Trigger</Button>} size="lg">
      <Popover.Header>
        <HStack gap="md" pb="lg" w="full">
          <Box pos="relative">
            <Avatar fallback={<AiAgentInvocation />} gradient="asphodel-dark" />
            <Float placement="bottom-end" offsetX="1" offsetY="1">
              <Circle
                bgColor="success.bg.active"
                outline="0.2em solid"
                outlineColor="page.surface.initial"
                size="8px"
              />
            </Float>
          </Box>

          <Stack direction="column" gap="xs">
            <Popover.Title textStyle="heading-xs">Cerby tha Dawg</Popover.Title>
            <Popover.Description as="small" color="page.text.100" textStyle="body-xs">
              The best boi there is
            </Popover.Description>
          </Stack>
        </HStack>
      </Popover.Header>

      <Divider color="page.border.initial" thickness="1px" />

      <Popover.Body>
        <HStack color="page.text.100" gap="sm" w="full">
          <Time />
          <Text color="page.text.initial">6:66 Local Time</Text>
        </HStack>
      </Popover.Body>

      <Popover.Footer>
        <ButtonGroup>
          <Button size="sm" usage="outlined-subtle">
            <Chat />
            Message
          </Button>
          <Button size="sm" usage="outlined-subtle">
            <UserFollow />
            Add
          </Button>
        </ButtonGroup>
      </Popover.Footer>
    </Popover>
  )
}
