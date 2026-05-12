'use client'

import { ark } from '@ark-ui/react/factory'
import { toast } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { Spinner } from '../spinner/index'
import { getEmphasis } from './center'
import type { NotifyOptions } from './types'

/**
 * This private module contains a component that returns the correct icon for a
 * notification based on the palette. If there is no result, it is assumed to
 * be a 'loading' type.
 * @module 'notification/match-icon'
 */

export function MatchNotificationIcon(props: NotifyOptions) {
  const { icons } = useCerberusContext()
  const type = props.type?.split('-')[0] || 'info'
  const styles = toast()

  const key = getToastIconKey(type) as keyof typeof icons
  const Icon = icons[key] || ToastLoadingIcon

  return (
    <ark.div data-emphasis={getEmphasis(props)} className={styles.icon}>
      <Icon />
    </ark.div>
  )
}

function ToastLoadingIcon() {
  return <Spinner size="1rem" />
}

function getToastIconKey(type: string): string {
  if (type === 'error') return type
  return `${type}Notification`
}
