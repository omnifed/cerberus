import { cx } from '@cerberus/styled-system/css'
import { circle, hstack } from '@cerberus/styled-system/patterns'
import {
  avatar,
  type AvatarVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HTMLAttributes } from 'react'

type AvatarProps = HTMLAttributes<HTMLImageElement> &
  AvatarVariantProps & {
    ariaLabel: string
  }

function Avatar(props: AvatarProps) {
  const { gradient, size } = props
  const initials = props.ariaLabel
    .split(' ')
    .map((word) => word[0])
    .join('')
  return (
    <div className={cx(avatar({ gradient, size }), circle())}>{initials}</div>
  )
}

export function AvatarPreview() {
  return (
    <div
      className={hstack({
        justify: 'center',
        w: '3/4',
      })}
    >
      <Avatar ariaLabel="x s" size="xs" />
      <Avatar ariaLabel="s m" gradient="dark-purple" size="sm" />
      <Avatar ariaLabel="m d" gradient="teal" size="md" />
      <Avatar ariaLabel="l g" gradient="light-blue" size="lg" />
      <Avatar ariaLabel="x l" gradient="neutral" size="xl" />
      <Avatar ariaLabel="2 x" gradient="green" size="2xl" />
      <Avatar ariaLabel="3 x" gradient="yellow" size="3xl" />
      <Avatar ariaLabel="4 x" gradient="red" size="4xl" />
    </div>
  )
}
