import { HStack } from '@/styled-system/jsx'
import { Slider } from '@cerberus-design/react'

export function LabelDemo() {
  return (
    <HStack w="3/4">
      <Slider defaultValue={[30]}>
        <Slider.Label>Amount of Corn</Slider.Label>
        <Slider.ValueText />
      </Slider>
    </HStack>
  )
}
