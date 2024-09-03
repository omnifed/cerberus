import { Input, Toggle } from '@cerberus-design/react'
import type { BuilderResult } from './helpers'
import { css } from '@cerberus/styled-system/css'
import { focusStates } from '@cerberus-design/panda-preset'

interface MatchApiItemProps {
  el: BuilderResult
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MatchApiItem(props: MatchApiItemProps) {
  const { name, value } = props.el

  switch (props.el.type) {
    case 'enum':
      return (
        <select
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
          id={name}
          name={name}
          onChange={props.onChange}
        >
          {props.el.value.map((valueItem) => (
            <option key={valueItem} value={valueItem}>
              {valueItem}
            </option>
          ))}
        </select>
      )

    case 'text':
      return (
        <Input
          id={name}
          name={name}
          onChange={props.onChange}
          type="text"
          value={props.el.value}
        />
      )

    case 'boolean':
      return (
        <Toggle
          id={name}
          name={name}
          defaultChecked={props.el.value}
          onChange={props.onChange}
          value={String(value)}
        />
      )

    default:
      throw new Error('Unknown type in MatchApiItem component')
  }
}
