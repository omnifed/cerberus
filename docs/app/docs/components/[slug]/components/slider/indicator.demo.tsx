import { HStack } from '@/styled-system/jsx'
import { Slider } from '@cerberus-design/react'

export function DraggingIndicatorDemo() {
  return (
    <HStack gap="4xl" justify="center" w="3/4">
      <Slider defaultValue={[30]} marks={[0, 25, 50, 75, 100]} showIndicator />

      <Slider
        defaultValue={[30]}
        marks={[0, 25, 50, 75, 100]}
        orientation="vertical"
        showIndicator
        height="200px"
      />
    </HStack>
  )
}
