'use client'

import { useCallback, useMemo, useState, type ChangeEvent } from 'react'

/**
 * This module provides a hook for using a toggle.
 * @module useToggle
 */

export interface UseToggleOptions {
  /**
   * The initial checked state.
   */
  checked?: string
  /**
   * Called when the checked state changes.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export interface ToggleHookReturn {
  /**
   * The checked state.
   */
  checked: string
  /**
   * A custom handler to be called when the checked state changes.
   */
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * @deprecated Will be removed in v1. Use ToggleParts instead.
 */
export function useToggle(options?: UseToggleOptions): ToggleHookReturn {
  const [checked, setChecked] = useState<string>(options?.checked ?? '')
  const onChange = options?.onChange

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget as HTMLInputElement
      setChecked((prev) => {
        return prev === target.value ? '' : target.value
      })
      onChange?.(e)
    },
    [onChange],
  )

  return useMemo(() => ({ checked, handleChange }), [checked, handleChange])
}
