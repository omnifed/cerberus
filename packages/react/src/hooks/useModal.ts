'use client'

import { useCallback, useMemo, useRef, type RefObject } from 'react'

/**
 * This module provides a hook for using a custom modal.
 * @module
 */

interface UseModalReturnValue {
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
}

/**
 * Provides a hook for using a custom modal.
 * @memberof module:Modal
 * @returns The modal hook.
 */
export function useModal(): UseModalReturnValue {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const show = useCallback(() => {
    modalRef.current?.showModal()
  }, [])

  const close = useCallback(() => {
    modalRef.current?.close()
  }, [])

  return useMemo(() => {
    return {
      modalRef,
      show,
      close,
    }
  }, [modalRef, show, close])
}
