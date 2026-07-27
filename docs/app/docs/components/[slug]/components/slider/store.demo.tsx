'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { cerberus, Slider, Text, useSlider } from '@cerberus-design/react'

export function StoreDemo() {
  const slider = useSlider({
    defaultValue: [40],
    thumbAlignment: 'center',
  })

  return (
    <Stack gap="xl" w="3/4">
      <Slider.Provider direction="horizontal" value={slider}>
        <HStack justify="space-between" w="full">
          <Slider.Label>Slider Store</Slider.Label>
          <Slider.ValueText />
        </HStack>

        <Slider.Control direction="horizontal">
          <Slider.Track direction="horizontal">
            <Slider.Range direction="horizontal" />
          </Slider.Track>
          <Slider.Thumbs direction="horizontal" value={slider.value} />
        </Slider.Control>
      </Slider.Provider>

      <HStack gap="sm" w="full">
        <Text as="small" textStyle="body-sm">
          Value:{' '}
        </Text>
        <cerberus.code textStyle="mono-sm">{slider.value}</cerberus.code>
      </HStack>
    </Stack>
  )
}
