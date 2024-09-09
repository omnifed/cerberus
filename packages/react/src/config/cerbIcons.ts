import {
  Checkmark,
  CheckmarkFilled,
  ChevronDown,
  CloudUpload,
  ErrorFilled,
  Information,
  InformationFilled,
  WarningFilled,
  type CarbonIconType,
} from '@cerberus/icons'
import type { ElementType } from 'react'
import { CheckmarkIcon, IndeterminateIcon } from './icons/checkbox.icons'

export type IconType = CarbonIconType | ElementType

export interface DefinedIcons {
  checkbox?: IconType
  confirmModal?: IconType
  promptModal?: IconType
  fileUploader?: IconType
  indeterminate?: IconType
  infoNotification?: IconType
  successNotification?: IconType
  warningNotification?: IconType
  dangerNotification?: IconType
  invalid: IconType
  selectArrow?: IconType
  toggleChecked?: IconType
}

export const defaultIcons: DefinedIcons = {
  checkbox: CheckmarkIcon,
  confirmModal: Information,
  promptModal: Information,
  fileUploader: CloudUpload,
  indeterminate: IndeterminateIcon,
  infoNotification: InformationFilled,
  successNotification: CheckmarkFilled,
  warningNotification: WarningFilled,
  dangerNotification: ErrorFilled,
  invalid: WarningFilled,
  selectArrow: ChevronDown,
  toggleChecked: Checkmark,
}
