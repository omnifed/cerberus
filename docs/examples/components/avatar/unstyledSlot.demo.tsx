import { Avatar } from '@cerberus-design/react'

export function UnstyledSlotAvatar() {
  return (
    <Avatar.Root gradient="amphiaraus-dark" textTransform="initial">
      <Avatar.Fallback unstyled>cU</Avatar.Fallback>
      <Avatar.Image unstyled />
    </Avatar.Root>
  )
}
