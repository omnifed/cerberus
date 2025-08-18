'use client'

import { ark } from '@ark-ui/react/factory'
import { toast } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { Spinner } from '../spinner/index'
import type { NotifyOptions, NotifyOptionsType } from './types'
import { getEmphasis } from './center'

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
  const type = props.type?.split('-')[0] || 'info'
  const styles = toast()

  const key = `${type}Notification` as keyof typeof icons
  const Icon = icons[key] || ToastLoadingIcon

  return (
    <ark.div
      data-emphasis={getEmphasis(props.type as NotifyOptionsType)}
      className={styles.icon}
    >
      <Icon />
    </ark.div>
  )
}

function ToastLoadingIcon() {
  return <Spinner size="1rem" />
}
