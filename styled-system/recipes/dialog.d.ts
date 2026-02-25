/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface DialogVariant {
  /**
   * @default "md"
   */
  size: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'full'
}

type DialogVariantMap = {
  [key in keyof DialogVariant]: Array<DialogVariant[key]>
}

type DialogSlot =
  | 'trigger'
  | 'backdrop'
  | 'positioner'
  | 'content'
  | 'title'
  | 'description'
  | 'closeTrigger'

export type DialogVariantProps = {
  [key in keyof DialogVariant]?:
    | ConditionalValue<DialogVariant[key]>
    | undefined
}

export interface DialogRecipe {
  __slot: DialogSlot
  __type: DialogVariantProps;
  (props?: DialogVariantProps): Pretty<Record<DialogSlot, string>>
  raw: (props?: DialogVariantProps) => DialogVariantProps
  variantMap: DialogVariantMap
  variantKeys: Array<keyof DialogVariant>
  splitVariantProps<Props extends DialogVariantProps>(
    props: Props,
  ): [
    DialogVariantProps,
    Pretty<DistributiveOmit<Props, keyof DialogVariantProps>>,
  ]
  getVariantProps: (props?: DialogVariantProps) => DialogVariantProps
}

/**
 * The styles for Dialog components
 */
export declare const dialog: DialogRecipe
