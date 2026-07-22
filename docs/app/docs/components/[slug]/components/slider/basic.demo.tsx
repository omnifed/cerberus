import { HStack } from '@/styled-system/jsx'
import { Slider } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <HStack w="3/4">
      <Slider defaultValue={[30]} label="Kewl gauge" />
    </HStack>
  )
}
