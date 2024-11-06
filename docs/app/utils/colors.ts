import type { RawThemes } from '@cerberus-design/panda-preset'
import type { ColorModes } from '@cerberus-design/react'
import space from 'color-space'

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null
}

export function hasWhiteBase(
  color: string,
  mode: ColorModes = 'light',
): boolean {
  const rgb = hexToRgb(color)
  if (!rgb) return false

  const hwb = space.rgb.hwb(rgb)

  if (mode === 'light') {
    return !(hwb[1] >= 25 && hwb[2] <= 11)
  }
  return hwb[1] >= 25 && hwb[2] <= 11
}

// theme

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
  return getColorMode(currentMode) === 'dark' ? 'min-light' : 'night-owl'
}
