import { FieldInput, type TextFieldProps } from '@cerberus-design/react'

interface BuilderInputProps extends TextFieldProps {
  name: string
  type: 'text' | 'number'
  value: string | number
  selectedValue: string
}

export default function BuilderInput(props: BuilderInputProps) {
  const { selectedValue, ...nativeProps } = props
  return <FieldInput {...nativeProps} value={selectedValue} />
}
