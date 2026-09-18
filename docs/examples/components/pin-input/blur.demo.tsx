'use client'

import { HStack } from '@/styled-system/jsx'
import { PinInput } from '@cerberus-design/react'

export function BlurDemo() {
  return (
    <HStack>
      <PinInput blurOnComplete onValueComplete={() => alert('Input complete!')} />
    </HStack>
  )
}
