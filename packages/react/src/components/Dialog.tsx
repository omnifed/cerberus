import {
  Dialog as ArkDialog,
  type DialogContentProps,
  type DialogRootProps,
  type DialogTitleProps,
} from '@ark-ui/react'
import { css } from '@cerberus/styled-system/css'
import { type ModalVariantProps } from '@cerberus/styled-system/recipes'
import type { PropsWithChildren } from 'react'
import { Portal } from './Portal'

export type DialogProps = DialogRootProps & ModalVariantProps

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
  return (
    <Portal>
      <ArkDialog.Backdrop
        className={css({
          backdropFilter: 'blur(4px)',
          background: 'page.backdrop.initial',
          height: '100vh',
          left: '0',
          position: 'fixed',
          top: '0',
          width: '100vw',
          zIndex: 'overlay',
          _open: {
            animation: 'backdrop-in',
          },
          _closed: {
            animation: 'backdrop-out',
          },
        })}
      />
      <ArkDialog.Positioner
        className={css({
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          left: '0',
          overflow: 'auto',
          position: 'fixed',
          top: '0',
          width: '100vw',
          height: '100dvh',
          zIndex: 'modal',
        })}
      >
        <ArkDialog.Content
          className={css({
            bgColor: 'page.surface.100',
            borderRadius: 'l3',
            boxShadow: 'lg',
            minW: 'sm',
            position: 'relative',
            _open: {
              animation: 'dialog-in',
            },
            _closed: {
              animation: 'dialog-out',
            },
          })}
        >
          {props.children}
        </ArkDialog.Content>
      </ArkDialog.Positioner>
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
  return <ArkDialog.Title {...props} />
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
