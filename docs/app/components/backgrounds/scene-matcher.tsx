'use client'

import { useThemeContext } from '@cerberus-design/react'
import CerberusBackground from './cerberus'
import ElysiumBackground from './elysium'
import OceanusBackground from './oceanus'

export function SceneMatcher() {
  const { theme, mode } = useThemeContext()

  if (mode === 'system') return null

  if (mode === 'light') return null

  switch (theme) {
    case 'oceanus':
      return <OceanusBackground />
    case 'cerberus':
      return <CerberusBackground />
    case 'elysium':
      return <ElysiumBackground />
    default:
      return null
  }
}
