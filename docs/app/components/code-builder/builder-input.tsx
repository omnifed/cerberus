'use client'

import { Input, type InputProps } from '@cerberus-design/react'

interface BuilderInputProps
  extends Omit<InputProps, 'name' | 'type' | 'value'> {
  name: string
  type: 'text' | 'number'
  value: string | number
  selectedValue: string
}

export default function BuilderInput(props: BuilderInputProps) {
  const { selectedValue, ...nativeProps } = props
  return <Input {...nativeProps} value={selectedValue} />
}
