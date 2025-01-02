import type { NotifyOptions } from '../notification-center'

export type NotificationsStore = NotificationOption[]

export type NotificationOption = NotifyOptions & {
  state: 'open' | 'closed'
}

// Actions

export type AddNotifyAction = {
  type: 'ADD_NOTIFICATION'
  payload: NotificationOption
}

export type RemoveNotifyAction = {
  type: 'REMOVE_NOTIFICATION'
  payload: { id: Required<NotificationOption['id']> }
}

export type UpdateNotifyAction = {
  type: 'UPDATE_NOTIFICATION'
  payload: {
    id: Required<NotificationOption['id']>
  } & Partial<NotificationOption>
}

export type ClearNotifyAction = { type: 'CLEAR_NOTIFICATIONS' }
