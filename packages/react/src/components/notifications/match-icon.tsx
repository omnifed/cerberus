'use client'

import type { NotificationVariantProps } from '@cerberus/styled-system/recipes'
import { Box } from '@cerberus/styled-system/jsx'
import { useCerberusContext } from '../../context/cerberus'

/**
 * This private module contains a component that returns the correct icon for a
 * notification based on the palette.
 * @module 'notification/match-icon'
 */

export function MatchNotificationIcon(props: NotificationVariantProps) {
  const { icons } = useCerberusContext()
  const palette = (props.palette || 'info') as
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  const key = `${palette}Notification` as keyof typeof icons

  const Icon = icons[key]

  return (
    <Box>
      <Icon />
    </Box>
  )
}
