import { FieldInput, type FieldInputProps } from '@cerberus-design/react'

interface BuilderInputProps extends FieldInputProps {
  name: string
  type: 'text' | 'number'
  value: string | number
  selectedValue: string
}

export default function BuilderInput(props: BuilderInputProps) {
  const { selectedValue, ...nativeProps } = props
  return <FieldInput {...nativeProps} value={selectedValue} />
}
