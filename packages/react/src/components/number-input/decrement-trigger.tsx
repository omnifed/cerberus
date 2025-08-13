'use client'

import { useCerberusContext } from '@/src/context/cerberus'
import { NumberInputParts } from './parts'
import type { NumberInputDecrementTriggerProps } from './primitives'

export function DecrementTrigger(props: NumberInputDecrementTriggerProps) {
  const { icons } = useCerberusContext()
  const { decrement: ChevronDown } = icons

  return (
    <NumberInputParts.DecrementTrigger {...props}>
      <ChevronDown />
    </NumberInputParts.DecrementTrigger>
  )
}
