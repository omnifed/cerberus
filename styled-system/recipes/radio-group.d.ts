/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface RadioGroupVariant {
  /**
   * @default "horizontal"
   */
  orientation: 'horizontal' | 'vertical'
  /**
   * @default "sm"
   */
  size: 'sm' | 'md'
}

type RadioGroupVariantMap = {
  [key in keyof RadioGroupVariant]: Array<RadioGroupVariant[key]>
}

type RadioGroupSlot =
  | 'root'
  | 'label'
  | 'item'
  | 'itemText'
  | 'itemControl'
  | 'indicator'

export type RadioGroupVariantProps = {
  [key in keyof RadioGroupVariant]?:
    | ConditionalValue<RadioGroupVariant[key]>
    | undefined
}

export interface RadioGroupRecipe {
  __slot: RadioGroupSlot
  __type: RadioGroupVariantProps;
  (props?: RadioGroupVariantProps): Pretty<Record<RadioGroupSlot, string>>
  raw: (props?: RadioGroupVariantProps) => RadioGroupVariantProps
  variantMap: RadioGroupVariantMap
  variantKeys: Array<keyof RadioGroupVariant>
  splitVariantProps<Props extends RadioGroupVariantProps>(
    props: Props,
  ): [
    RadioGroupVariantProps,
    Pretty<DistributiveOmit<Props, keyof RadioGroupVariantProps>>,
  ]
  getVariantProps: (props?: RadioGroupVariantProps) => RadioGroupVariantProps
}

/**
 * The styles for the Radio components
 */
export declare const radioGroup: RadioGroupRecipe
