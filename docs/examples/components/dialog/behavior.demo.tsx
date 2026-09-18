import { DialogRoot, type OpenChangeDetails, Portal } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

// ❌ Avoid
export function Dont() {
  const [isOpen, setOpen] = useSignal<boolean>(false)

  if (isOpen) {
    return (
      <DialogRoot
        open={isOpen}
        onOpenChange={(e: OpenChangeDetails) => setOpen(e.open)}
      >
        <Portal>...</Portal>
      </DialogRoot>
    )
  }

  return null
}

// ✅ Prefer
export function Do() {
  const [isOpen, setOpen] = useSignal<boolean>(false)
  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(e: OpenChangeDetails) => setOpen(e.open)}
      lazyMount
      unmountOnExit
    >
      <Portal>...</Portal>
    </DialogRoot>
  )
}
