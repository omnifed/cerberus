'use client'

import { useThemeContext } from '@cerberus-design/react'
import AcheronBackground from './acheron'
import CerberusBackground from './cerberus'
import ElysiumBackground from './elysium'
import OceanusBackground from './oceanus'
import AcheronDayBackground from './acheron-day'
import ElysiumDayBackground from './elysium-day'

export function SceneMatcher() {
  const { theme, mode } = useThemeContext()

  if (mode === 'system') return null

  if (mode === 'light') {
    switch (theme) {
      case 'oceanus':
        return <OceanusBackground />
      case 'cerberus':
        return <CerberusBackground />
      case 'elysium':
        return <ElysiumDayBackground />
      case 'acheron':
        return <AcheronDayBackground />
      default:
        return null
    }
  }

  switch (theme) {
    case 'oceanus':
      return <OceanusBackground />
    case 'cerberus':
      return <CerberusBackground />
    case 'elysium':
      return <ElysiumBackground />
    case 'acheron':
      return <AcheronBackground />
    default:
      return null
  }
}
