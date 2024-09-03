'use client'

import { Input, type InputProps } from '@cerberus-design/react'
import type { TextResult } from './helpers'

interface BuilderInputProps
  extends Omit<InputProps, 'name' | 'type' | 'value'>,
    TextResult {
  selectedValue: string
}

export default function BuilderInput(props: BuilderInputProps) {
  const { selectedValue, ...nativeProps } = props
  return <Input {...nativeProps} type="text" value={selectedValue} />
}
