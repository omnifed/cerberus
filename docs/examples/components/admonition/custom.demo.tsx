import PawIcon from '@/app/components/icons/paw-icon'
import { Box, Circle } from '@/styled-system/jsx'
import { AdmonitionParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="3/4">
      <AdmonitionParts.Root
        css={{
          transform: 'skewX(-10deg)',
        }}
      >
        <AdmonitionParts.Indicator>
          <Circle size="6">
            <PawIcon />
          </Circle>
        </AdmonitionParts.Indicator>

        <AdmonitionParts.Content>
          <AdmonitionParts.Heading
            css={{
              color: 'danger.text.initial',
              textTransform: 'uppercase',
            }}
          >
            Cerberus Forever
          </AdmonitionParts.Heading>
          <AdmonitionParts.Description>
            President&apos;s are temporary, but Cerberus is forever.
          </AdmonitionParts.Description>
        </AdmonitionParts.Content>
      </AdmonitionParts.Root>
    </Box>
  )
}
