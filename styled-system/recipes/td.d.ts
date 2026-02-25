/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface TdVariant {
  /**
   * @default "md"
   */
  size: 'sm' | 'md' | 'lg'
}

type TdVariantMap = {
  [key in keyof TdVariant]: Array<TdVariant[key]>
}

export type TdVariantProps = {
  [key in keyof TdVariant]?: ConditionalValue<TdVariant[key]> | undefined
}

export interface TdRecipe {
  __type: TdVariantProps;
  (props?: TdVariantProps): string
  raw: (props?: TdVariantProps) => TdVariantProps
  variantMap: TdVariantMap
  variantKeys: Array<keyof TdVariant>
  splitVariantProps<Props extends TdVariantProps>(
    props: Props,
  ): [TdVariantProps, Pretty<DistributiveOmit<Props, keyof TdVariantProps>>]
  getVariantProps: (props?: TdVariantProps) => TdVariantProps
}

/**
 * Styles for the Td component.
 */
export declare const td: TdRecipe
