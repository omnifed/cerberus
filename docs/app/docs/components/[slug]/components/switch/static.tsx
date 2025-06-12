import { Switch, Field, SwitchParts } from '@cerberus-design/react'
import { Box, VStack } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Switch>Receive in app notifications</Switch>
    </Box>
  )
}

export function WithFieldDemo() {
  return (
    <Box w="1/2">
      <Field label="This is the field label" required>
        <Switch>Receive in app notifications</Switch>
      </Field>
    </Box>
  )
}

export function SizesDemo() {
  return (
    <Box w="1/2">
      <VStack alignItems="flex-start" gap="lg">
        <Switch size="sm">Small size (default)</Switch>
        <Switch size="lg">Large size</Switch>
      </VStack>
    </Box>
  )
}

export function CustomDemo() {
  return (
    <Box w="1/2">
      <SwitchParts.Root>
        <SwitchParts.Label
          css={{
            textTransform: 'uppercase',
          }}
        >
          Receive in app notifications
        </SwitchParts.Label>
        <SwitchParts.Control
          css={{
            rounded: 'sm',
            transform: 'skewX(-10deg)',
            _checked: {
              bgColor: 'danger.surface.initial',
            },
          }}
        >
          <SwitchParts.Thumb
            css={{
              rounded: 'sm',
            }}
          />
        </SwitchParts.Control>

        <SwitchParts.HiddenInput />
      </SwitchParts.Root>
    </Box>
  )
}
