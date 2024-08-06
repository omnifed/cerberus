import {
  Checkmark,
  Information,
  WarningFilled,
  type CarbonIconType,
} from '@cerberus/icons'
import type { ElementType } from 'react'

export interface DefinedIcons {
  confirmModal?: CarbonIconType | ElementType
  invalid: CarbonIconType | ElementType
  toggleChecked?: CarbonIconType | ElementType
}

export const defaultIcons: DefinedIcons = {
  confirmModal: Information,
  invalid: WarningFilled,
  toggleChecked: Checkmark,
}
