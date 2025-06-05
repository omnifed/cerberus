'use client'

import { HStack } from '@/styled-system/jsx'
import { CircularProgress } from '@cerberus-design/react'

export function CircularPreview() {
  return (
    <HStack w="1/2">
      <CircularProgress id="25" defaultValue={25} />
      <CircularProgress id="50" defaultValue={50} />
      <CircularProgress id="75" defaultValue={75} />
      <CircularProgress id="complete" label="complete" defaultValue={100} />
    </HStack>
  )
}
