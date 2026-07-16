'use client'

import { useThemeContext } from '@cerberus-design/react'
import CerberusBackground from './cerberus'
import OceanusBackground from './oceanus'

export function SceneMatcher() {
  const { theme, mode } = useThemeContext()

  if (mode === 'light' || mode === 'system') return null

  switch (theme) {
    case 'oceanus':
      return <OceanusBackground />
    case 'cerberus':
      return <CerberusBackground />
    default:
      return null
  }
}
