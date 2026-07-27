'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { cerberus, Slider, Text } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function ControlledDemo() {
  const [value, setValue] = useSignal<Array<number>>([0])
  return (
    <Stack gap="xl" w="3/4">
      <Slider onValueChange={(details) => setValue(details.value)} value={value}>
        <Slider.Label>Controlled</Slider.Label>
        <Slider.ValueText />
      </Slider>

      <HStack gap="sm" w="full">
        <Text as="small" textStyle="body-sm">
          Value:{' '}
        </Text>
        <cerberus.code textStyle="mono-sm">{value}</cerberus.code>
      </HStack>
    </Stack>
  )
}
