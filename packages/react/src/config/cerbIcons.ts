import {
  Checkmark,
  CheckmarkFilled,
  ChevronDown,
  CloseFilled,
  CloudUpload,
  ErrorFilled,
  Information,
  InformationFilled,
  Restart,
  TrashCan,
  Warning,
  WarningFilled,
  type CarbonIconType,
} from '@cerberus/icons'
import type { ElementType } from 'react'
import { CheckmarkIcon, IndeterminateIcon } from './icons/checkbox.icons'

export type IconType = CarbonIconType | ElementType

export interface DefinedIcons {
  checkbox?: IconType
  close?: IconType
  confirmModal?: IconType
  delete?: IconType
  promptModal?: IconType
  fileUploader?: IconType
  indeterminate?: IconType
  infoNotification?: IconType
  successNotification?: IconType
  warningNotification?: IconType
  dangerNotification?: IconType
  invalid: IconType
  invalidAlt?: IconType
  redo?: IconType
  selectArrow?: IconType
  toggleChecked?: IconType
}

export const defaultIcons: DefinedIcons = {
  checkbox: CheckmarkIcon,
  close: CloseFilled,
  confirmModal: Information,
  delete: TrashCan,
  promptModal: Information,
  fileUploader: CloudUpload,
  indeterminate: IndeterminateIcon,
  infoNotification: InformationFilled,
  successNotification: CheckmarkFilled,
  warningNotification: WarningFilled,
  dangerNotification: ErrorFilled,
  invalid: WarningFilled,
  invalidAlt: Warning,
  redo: Restart,
  selectArrow: ChevronDown,
  toggleChecked: Checkmark,
}
