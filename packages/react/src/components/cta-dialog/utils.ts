import type { MouseEventHandler, ReactNode } from 'react'

/**
 * This module provide utility functions for the cta modal.
 * @module 'react/cta-modal/utils'
 */

export type CTAButtonAction = {
  /**
   * The text of the button.
   */
  text: string
  /**
   * The onClick handler for the button.
   */
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export type CTAModalAction = (CTAButtonAction | ReactNode)[]

export interface CTAModalActionReturn {
  /**
   * The type of the action content.
   */
  type: 'reactNode' | 'btnAction'
  /**
   * The actions for the cta modal. Max of 2 actions.
   */
  _actions: CTAModalAction
}

/**
 * Creates the action data to pass to the cta modal `show` method.
 */
export function createCTAModalActions(
  providedActions: CTAModalAction,
): CTAModalActionReturn {
  if (providedActions.length !== 2) {
    throw new Error('CTAModal must include 2 actions')
  }

  if (
    providedActions.every(
      (action) => (action as unknown as CTAButtonAction)?.handleClick,
    )
  ) {
    return {
      type: 'btnAction',
      _actions: providedActions as CTAButtonAction[],
    }
  }

  return {
    type: 'reactNode',
    _actions: providedActions as ReactNode[],
  }
}
