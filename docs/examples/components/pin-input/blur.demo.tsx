import { HStack } from '@/styled-system/jsx'
import { PinInput } from '@cerberus-design/react'

export function BlurDemo() {
  return (
    <HStack w="1/2">
      <PinInput blurOnComplete onValueComplete={() => alert('Input complete!')} />
    </HStack>
  )
}
