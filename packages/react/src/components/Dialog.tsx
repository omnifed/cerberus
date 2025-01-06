import {
  Dialog as ArkDialog,
  type DialogContentProps as ArkDialogContentProps,
  type DialogRootProps,
  type DialogTitleProps,
} from '@ark-ui/react'
import {
  dialog,
  type DialogVariantProps,
} from '@cerberus/styled-system/recipes'
import type { PropsWithChildren } from 'react'
import { Portal } from './Portal'
import { cx } from '@cerberus/styled-system/css'

export type DialogProps = DialogRootProps

/**
 * The provider that controls the dialog components.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @example
 * ```tsx
 * <DialogProvider>
 *  <DialogTrigger asChild>
 *    <Button>Open Dialog</Button>
 *  </DialogTrigger>
 *  <Dialog>
 *    <Text>Dialog Content</Text>
 *    <DialogCloseTrigger>Close</DialogCloseTrigger>
 *  </Dialog>
 * </DialogProvider>
 * ```
 */
export function DialogProvider(props: PropsWithChildren<DialogProps>) {
  return <ArkDialog.Root {...props} />
}

export interface DialogContentProps
  extends ArkDialogContentProps,
    DialogVariantProps {}

/**
 * The content of the dialog. Must be used within the `DialogProvider` component.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @example
 * ```tsx
 * <DialogProvider>
 *   <DialogTrigger asChild>
 *    <Button>Open Dialog</Button>
 *  </DialogTrigger>
 *  <Dialog>
 *    <Text>Dialog Content</Text>
 *  </Dialog>
 * </DialogProvider>
 * ```
 */
export function Dialog(props: DialogContentProps) {
  const styles = dialog()
  return (
    <Portal>
      <DialogBackdrop className={styles.backdrop} />
      <DialogPositioner className={styles.positioner}>
        <DialogContent className={styles.content} {...props} />
      </DialogPositioner>
    </Portal>
  )
}

/**
 * The heading of the dialog. Must be used within the `DialogContent` component.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @example
 * ```tsx
 * <DialogProvider>
 *   <DialogTrigger asChild>
 *    <Button>Open Dialog</Button>
 *  </DialogTrigger>
 *  <Dialog>
 *    <DialogHeading>Dialog Title</DialogHeading>
 *    <Text>Dialog Content</Text>
 *  </Dialog>
 * </DialogProvider>
 * ```
 */
export function DialogHeading(props: DialogTitleProps) {
  const styles = dialog()
  return (
    <ArkDialog.Title {...props} className={cx(props.className, styles.title)} />
  )
}

/**
 * The description of the dialog. Must be used within the `DialogContent` component.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @example
 * ```tsx
 * <DialogProvider>
 *   <DialogTrigger asChild>
 *    <Button>Open Dialog</Button>
 *  </DialogTrigger>
 *  <Dialog>
 *    <DialogHeading>Dialog Title</DialogHeading>
 *    <DialogDescription>Dialog Description</DialogDescription>
 *  </Dialog>
 * </DialogProvider>
 * ```
 */
export function DialogDescription(props: DialogTitleProps) {
  return <ArkDialog.Description {...props} />
}

/**
 * The trigger that opens the dialog. Must be used within the `DialogProvider`
 * component.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @example
 * ```tsx
 * <DialogTrigger asChild>
 *  <Button>Open Dialog</Button>
 * </DialogTrigger>
 * ```
 */
export const DialogTrigger = ArkDialog.Trigger

/**
 * The trigger that closes the dialog. Must be used within the `DialogProvider`
 * component.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @example
 * ```tsx
 * <DialogProvider>
 *   <DialogTrigger asChild>
 *    <Button>Open Dialog</Button>
 *  </DialogTrigger>
 *  <Dialog>
 *    <Text>Dialog Content</Text>
 *    <DialogCloseTrigger>Close</DialogCloseTrigger>
 *  </Dialog>
 * </DialogProvider>
 * ```
 */
export const DialogCloseTrigger = ArkDialog.CloseTrigger

/**
 * The backdrop of the dialog. Must be used within the `DialogProvider`
 * component.
 */
export const DialogBackdrop = ArkDialog.Backdrop

/**
 * The positioner of the dialog. Must be used within the `DialogProvider`
 * component.
 */
export const DialogPositioner = ArkDialog.Positioner

/**
 * The content of the dialog. Must be used within the `DialogProvider`
 * component.
 */
export const DialogContent = ArkDialog.Content
