import type { ElementType } from 'react'

/**
 * This module contains the types for the Cerberus React configuration.
 * @module config.types
 */

export interface SystemConfig {
  /**
   * The icons that will be used in Cerberus React components.
   */
  icons: DefinedIcons
}

export interface DefinedIcons<T extends IconType = IconType> {
  accordionIndicator: T
  avatar: T
  calendar: T
  calendarPrev: T
  calendarNext: T
  checkbox?: T
  close: T
  confirmModal: T
  delete: T
  promptModal: T
  waitingFileUploader: T
  fileUploader?: T
  indeterminate?: T
  infoNotification: T
  successNotification: T
  warningNotification: T
  dangerNotification: T
  invalid: T
  invalidAlt: T
  redo: T
  selectArrow: T
  toggleChecked: T
}

// types

export type IconType = ElementType
