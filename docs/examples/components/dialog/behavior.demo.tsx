import { Dialog, type OpenChangeDetails, Portal } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

// ❌ Avoid
export function Dont() {
  const [isOpen, setOpen] = useSignal<boolean>(false)

  if (isOpen) {
    return (
      <Dialog.Root
        open={isOpen}
        onOpenChange={(e: OpenChangeDetails) => setOpen(e.open)}
      >
        <Portal>...</Portal>
      </Dialog.Root>
    )
  }

  return null
}

// ✅ Prefer
export function Do() {
  const [isOpen, setOpen] = useSignal<boolean>(false)
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e: OpenChangeDetails) => setOpen(e.open)}
      lazyMount
      unmountOnExit
    >
      <Portal>...</Portal>
    </Dialog.Root>
  )
}
