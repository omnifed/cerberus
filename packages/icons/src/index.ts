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
} from '@carbon/icons-react'

/**
 * The official Cerberus icons to be used in the Cerberus React components via
 * the `defineIcons` function.
 */
export const cerberusIcons = {
  accordionIndicator: ChevronDown,
  avatar: UserFilled,
  calendar: Calendar,
  calendarPrev: ChevronLeft,
  calendarNext: ChevronRight,
  close: Close,
  confirmModal: Information,
  delete: TrashCan,
  promptModal: Information,
  waitingFileUploader: CloudUpload,
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

export * from '@carbon/icons-react'
