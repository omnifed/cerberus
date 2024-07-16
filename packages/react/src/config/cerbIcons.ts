import { WarningFilled, type CarbonIconType } from '@cerberus/icons'
import type { ElementType } from 'react'

export interface DefinedIcons {
  invalid: CarbonIconType | ElementType
}

export const defaultIcons: DefinedIcons = {
  invalid: WarningFilled,
}
