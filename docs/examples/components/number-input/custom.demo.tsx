import { HStack } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { NumberInputParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <HStack w="1/2">
      <NumberInputParts.Root
        css={{
          display: 'flex',
          w: 'full',
        }}
      >
        <NumberInputParts.Label
          css={{
            textStyle: 'heading-xs',
          }}
        >
          This is custom
        </NumberInputParts.Label>

        <NumberInputParts.Control>
          <NumberInputParts.Input />
          <NumberInputParts.IncrementTrigger
            css={{
              bgColor: 'success.surface.initial',
              color: 'success.text.initial',
            }}
          >
            <Add />
          </NumberInputParts.IncrementTrigger>
          <NumberInputParts.DecrementTrigger
            css={{
              bgColor: 'danger.surface.initial',
              color: 'danger.text.inverse',
            }}
          >
            <Subtract />
          </NumberInputParts.DecrementTrigger>
          <NumberInputParts.Scrubber />
        </NumberInputParts.Control>
      </NumberInputParts.Root>
    </HStack>
  )
}
