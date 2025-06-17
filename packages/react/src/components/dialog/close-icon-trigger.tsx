'use client'

import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../icon-button/index'
import { DialogCloseTrigger, type DialogCloseTriggerProps } from './primitives'
import { dialog } from 'styled-system/recipes'
import { cx } from 'styled-system/css'

/**
 * This module contains the close trigger for the dialog.
 * @module react/dialog
 */

export function DialogCloseIconTrigger(props: DialogCloseTriggerProps) {
  const styles = dialog()

  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  return (
    <DialogCloseTrigger
      {...props}
      className={cx(styles.closeTrigger, props.className)}
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
    </DialogCloseTrigger>
  )
}
