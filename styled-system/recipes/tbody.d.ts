/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface TbodyVariant {
  /**
   * @default "default"
   */
  decoration: 'zebra' | 'default'
}

type TbodyVariantMap = {
  [key in keyof TbodyVariant]: Array<TbodyVariant[key]>
}

export type TbodyVariantProps = {
  [key in keyof TbodyVariant]?: ConditionalValue<TbodyVariant[key]> | undefined
}

export interface TbodyRecipe {
  __type: TbodyVariantProps;
  (props?: TbodyVariantProps): string
  raw: (props?: TbodyVariantProps) => TbodyVariantProps
  variantMap: TbodyVariantMap
  variantKeys: Array<keyof TbodyVariant>
  splitVariantProps<Props extends TbodyVariantProps>(
    props: Props,
  ): [
    TbodyVariantProps,
    Pretty<DistributiveOmit<Props, keyof TbodyVariantProps>>,
  ]
  getVariantProps: (props?: TbodyVariantProps) => TbodyVariantProps
}

/**
 * Styles for the Tbody component.
 */
export declare const tbody: TbodyRecipe
