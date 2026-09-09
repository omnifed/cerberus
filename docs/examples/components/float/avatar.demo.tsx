import { Avatar, Tag } from '@cerberus-design/react'
import { Box, Float } from 'styled-system/jsx'

export function AvatarDemo() {
  return (
    <Box position="relative">
      <Avatar
        alt="User Avatar"
        src="https://avatars.githubusercontent.com/u/12345678?v=4"
        size="xl"
      />
      <Float placement="bottom-center" offsetY="-4px">
        <Tag>Listening to...</Tag>
      </Float>
    </Box>
  )
}
