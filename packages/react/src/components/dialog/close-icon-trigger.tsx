'use client'

import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../icon-button/index'
import { DialogCloseTrigger, type DialogCloseTriggerProps } from './primitives'

export type DialogCloseIconTriggerProps = DialogCloseTriggerProps

/**
 * The CloseIconTrigger component is an abstraction of `Dialog.CloseTrigger`
 * that renders a ghost IconButton labeled "Close dialog" with the Cerberus
 * `close` icon, placed in the top-right corner of the content (override with
 * style props). Children replace the icon.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/dialog)
 * @description [Ark Docs](https://ark-ui.com/docs/components/dialog)
 * @example
 * ```tsx
 * <Dialog>
 *   <Dialog.CloseIconTrigger />
 *   <Dialog.Title>Dialog Title</Dialog.Title>
 * </Dialog>
 * ```
 */
export function DialogCloseIconTrigger(props: DialogCloseIconTriggerProps) {
  const { children, ...triggerProps } = props
  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  return (
    <DialogCloseTrigger
      position="absolute"
      right="md"
      top="md"
      zIndex="decorator"
      {...triggerProps}
      asChild
    >
      <IconButton
        ariaLabel="Close dialog"
        palette="action"
        size="lg"
        usage="ghost"
      >
        {children ?? <CloseIcon />}
      </IconButton>
    </DialogCloseTrigger>
  )
}
