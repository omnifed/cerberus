'use client'

import { ark } from '@ark-ui/react/factory'
import { toast } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { Spinner } from '../spinner/index'
import type { NotifyOptions } from './types'

/**
 * This private module contains a component that returns the correct icon for a
 * notification based on the palette. If there is no result, it is assumed to
 * be a 'loading' type.
 * @module 'notification/match-icon'
 */

export function MatchNotificationIcon(props: NotifyOptions) {
  const { icons } = useCerberusContext()
  const type = (props.type || 'info') as keyof typeof icons
  const styles = toast()

  const Icon = icons[type] || ToastLoadingIcon

  return (
    <ark.div data-emphasis={props.usage} className={styles.icon}>
      <Icon />
    </ark.div>
  )
}

function ToastLoadingIcon() {
  return <Spinner size="1rem" />
}
