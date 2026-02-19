/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ThVariant {
  /**
   * @default "md"
   */
  size: 'md' | 'lg'
}

type ThVariantMap = {
  [key in keyof ThVariant]: Array<ThVariant[key]>
}

export type ThVariantProps = {
  [key in keyof ThVariant]?: ConditionalValue<ThVariant[key]> | undefined
}

export interface ThRecipe {
  __type: ThVariantProps;
  (props?: ThVariantProps): string
  raw: (props?: ThVariantProps) => ThVariantProps
  variantMap: ThVariantMap
  variantKeys: Array<keyof ThVariant>
  splitVariantProps<Props extends ThVariantProps>(
    props: Props,
  ): [ThVariantProps, Pretty<DistributiveOmit<Props, keyof ThVariantProps>>]
  getVariantProps: (props?: ThVariantProps) => ThVariantProps
}

/**
 * Styles for the Th component.
 */
export declare const th: ThRecipe
