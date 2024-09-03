import { type SelectHTMLAttributes } from 'react'
import type { EnumResult } from './helpers'
import { css } from '@cerberus/styled-system/css'
import { focusStates } from '@cerberus-design/panda-preset'

type BuilderSelectProps = Omit<EnumResult, 'value'> &
  SelectHTMLAttributes<HTMLSelectElement> & {
    options: string[]
  }

export default function BuilderSelect(props: BuilderSelectProps) {
  const { options, ...nativeProps } = props
  return (
    <select
      {...nativeProps}
      className={css({
        border: '1px solid',
        borderColor: 'action.border.initial',
        color: 'page.text.initial',
        h: '2.5rem',
        pxi: '2',
        rounded: 'sm',
        ...focusStates,
        w: 'full',
      })}
      id={nativeProps.name}
    >
      {options.map((choice) => (
        <option key={choice} value={choice}>
          {choice}
        </option>
      ))}
    </select>
  )
}
