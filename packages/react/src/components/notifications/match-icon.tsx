'use client'

import { toast } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { Spinner } from '../Spinner'
import type { NotifyOptions } from './types'
import { ark } from '@ark-ui/react/factory'

/**
 * This private module contains a component that returns the correct icon for a
 * notification based on the palette. If there is no result, it is assumed to
 * be a 'loading' type.
 * @module 'notification/match-icon'
 */

interface MatchNotificationIconProps {
  type?: NotifyOptions['palette']
}

export function MatchNotificationIcon(props: MatchNotificationIconProps) {
  const { icons } = useCerberusContext()
  const type = props.type || 'info'
  const styles = toast()

  const key = `${type}Notification` as keyof typeof icons
  const Icon = icons[key] || ToastLoadingIcon

  return (
    <ark.div className={styles.icon}>
      <Icon />
    </ark.div>
  )
}

function ToastLoadingIcon() {
  return <Spinner size="1rem" />
}
