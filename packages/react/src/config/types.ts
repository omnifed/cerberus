import type { ElementType } from 'react'

/**
 * This module contains the types for the Cerberus React configuration.
 * @module config.types
 */

export interface SystemConfig {
  /**
   * The icons that will be used in Cerberus React components.
   */
  icons: Required<DefinedIcons>
}

export interface DefinedIcons<T extends IconType = IconType> {
  accordionIndicator?: T
  avatar?: T
  calendar?: T
  calendarPrev?: T
  calendarNext?: T
  caretDown?: T
  checkbox?: T
  close?: T
  confirmModal?: T
  decrement?: T
  delete?: T
  dangerNotification?: T
  fileUploader?: T
  filter?: T
  indeterminate?: T
  increment?: T
  infoNotification?: T
  invalid?: T
  invalidAlt?: T
  moreVertical?: T
  pinLeft?: T
  pinLeftFilled?: T
  pinRight?: T
  pinRightFilled?: T
  promptModal?: T
  redo?: T
  selectArrow?: T
  selectChecked?: T
  sortAsc?: T
  sortDesc?: T
  successNotification?: T
  table?: T
  toggleChecked?: T
  waitingFileUploader?: T
  warningNotification?: T
}

// types

export type IconType = ElementType
