'use client'

import {
  Dialog as ArkDialog,
  type DialogCloseTriggerProps,
} from '@ark-ui/react'
import { dialog } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { IconButton } from './IconButton'
import { useCerberusContext } from '../context/cerberus'

/**
 * This module contains client-side components for the Dialog family.
 * @module @cerberus-design/react/dialog
 */

export function DialogCloseIconTrigger(props: DialogCloseTriggerProps) {
  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  const styles = dialog()

  return (
    <ArkDialog.CloseTrigger
      {...props}
      className={cx(props.className, styles.closeTrigger)}
      asChild
    >
      <IconButton
        ariaLabel="Close dialog"
        palette="action"
        size="lg"
        usage="ghost"
      >
        <CloseIcon />
      </IconButton>
    </ArkDialog.CloseTrigger>
  )
}
