import type { Dispatch } from 'react'
import type {
  AddNotifyAction,
  ClearNotifyAction,
  NotificationsStore,
  RemoveNotifyAction,
  UpdateNotifyAction,
} from './types'

/**
 * This module contains the reducer store and actions for the notification
 * center.
 * @module notification-center/store
 */

/**
 * The reducer for the notification center.
 * @param state An array of notifications.
 * @param action An action to take on the notifications.
 * @returns The new state of the notifications.
 */
export function notificationCenterReducer(
  state: NotificationsStore,
  action:
    | AddNotifyAction
    | RemoveNotifyAction
    | UpdateNotifyAction
    | ClearNotifyAction,
): NotificationsStore {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, action.payload]
    case 'REMOVE_NOTIFICATION':
      return state.filter((n) => n.id !== action.payload.id)
    case 'UPDATE_NOTIFICATION':
      return state.map((n) =>
        n.id === action.payload.id ? { ...n, ...action.payload } : n,
      )
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
  options: AddNotifyAction['payload'],
) {
  dispatch({ type: 'ADD_NOTIFICATION', payload: { ...options } })
}

/**
 * Removes a notification from the notification center.
 * @param dispatch The dispatch function.
 * @param id The id of the notification to remove.
 */
export function removeNotification(
  dispatch: Dispatch<RemoveNotifyAction>,
  id: RemoveNotifyAction['payload']['id'],
) {
  dispatch({ type: 'REMOVE_NOTIFICATION', payload: { id } })
}

/**
 * Updates a notification in the notification center.
 * @param dispatch The dispatch function.
 * @param options The notification options.
 */
export function updateNotificationState(
  dispatch: Dispatch<UpdateNotifyAction>,
  options: UpdateNotifyAction['payload'],
) {
  dispatch({ type: 'UPDATE_NOTIFICATION', payload: { ...options } })
}

/**
 * Clears the notification state.
 * @param dispatch The dispatch function.
 */
export function clearNotificationState(dispatch: Dispatch<ClearNotifyAction>) {
  dispatch({ type: 'CLEAR_NOTIFICATIONS' })
}
