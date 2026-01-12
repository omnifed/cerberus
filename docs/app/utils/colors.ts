import type { RawThemes } from '@cerberus/tokens'
import type { ColorModes } from '@cerberus-design/react'

interface ModeOptions {
  light: string
  dark: string
  system: string
}

const SYNTAX_MAP: Record<RawThemes, ModeOptions> = {
  cerberus: {
    light: 'min-light',
    dark: 'night-owl',
    system: 'night-owl',
  },
  acheron: {
    light: 'everforest-light',
    dark: 'everforest-dark',
    system: 'everforest-dark',
  },
  elysium: {
    light: 'vitesse-light',
    dark: 'vitesse-black',
    system: 'vitesse-black',
  },
}

export function getCodeTheme(
  currentMode: ColorModes,
  currentTheme: RawThemes,
): string {
  return SYNTAX_MAP[currentTheme][currentMode]
}
