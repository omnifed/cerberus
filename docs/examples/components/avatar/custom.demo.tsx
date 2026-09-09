import { Avatar } from '@cerberus-design/react'

export function CustomAvatar() {
  return (
    <Avatar
      fallback="Cu"
      bgColor="black"
      bgImage="none"
      border="2px solid"
      borderColor="danger.border.initial"
      color="danger.text.initial"
      fontFamily="sans"
      rounded="sm"
      transform="skewX(-10deg)"
    />
  )
}
