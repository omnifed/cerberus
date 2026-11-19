'use client'

import { extractParts } from '../../internal/extract-parts'
import { Portal } from '../portal/index'
import {
  DialogBackdrop,
  DialogContent,
  DialogPositioner,
  type DialogContentProps,
} from './primitives'

const PARTS = {
  backdrop: DialogBackdrop,
  positioner: DialogPositioner,
}

// `size` is the recipe variant on `Dialog.Root`. On the content it would be the
// Panda `size` utility (width and height), so v1's `<Dialog size="sm">` must
// fail to compile instead of silently sizing the content box
export type DialogProps = Omit<DialogContentProps, 'size'>

/**
 * The Dialog component is an abstraction of the primitives that renders the
 * dialog content inside a Portal, with the backdrop and positioner. It must be
 * used within `Dialog.Root` (or `Dialog.RootProvider`), which takes the
 * `size` variant. Its props go to `Dialog.Content`; non-part children render
 * as the content. Self-closing `Dialog.Backdrop` or `Dialog.Positioner`
 * children patch that part's props.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/dialog)
 * @description [Ark Docs](https://ark-ui.com/docs/components/dialog)
 * @example
 * ```tsx
 * <Dialog.Root size="sm">
 *   <Dialog.Trigger asChild>
 *     <Button>Open Dialog</Button>
 *   </Dialog.Trigger>
 *   <Dialog>
 *     <Dialog.CloseIconTrigger />
 *     <Dialog.Title>Dialog Title</Dialog.Title>
 *     <Dialog.Description>Dialog Description</Dialog.Description>
 *   </Dialog>
 * </Dialog.Root>
 * ```
 */
export function DialogEl(props: DialogProps) {
  const { children, ...contentProps } = props
  const { parts, content } = extractParts(children, PARTS)

  // The positioner always renders the content; a part child only patches props
  const { children: _positionerChildren, ...positionerProps } =
    parts.positioner ?? {}

  return (
    <Portal>
      <DialogBackdrop {...parts.backdrop} />
      <DialogPositioner {...positionerProps}>
        <DialogContent {...contentProps}>{content}</DialogContent>
      </DialogPositioner>
    </Portal>
  )
}
