import { UserAvatar } from '@carbon/icons-react'
import { Avatar } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <HStack justify="center" w="3/4">
      <Avatar bgColor="page.bg.200" fallback={<UserAvatar />} />
      <Avatar bgColor="page.bg.200" fallback="md" />
      <Avatar
        alt="User Avatar"
        fallback="md"
        src="https://avatars.githubusercontent.com/u/71111994?s=200&v=4"
      />
    </HStack>
  )
}
