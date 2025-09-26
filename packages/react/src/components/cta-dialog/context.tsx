'use client'

import { createContext, type ReactNode } from 'react'
import type { CTAModalActionReturn } from './utils'

/**
 * This module provides the context for the cta modal.
 * @module
 */

export interface ShowCTAModalOptions {
  /**
   * The heading of the cta modal.
   */
  heading: string
  /**
   * The description of the cta modal.
   */
  description?: string
  /**
   * The content of the cta modal.
   */
  content?: ReactNode
  /**
   * The icon used for the modal Avatar.
   */
  icon?: ReactNode
  /**
   * The actions for the cta modal. Requires 2 actions.
   */
  actions: CTAModalActionReturn
}

export interface CTAModalValue {
  show: (options: ShowCTAModalOptions) => void
}

export const CTAModalContext = createContext<CTAModalValue | null>(null)
