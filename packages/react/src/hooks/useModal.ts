'use client'

import { useCallback, useMemo, useRef, useState, type RefObject } from 'react'

/**
 * This module provides a hook for using a custom modal.
 * @module
 */

export interface UseModalReturnValue {
  /**
   * The ref for the modal.
   */
  modalRef: RefObject<HTMLDialogElement>
  /**
   * Shows the modal.
   */
  show: () => void
  /**
   * Closes the modal.
   */
  close: () => void
  /**
   * Whether the modal is open based on the show and close methods.
   */
  isOpen: boolean
}

/**
 * Provides a hook for using a custom modal via the native dialog element
 * methods.
 *
 * Cerberus modals use the native dialog element. This hook
 * does not control the modal via React state but rather by calling the
 * native dialog element's `showModal` and `close` methods.
 *
 * @memberof module:Modal
 * @see https://cerberus.digitalu.design/react/modal
 * @description [Moz Dev Dialog Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal)
 */
export function useModal(): UseModalReturnValue {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const show = useCallback(() => {
    modalRef.current?.showModal()
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    modalRef.current?.close()
    setIsOpen(false)
  }, [])

  return useMemo(() => {
    return {
      modalRef,
      show,
      close,
      isOpen,
    }
  }, [modalRef, show, close, isOpen])
}
