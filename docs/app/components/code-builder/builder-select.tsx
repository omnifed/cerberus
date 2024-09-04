import type { EnumResult } from './helpers'
import { Select, type SelectProps, Option } from '@cerberus-design/react'

type BuilderSelectProps = Omit<EnumResult, 'value'> &
  SelectProps & {
    options: string[]
  }

export default function BuilderSelect(props: BuilderSelectProps) {
  const { options, ...nativeProps } = props
  return (
    <Select {...nativeProps} id={nativeProps.name}>
      {options.map((choice) => (
        <Option key={choice} value={choice}>
          {choice}
        </Option>
      ))}
    </Select>
  )
}
