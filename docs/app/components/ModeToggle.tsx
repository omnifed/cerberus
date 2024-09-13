'use client'

import { css } from '@cerberus-design/styled-system/css'
import { AnimatingMoonIcon } from './icons/AnimatingMoonIcon'
import { AnimatingSunIcon } from './icons/AnimatingSunIcon'
import { Show, useThemeContext } from '@cerberus-design/react'
import { focusStates } from '@cerberus-design/panda-preset'
import { useMemo } from 'react'

export function ModeToggle() {
  const { mode, updateMode } = useThemeContext()
  const ariaLabel = useMemo(() => {
    return mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
  }, [mode])

  return (
    <button
      className={css({
        rounded: 'sm',
        _focusVisible: focusStates._focusVisible,
      })}
      aria-label={ariaLabel}
      onClick={updateMode}
    >
      <Show when={mode === 'light'} fallback={<AnimatingMoonIcon />}>
        <AnimatingSunIcon />
      </Show>
    </button>
  )
}
