import { defineIcons, makeSystemConfig } from '@cerberus-design/react'
import userEvent from '@testing-library/user-event'

import {
  Calendar,
  Checkmark,
  CheckmarkOutline,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
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

export const user = userEvent.setup()

export function makeConfig() {
  const icons = defineIcons({
    accordionIndicator: ChevronDown,
    avatar: UserFilled,
    calendar: Calendar,
    calendarPrev: ChevronLeft,
    calendarNext: ChevronRight,
    close: Close,
    confirmModal: Information,
    decrement: ChevronDown,
    delete: TrashCan,
    promptModal: Information,
    waitingFileUploader: CloudUpload,
    infoNotification: Information,
    successNotification: CheckmarkOutline,
    warningNotification: WarningAlt,
    dangerNotification: WarningFilled,
    increment: ChevronUp,
    invalid: WarningFilled,
    invalidAlt: Warning,
    redo: Restart,
    selectArrow: ChevronDown,
    selectChecked: Checkmark,
    toggleChecked: Checkmark,
  })

  return makeSystemConfig({ icons })
}
