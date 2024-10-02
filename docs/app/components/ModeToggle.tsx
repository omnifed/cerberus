'use client'

import { css } from '@cerberus-design/styled-system/css'
import { AnimatingMoonIcon } from './icons/AnimatingMoonIcon'
import { AnimatingSunIcon } from './icons/AnimatingSunIcon'
import { Show, useThemeContext } from '@cerberus-design/react'
import { focusStates } from '@cerberus-design/panda-preset'
import { useCallback, useMemo, type MouseEvent } from 'react'

export function ModeToggle() {
  const { mode, updateMode } = useThemeContext()
  const ariaLabel = useMemo(() => {
    return mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
  }, [mode])

  const handleUpdateMode = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const currentMode = e.currentTarget.value
    updateMode(currentMode === 'light' ? 'dark' : 'light')
  }, [])

  return (
    <button
      className={css({
        rounded: 'sm',
        _focusVisible: focusStates._focusVisible,
      })}
      aria-label={ariaLabel}
      onClick={handleUpdateMode}
      value={mode}
    >
      <Show when={mode === 'light'} fallback={<AnimatingMoonIcon />}>
        <AnimatingSunIcon />
      </Show>
    </button>
  )
}
