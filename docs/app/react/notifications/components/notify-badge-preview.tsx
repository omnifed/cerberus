import { HStack, VStack } from '@/styled-system/jsx'
import { Notification } from '@cerberus-design/icons'
import { IconButton, Tag, formatNotifyCount } from '@cerberus-design/react'

export function NotifyBadgePreview() {
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
