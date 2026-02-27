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
  OverflowMenuVertical,
  Restart,
  SortAscending,
  SortDescending,
  TrashCan,
  UserFilled,
  Warning,
  WarningAlt,
  WarningFilled,
} from '@carbon/icons-react'
import { AnimatingUploadIcon } from '../../components/AnimatingUploadIcon'
import { DefinedIcons } from '../types'
import { CheckmarkIcon, IndeterminateIcon } from './checkbox.icons'
import {
  PinLeftFilledIcon,
  PinLeftIcon,
  PinRightFilledIcon,
  PinRightIcon,
} from './pinned.icons'

/**
 * Fallback icons when there is no custom set provided by the user.
 */
export const defaultIcons: DefinedIcons = {
  accordionIndicator: ChevronDown,
  avatar: UserFilled,
  calendar: Calendar,
  calendarPrev: ChevronLeft,
  calendarNext: ChevronRight,
  checkbox: CheckmarkIcon,
  close: Close,
  confirmModal: Information,
  dangerNotification: WarningFilled,
  decrement: ChevronDown,
  delete: TrashCan,
  fileUploader: AnimatingUploadIcon,
  increment: ChevronUp,
  indeterminate: IndeterminateIcon,
  infoNotification: Information,
  invalid: WarningFilled,
  invalidAlt: Warning,
  moreVertical: OverflowMenuVertical,
  pinLeft: PinLeftIcon,
  pinLeftFilled: PinLeftFilledIcon,
  pinRight: PinRightIcon,
  pinRightFilled: PinRightFilledIcon,
  promptModal: Information,
  redo: Restart,
  selectArrow: ChevronDown,
  selectChecked: Checkmark,
  sortAsc: SortAscending,
  sortDesc: SortDescending,
  successNotification: CheckmarkOutline,
  toggleChecked: Checkmark,
  waitingFileUploader: CloudUpload,
  warningNotification: WarningAlt,
}
