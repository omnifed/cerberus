import { Accordion } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export function UnstyledSlotDemo() {
  return (
    <Box w="2/3">
      <Accordion.Root collapsible transform="skewX(-10deg)">
        <Accordion.Item bgColor="black" borderColor="danger.bg.initial" value="one">
          <Accordion.ItemTrigger
            data-indicator-position="start"
            color="danger.text.initial"
            display="flex"
            gap="md"
            w="full"
            unstyled
          >
            <Accordion.ItemIndicator>🔥</Accordion.ItemIndicator>
            Cerberus
          </Accordion.ItemTrigger>

          <Accordion.ItemContent unstyled bgColor="page.bg.200" color="page.text.200">
            Cerberus is the three-headed dog that guards the gates of the Underworld and
            our sweet baby boi protecting the integrity of your design system.
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  )
}
