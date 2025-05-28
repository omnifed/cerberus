import type { DialogContentProps } from '@ark-ui/react/dialog'
import type { DialogVariantProps } from 'styled-system/recipes'
import type { WithCss } from '../../types'
import { Portal } from '../Portal'
import { DialogBackdrop, DialogContent, DialogPositioner } from './primitives'

/**
 * This module contains and abstraction of the Dialog primitives.
 * @module 'dialog'
 */

export interface DialogProps
  extends Omit<DialogContentProps, 'size' | 'style'>,
    DialogVariantProps,
    WithCss {}

/**
 * An abstraction of the Dialog primitives that controls the content of the
 * dialog. Must be used within the `DialogProvider` component.
 * @definition [Dialog docs](https://cerberus.digitalu.design/react/dialog)
 * @definition [Ark Dialog docs](https://ark-ui.com/react/docs/components/dialog)
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
export function Dialog(props: DialogProps) {
  return (
    <Portal>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent {...props} />
      </DialogPositioner>
    </Portal>
  )
}
