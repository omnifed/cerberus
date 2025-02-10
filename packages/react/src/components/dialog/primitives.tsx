import {
  Dialog,
  type DialogBackdropProps,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogPositionerProps,
  type DialogRootProps,
  type DialogTitleProps,
  type DialogTriggerProps,
} from '@ark-ui/react/dialog'
import { cx } from '@cerberus/styled-system/css'
import {
  dialog,
  type DialogVariantProps,
} from '@cerberus/styled-system/recipes'

/**
 * This module contains the primitives of the Dialog component.
 * @module 'dialog/primitives'
 */

/**
 * The provider that controls the dialog components.
 */
export function DialogRoot(props: DialogRootProps) {
  return <Dialog.Root {...props} />
}

/**
 * The trigger that opens the dialog.
 */
export function DialogTrigger(props: DialogTriggerProps) {
  const styles = dialog()
  return (
    <Dialog.Trigger
      {...props}
      className={cx(styles.trigger, props.className)}
    />
  )
}

/**
 * The overlay of the dialog.
 */
export function DialogBackdrop(props: DialogBackdropProps) {
  const styles = dialog()
  return (
    <Dialog.Backdrop
      {...props}
      className={cx(styles.backdrop, props.className)}
    />
  )
}

/**
 * The container that positions the dialog.
 */
export function DialogPositioner(props: DialogPositionerProps) {
  const styles = dialog()
  return (
    <Dialog.Positioner
      {...props}
      className={cx(styles.positioner, props.className)}
    />
  )
}

/**
 * The visible content of the dialog.
 */
export function DialogContent(props: DialogContentProps & DialogVariantProps) {
  const { size, ...contentProps } = props
  const styles = dialog({ size })
  return (
    <Dialog.Content
      {...contentProps}
      className={cx(styles.content, contentProps.className)}
    />
  )
}

/**
 * The heading of the dialog.
 */
export function DialogHeading(props: DialogTitleProps) {
  const styles = dialog()
  return (
    <Dialog.Title {...props} className={cx(styles.title, props.className)} />
  )
}

/**
 * The description of the dialog.
 */
export function DialogDescription(props: DialogDescriptionProps) {
  const styles = dialog()
  return (
    <Dialog.Description
      {...props}
      className={cx(styles.description, props.className)}
    />
  )
}

/**
 * The trigger that closes the dialog.
 */
export function DialogCloseTrigger(props: DialogTriggerProps) {
  return <Dialog.CloseTrigger {...props} />
}

/**
 * The provider that controls the dialog components. This is a named export of
 * the DialogRoot primitive.
 */
export const DialogProvider = DialogRoot
