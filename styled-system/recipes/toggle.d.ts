/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ToggleVariant {
  /**
   * @default "sm"
   */
  size: 'sm' | 'lg'
}

type ToggleVariantMap = {
  [key in keyof ToggleVariant]: Array<ToggleVariant[key]>
}

type ToggleSlot = 'track' | 'container' | 'input' | 'thumb'

export type ToggleVariantProps = {
  [key in keyof ToggleVariant]?:
    | ConditionalValue<ToggleVariant[key]>
    | undefined
}

export interface ToggleRecipe {
  __slot: ToggleSlot
  __type: ToggleVariantProps;
  (props?: ToggleVariantProps): Pretty<Record<ToggleSlot, string>>
  raw: (props?: ToggleVariantProps) => ToggleVariantProps
  variantMap: ToggleVariantMap
  variantKeys: Array<keyof ToggleVariant>
  splitVariantProps<Props extends ToggleVariantProps>(
    props: Props,
  ): [
    ToggleVariantProps,
    Pretty<DistributiveOmit<Props, keyof ToggleVariantProps>>,
  ]
  getVariantProps: (props?: ToggleVariantProps) => ToggleVariantProps
}

/**
 * The styles for the Toggle component
 */
export declare const toggle: ToggleRecipe
