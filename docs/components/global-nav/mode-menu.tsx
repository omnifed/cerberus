'use client'

import { Box } from '@/styled-system/jsx'
import {
  ColorModes,
  IconButton,
  Menu,
  Text,
  useThemeContext,
} from '@cerberus-design/react'
import { AnimatingMoonIcon } from '../icons/animating-moon'
import { AnimatingSunIcon } from '../icons/animating-sun'
import { AnimatingSystemIcon } from '../icons/animating-system'
import { useEffect, useRef, useSyncExternalStore } from 'react'

export function ModeMenu() {
  const htmlRef = useRef<HTMLElement | null>(null)
  const { mode: liveMode, updateMode } = useThemeContext()
  // The server can't read the mode cookie, so the first client render matches
  // the server's default and the real icon swaps in after hydration.
  const hydrated = useSyncExternalStore(noopSubscribe, isClient, isServer)
  const mode: ColorModes = hydrated ? liveMode : 'light'

  const modeClasses: ColorModes[] = ['light', 'dark', 'system']
  const ariaLabel = `Switch to ${mode} mode`

  const handleUpdateMode = (details: { value: string }) => {
    const html = htmlRef.current
    const newMode = details.value as ColorModes
    updateMode(newMode)
    if (!html) return
    html.classList.remove(...modeClasses)
    html.classList.add(newMode)
  }

  useEffect(() => {
    if (document) htmlRef.current = document.documentElement
  }, [])

  return (
    <Menu onSelect={handleUpdateMode}>
      <Menu.Trigger asChild>
        <IconButton ariaLabel={ariaLabel} suppressHydrationWarning>
          <MatchModeIcon mode={mode} />
        </IconButton>
      </Menu.Trigger>

      <Menu.ContentGroup>
        <Menu.Item cursor="pointer" value="light">
          <MatchModeContent current={mode} mode="light" />
        </Menu.Item>

        <Menu.Item cursor="pointer" value="dark">
          <MatchModeContent current={mode} mode="dark" />
        </Menu.Item>

        <Menu.Item cursor="pointer" value="system">
          <MatchModeContent current={mode} mode="system" />
        </Menu.Item>
      </Menu.ContentGroup>
    </Menu>
  )
}

function MatchModeIcon(props: { mode: ColorModes }) {
  switch (props.mode) {
    case 'light':
      return <AnimatingSunIcon />
    case 'dark':
      return <AnimatingMoonIcon />
    case 'system':
      return <AnimatingSystemIcon />
    default:
      return null
  }
}

function MatchModeContent(props: { mode: ColorModes; current: ColorModes }) {
  const mode = props.current
  return (
    <>
      <Box
        aria-selected={props.mode === mode}
        _selected={{
          color: 'action.text.200',
        }}
      >
        <MatchModeIcon mode={props.mode} />
      </Box>
      <Text
        aria-selected={props.mode === mode}
        display="inline"
        ps="sm"
        textStyle="body-sm"
        _selected={{
          color: 'action.text.200',
        }}
      >
        {modeLabels[props.mode]}
      </Text>
    </>
  )
}

const modeLabels: Record<ColorModes, string> = {
  light: 'Day',
  dark: 'Night',
  system: 'Preview',
}

const noopSubscribe = () => () => {}
const isClient = () => true
const isServer = () => false
