'use client'

import {
  CerberusProvider,
  defineIcons,
  makeSystemConfig,
} from '@cerberus-design/react'
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
import type { PropsWithChildren } from 'react'

/**
 * This module provides a Cerberus configuration component which has to be used
 * in a client abstraction because of R19 rules around data passing into props.
 */

const icons = defineIcons({
  accordionIndicator: ChevronDown,
  avatar: UserFilled,
  calendar: Calendar,
  calendarPrev: ChevronLeft,
  calendarNext: ChevronRight,
  close: Close,
  confirmModal: Information,
  delete: TrashCan,
  decrement: ChevronDown,
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

const config = makeSystemConfig({
  icons,
})

export default function CerberusConfig(props: PropsWithChildren<{}>) {
  return <CerberusProvider config={config}>{props.children}</CerberusProvider>
}
