import { HStack } from '@/styled-system/jsx'
import { Slider } from '@cerberus-design/react'

export function StepsDemo() {
  return (
    <HStack w="3/4">
      <Slider defaultValue={[30]} step={10} />
    </HStack>
  )
}
