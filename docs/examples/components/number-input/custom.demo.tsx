import { HStack } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { NumberInput } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <HStack w="1/2">
      <NumberInput.Root display="flex" w="full">
        <NumberInput.Label textStyle="heading-xs">
          This is custom
        </NumberInput.Label>

        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.IncrementTrigger
            color="success.text.initial"
            _hover={{
              bgColor: 'success.bg.initial/30',
            }}
          >
            <Add />
          </NumberInput.IncrementTrigger>
          <NumberInput.DecrementTrigger
            bgColor="danger.ghost.initial"
            color="danger.text.initial"
            _hover={{
              bgColor: 'danger.ghost.hover',
              color: 'danger.text.100',
            }}
          >
            <Subtract />
          </NumberInput.DecrementTrigger>
          <NumberInput.Scrubber />
        </NumberInput.Control>
      </NumberInput.Root>
    </HStack>
  )
}
