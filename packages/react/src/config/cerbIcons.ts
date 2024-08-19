import {
  Checkmark,
  CloudUpload,
  Information,
  WarningFilled,
  type CarbonIconType,
} from '@cerberus/icons'
import type { ElementType } from 'react'

export interface DefinedIcons {
  confirmModal?: CarbonIconType | ElementType
  fileUploader?: CarbonIconType | ElementType
  promptModal?: CarbonIconType | ElementType
  invalid: CarbonIconType | ElementType
  toggleChecked?: CarbonIconType | ElementType
}

export const defaultIcons: DefinedIcons = {
  confirmModal: Information,
  fileUploader: CloudUpload,
  promptModal: Information,
  invalid: WarningFilled,
  toggleChecked: Checkmark,
}
