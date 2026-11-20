import { Accordion } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export function CustomDemo() {
  return (
    <Box w="2/3">
      <Accordion.Root transform="skewX(-10deg)">
        <Accordion.Item bgColor="black" borderColor="red" value="one">
          <Accordion.ItemTrigger data-indicator-position="start" color="red">
            <Accordion.ItemIndicator>🔥</Accordion.ItemIndicator>
            Cerberus
          </Accordion.ItemTrigger>

          <Accordion.ItemContent color="white" px="md" textStyle="body-md">
            Cerberus is the three-headed dog that guards the gates of the Underworld and
            our sweet baby boi protecting the integrity of your design system.
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  )
}
