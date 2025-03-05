import type { KeyboardEvent, KeyboardEventHandler, RefObject } from 'react'

export function trapFocus(
  modalRef: RefObject<HTMLDialogElement | null>,
): KeyboardEventHandler<HTMLDialogElement> {
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  const focusable = Array.from(
    modalRef.current?.querySelectorAll(focusableElements) ?? [],
  )
  const firstFocusable = focusable[0] as HTMLElement
  const lastFocusable = focusable[focusable.length - 1] as HTMLElement

  return function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus()
          event.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus()
          event.preventDefault()
        }
      }
    }
  }
}
