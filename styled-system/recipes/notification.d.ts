/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface NotificationVariant {
  /**
   * @default "info"
   */
  palette: 'info' | 'success' | 'warning' | 'danger'
}

type NotificationVariantMap = {
  [key in keyof NotificationVariant]: Array<NotificationVariant[key]>
}

type NotificationSlot =
  | 'center'
  | 'dialog'
  | 'icon'
  | 'heading'
  | 'description'
  | 'close'
  | 'closeAll'

export type NotificationVariantProps = {
  [key in keyof NotificationVariant]?:
    | ConditionalValue<NotificationVariant[key]>
    | undefined
}

export interface NotificationRecipe {
  __slot: NotificationSlot
  __type: NotificationVariantProps;
  (props?: NotificationVariantProps): Pretty<Record<NotificationSlot, string>>
  raw: (props?: NotificationVariantProps) => NotificationVariantProps
  variantMap: NotificationVariantMap
  variantKeys: Array<keyof NotificationVariant>
  splitVariantProps<Props extends NotificationVariantProps>(
    props: Props,
  ): [
    NotificationVariantProps,
    Pretty<DistributiveOmit<Props, keyof NotificationVariantProps>>,
  ]
  getVariantProps: (
    props?: NotificationVariantProps,
  ) => NotificationVariantProps
}

/**
 * The styles for Notification components
 */
export declare const notification: NotificationRecipe
