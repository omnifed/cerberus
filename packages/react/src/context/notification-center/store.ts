import type { Dispatch } from 'react'
import type { NotifyOptions } from '../notification-center'

/**
 * This module contains the reducer store and actions for the notification
 * center.
 * @module notification-center/store
 */

export type AddNotifyAction = {
  type: 'ADD_NOTIFICATION'
  payload: NotifyOptions
}

export type RemoveNotifyAction = {
  type: 'REMOVE_NOTIFICATION'
  payload: { id: Required<NotifyOptions['id']> }
}

export type ClearNotifyAction = { type: 'CLEAR_NOTIFICATIONS' }

/**
 * The reducer for the notification center.
 * @param state An array of notifications.
 * @param action An action to take on the notifications.
 * @returns The new state of the notifications.
 */
export function notificationCenterReducer(
  state: NotifyOptions[],
  action: AddNotifyAction | RemoveNotifyAction | ClearNotifyAction,
): NotifyOptions[] {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, action.payload]
    case 'REMOVE_NOTIFICATION':
      return state.filter((n) => n.id !== action.payload.id)
    case 'CLEAR_NOTIFICATIONS':
      return []
    default:
      return state
  }
}

/**
 * Adds a notification to the notification center.
 * @param dispatch The dispatch function.
 * @param options The notification options.
 */
export function addNotification(
  dispatch: Dispatch<AddNotifyAction>,
  options: NotifyOptions,
) {
  dispatch({ type: 'ADD_NOTIFICATION', payload: options })
}

/**
 * Removes a notification from the notification center.
 * @param dispatch The dispatch function.
 * @param id The id of the notification to remove.
 */
export function removeNotification(
  dispatch: Dispatch<RemoveNotifyAction>,
  id: Required<NotifyOptions['id']>,
) {
  dispatch({ type: 'REMOVE_NOTIFICATION', payload: { id } })
}

/**
 * Clears the notification state.
 * @param dispatch The dispatch function.
 */
export function clearNotificationState(dispatch: Dispatch<ClearNotifyAction>) {
  dispatch({ type: 'CLEAR_NOTIFICATIONS' })
}
