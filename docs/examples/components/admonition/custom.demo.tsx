import { PawIcon } from '@/components/icons/paw'
import { Box, Circle } from '@/styled-system/jsx'
import { Admonition } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="3/4">
      <Admonition.Root transform="skewX(-10deg)">
        <Admonition.Indicator>
          <Circle size="6">
            <PawIcon />
          </Circle>
        </Admonition.Indicator>

        <Admonition.Content>
          <Admonition.Heading color="danger.text.initial" textTransform="uppercase">
            Cerberus Forever
          </Admonition.Heading>
          <Admonition.Description>
            President&apos;s are temporary, but Cerberus is forever.
          </Admonition.Description>
        </Admonition.Content>
      </Admonition.Root>
    </Box>
  )
}
