import type { RawThemes } from '@cerberus/tokens'
import type { ColorModes } from '@cerberus-design/react'

export function getColorMode(currentMode: ColorModes): ColorModes {
  switch (currentMode) {
    case 'light':
      return 'dark'
    case 'dark':
      return 'system'
    case 'system':
      return 'light'
    default:
      return 'system'
  }
}

export function getCodeTheme(
  currentMode: ColorModes,
  currentTheme: RawThemes,
): string {
  if (currentTheme === 'acheron') {
    return getColorMode(currentMode) === 'dark'
      ? 'everforest-light'
      : 'everforest-dark'
  }

  if (currentTheme === 'elysium') {
    return getColorMode(currentMode) === 'dark'
      ? 'vitesse-light'
      : 'vitesse-black'
  }

  return getColorMode(currentMode) === 'dark' ? 'min-light' : 'night-owl'
}
