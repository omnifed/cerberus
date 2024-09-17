import { Avatar } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'

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
