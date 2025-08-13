'use client'

import { useCerberusContext } from '@/src/context/cerberus'
import { NumberInputParts } from './parts'
import type { NumberInputIncrementTriggerProps } from './primitives'

export function IncrementTrigger(props: NumberInputIncrementTriggerProps) {
  const { icons } = useCerberusContext()
  const { increment: ChevronUp } = icons

  return (
    <NumberInputParts.IncrementTrigger {...props}>
      <ChevronUp />
    </NumberInputParts.IncrementTrigger>
  )
}
