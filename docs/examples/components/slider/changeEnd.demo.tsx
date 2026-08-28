'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { cerberus, Slider, Text } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function ChangeEndDemo() {
  const [value, setValue] = useSignal<Array<number>>([0])
  const [endVal, setEndVal] = useSignal<Array<number>>([0])

  return (
    <Stack gap="xl" w="3/4">
      <Slider
        onValueChange={(details) => setValue(details.value)}
        onValueChangeEnd={(details) => setEndVal(details.value)}
        value={value}
      >
        <Slider.Label>Controlled</Slider.Label>
        <Slider.ValueText />
      </Slider>

      <Stack gap="sm">
        <HStack gap="sm" w="full">
          <Text as="small" textStyle="body-sm">
            Value:{' '}
          </Text>
          <cerberus.code textStyle="mono-sm">{value}</cerberus.code>
        </HStack>
        <HStack gap="sm" w="full">
          <Text as="small" textStyle="body-sm">
            End Value:{' '}
          </Text>
          <cerberus.code textStyle="mono-sm">{endVal[0]}</cerberus.code>
        </HStack>
      </Stack>
    </Stack>
  )
}
