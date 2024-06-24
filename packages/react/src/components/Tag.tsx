import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Close } from '@cerberus/icons'
import { type Sentiment } from '@cerberus/panda-preset'
import { Show } from './Show'
import { IconButton } from './IconButton'
import { cx } from '@cerberus/styled-system/css'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: Sentiment
  shape?: 'rounded' | 'pill'
  usage?: 'filled' | 'outline'
}
export interface ClickableTagProps extends HTMLAttributes<HTMLSpanElement> {
  shape?: 'pill'
  onClick: () => void
  usage?: 'filled'
}

export function Tag(
  props: PropsWithChildren<TagProps | ClickableTagProps>,
): JSX.Element {
  const { shape, onClick, usage, ...nativeProps } = props
  const isClosable = Boolean(onClick)
  const finalShape = isClosable ? 'pill' : shape

  return (
    <span
      {...nativeProps}
      className={cx(nativeProps.className, 'tag')}
      data-temp-shape={finalShape}
      data-temp-usage={usage}
    >
      {props.children}

      <Show when={isClosable}>
        <IconButton ariaLabel="Close" onClick={onClick}>
          <Close />
        </IconButton>
      </Show>
    </span>
  )
}
