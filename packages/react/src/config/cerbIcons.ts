import {
  Calendar,
  Checkmark,
  CheckmarkOutline,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Close,
  CloudUpload,
  Information,
  Restart,
  TrashCan,
  UserFilled,
  Warning,
  WarningAlt,
  WarningFilled,
  type CarbonIconType,
} from '@cerberus/icons'
import type { ElementType } from 'react'
import { CheckmarkIcon, IndeterminateIcon } from './icons/checkbox.icons'
import { AnimatingUploadIcon } from '../components/AnimatingUploadIcon'

export type IconType = CarbonIconType | ElementType

export interface DefinedIcons {
  avatar?: IconType
  calendar?: IconType
  calendarPrev?: IconType
  calendarNext?: IconType
  checkbox?: IconType
  close?: IconType
  confirmModal?: IconType
  delete?: IconType
  promptModal?: IconType
  waitingFileUploader?: IconType
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
  avatar: UserFilled,
  calendar: Calendar,
  calendarPrev: ChevronLeft,
  calendarNext: ChevronRight,
  checkbox: CheckmarkIcon,
  close: Close,
  confirmModal: Information,
  delete: TrashCan,
  promptModal: Information,
  waitingFileUploader: CloudUpload,
  fileUploader: AnimatingUploadIcon,
  indeterminate: IndeterminateIcon,
  infoNotification: Information,
  successNotification: CheckmarkOutline,
  warningNotification: WarningAlt,
  dangerNotification: WarningFilled,
  invalid: WarningFilled,
  invalidAlt: Warning,
  redo: Restart,
  selectArrow: ChevronDown,
  toggleChecked: Checkmark,
}
