import { HStack } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { NumberInputParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <HStack w="1/2">
      <NumberInputParts.Root display="flex" w="full">
        <NumberInputParts.Label textStyle="heading-xs">
          This is custom
        </NumberInputParts.Label>

        <NumberInputParts.Control>
          <NumberInputParts.Input />
          <NumberInputParts.IncrementTrigger
            color="success.text.initial"
            _hover={{
              bgColor: 'success.bg.initial/30',
            }}
          >
            <Add />
          </NumberInputParts.IncrementTrigger>
          <NumberInputParts.DecrementTrigger
            bgColor="danger.ghost.initial"
            color="danger.text.initial"
            _hover={{
              bgColor: 'danger.ghost.hover',
              color: 'danger.text.100',
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
