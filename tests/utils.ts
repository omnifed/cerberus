import { defineIcons, makeSystemConfig } from '@cerberus-design/react'
import { configure } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

export const user = userEvent.setup()

export function setupStrictMode() {
  configure({ reactStrictMode: true })
}

export function makeConfig() {
  const icons = defineIcons({
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
    selectChecked: Checkmark,
    toggleChecked: Checkmark,
  })

  return makeSystemConfig({ icons })
}
