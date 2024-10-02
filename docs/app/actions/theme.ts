'use server'

import type { ColorModes } from '@cerberus-design/react'
import type { ThemeName } from '@/styled-system/themes'
import { getCookie } from './cookies'

export async function getCachedTheme() {
  const themeName = (await getCookie('theme')) as ThemeName
  const colorModeName = (await getCookie('colorMode')) as ColorModes | undefined
  return {
    themeName,
    colorModeName,
    cached: Boolean(themeName && colorModeName),
  }
}
