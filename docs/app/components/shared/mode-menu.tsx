'use client'

import {
  ColorModes,
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Text,
  useThemeContext,
} from '@cerberus-design/react'
import { getCodeTheme } from '@/app/utils/colors'
import { AnimatingMoonIcon } from '../icons/AnimatingMoonIcon'
import { AnimatingSunIcon } from '../icons/AnimatingSunIcon'
import { AnimatingSystemIcon } from '../icons/AnimatingSystemIcon'
import { Box } from '@/styled-system/jsx'

export function ModeMenu() {
  const { mode, theme, updateMode } = useThemeContext()

  const ariaLabel = `Switch to ${mode} mode`

  const handleUpdateMode = (details: { value: string }) => {
    const newMode = details.value as ColorModes
    document.documentElement.dataset.codeTheme = getCodeTheme(newMode, theme)
    updateMode(newMode)
  }

  return (
    <Menu onSelect={handleUpdateMode}>
      <MenuTrigger>
        <IconButton ariaLabel={ariaLabel}>
          <MatchModeIcon mode={mode} />
        </IconButton>
      </MenuTrigger>

      <MenuContent>
        <MenuItem cursor="pointer" value="light">
          <MatchModeContent mode="light" />
        </MenuItem>

        <MenuItem cursor="pointer" value="dark">
          <MatchModeContent mode="dark" />
        </MenuItem>

        <MenuItem cursor="pointer" value="system">
          <MatchModeContent mode="system" />
        </MenuItem>
      </MenuContent>
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

function MatchModeContent(props: { mode: ColorModes }) {
  const { mode } = useThemeContext()
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
