import { Notification } from '@carbon/icons-react'
import { IconButton, Tag, formatNotifyCount } from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'

export function NotifyBadgeDemo() {
  const count = formatNotifyCount(100)
  return (
    <HStack alignItems="flex-end" justify="center" gap="10" w="1/3">
      <VStack>
        <IconButton
          ariaLabel="View notifications"
          data-notify
          data-notify-count={count}
          size="sm"
        >
          <Notification />
        </IconButton>
        <Tag>Small IconButton</Tag>
      </VStack>

      <VStack>
        <IconButton
          ariaLabel="View notifications"
          data-notify
          data-notify-count={count}
        >
          <Notification />
        </IconButton>
        <Tag>Large IconButton</Tag>
      </VStack>
    </HStack>
  )
}
