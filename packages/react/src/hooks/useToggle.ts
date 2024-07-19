'use client'

import { useCallback, useMemo, useState, type ChangeEvent } from 'react'

export interface UseToggleOptions {
  checked?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export interface ToggleHookReturn {
  checked: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

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
