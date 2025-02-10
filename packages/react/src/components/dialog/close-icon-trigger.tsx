'use client'

import { type DialogCloseTriggerProps } from '@ark-ui/react/dialog'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../IconButton'
import { DialogCloseTrigger } from './primitives'
import { dialog } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'

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
