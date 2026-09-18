import { UserAvatar } from '@carbon/icons-react'
import { Avatar, Group } from '@cerberus-design/react'

export function GroupDemo() {
  return (
    <Group layout="stack" orientation="horizontal">
      <Avatar bgColor="page.bg.200" fallback={<UserAvatar />} />
      <Avatar bgColor="page.bg.100" fallback="md" />
      <Avatar
        alt="User Avatar"
        fallback="md"
        src="https://avatars.githubusercontent.com/u/71111994?s=200&v=4"
      />
    </Group>
  )
}
