import {
  Checkmark,
  CheckmarkFilled,
  CloudUpload,
  ErrorFilled,
  Information,
  InformationFilled,
  WarningFilled,
  type CarbonIconType,
} from '@cerberus/icons'
import type { ElementType } from 'react'

export type IconType = CarbonIconType | ElementType

export interface DefinedIcons {
  confirmModal?: IconType
  promptModal?: IconType
  fileUploader?: IconType
  infoNotification?: IconType
  successNotification?: IconType
  warningNotification?: IconType
  dangerNotification?: IconType
  invalid: IconType
  toggleChecked?: IconType
}

export const defaultIcons: DefinedIcons = {
  confirmModal: Information,
  promptModal: Information,
  fileUploader: CloudUpload,
  infoNotification: InformationFilled,
  successNotification: CheckmarkFilled,
  warningNotification: WarningFilled,
  dangerNotification: ErrorFilled,
  invalid: WarningFilled,
  toggleChecked: Checkmark,
}
