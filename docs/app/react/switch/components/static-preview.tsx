import { Switch, Field, SwitchParts } from '@cerberus-design/react'
import { Box, VStack } from '@cerberus-design/styled-system/jsx'
import { css } from '@cerberus/styled-system/css'

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
          className={css({
            textTransform: 'uppercase',
          })}
        >
          Receive in app notifications
        </SwitchParts.Label>
        <SwitchParts.Control
          className={css({
            rounded: 'sm',
            transform: 'skewX(-10deg)',
            _checked: {
              bgColor: 'danger.surface.initial',
            },
          })}
        >
          <SwitchParts.Thumb
            className={css({
              rounded: 'sm',
            })}
          />
        </SwitchParts.Control>

        <SwitchParts.HiddenInput />
      </SwitchParts.Root>
    </Box>
  )
}
