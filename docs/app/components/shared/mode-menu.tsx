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
  return (
    <>
      <MatchModeIcon mode={props.mode} />
      <Text display="inline" ps="sm" textStyle="body-sm">
        {props.mode}
      </Text>
    </>
  )
}
