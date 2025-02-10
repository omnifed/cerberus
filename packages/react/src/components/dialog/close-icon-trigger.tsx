'use client'

import { type DialogCloseTriggerProps } from '@ark-ui/react/dialog'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../IconButton'
import { DialogCloseTrigger } from './primitives'

/**
 * This module contains the close trigger for the dialog.
 * @module react/dialog
 */

export function DialogCloseIconTrigger(props: DialogCloseTriggerProps) {
  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  return (
    <DialogCloseTrigger {...props} asChild>
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
