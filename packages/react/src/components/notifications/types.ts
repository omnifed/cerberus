import { ToastOptions } from '@ark-ui/react/toast'

export type NotifyOptionsType = ToastOptions['type']

export interface NotifyOptions extends ToastOptions {
  usage?: 'subtle' | 'default'
}
