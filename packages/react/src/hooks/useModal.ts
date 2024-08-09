'use client'

import { useCallback, useMemo, useRef, type RefObject } from 'react'

/**
 * This module provides a hook for using a custom modal.
 * @module
 */

interface UseModalReturnValue {
  modalRef: RefObject<HTMLDialogElement>
  show: () => void
  close: () => void
}

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
