import { Box, HStack } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { Field, NumberInput, NumberInputParts } from '@cerberus-design/react'

export function NumberInputDemo() {
  return (
    <Box w="1/2">
      <Field label="How many?" helperText="Choose your quantity.">
        <NumberInput />
      </Field>
    </Box>
  )
}

export function ScrubberDemo() {
  return (
    <Box w="1/2">
      <Field
        label="How many?"
        helperText="Use your mouse wheel to change the value."
      >
        <NumberInput scrubber />
      </Field>
    </Box>
  )
}

export function SizesDemo() {
  return (
    <HStack w="3/4">
      <Field label="Small size">
        <NumberInput size="sm" />
      </Field>
      <Field label="Medium size">
        <NumberInput size="md" />
      </Field>
      <Field label="Large size">
        <NumberInput size="lg" />
      </Field>
    </HStack>
  )
}

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
