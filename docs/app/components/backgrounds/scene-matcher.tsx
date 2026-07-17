'use client'

import { useThemeContext } from '@cerberus-design/react'
import AcheronBackground from './acheron'
import AcheronDayBackground from './acheron-day'
import CerberusBackground from './cerberus'
import CerberusDayBackground from './cerberus-day'
import ElysiumBackground from './elysium'
import ElysiumDayBackground from './elysium-day'
import OceanusBackground from './oceanus'
import OceanusDayBackground from './oceanus-day'

export function SceneMatcher() {
  const { theme, mode } = useThemeContext()

  if (mode === 'system') return null

  if (mode === 'light') {
    switch (theme) {
      case 'oceanus':
        return <OceanusDayBackground />
      case 'cerberus':
        return <CerberusDayBackground />
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
