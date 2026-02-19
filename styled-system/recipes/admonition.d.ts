/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface AdmonitionVariant {
  /**
   * @default "page"
   */
  palette: 'page' | 'info' | 'success' | 'warning' | 'danger'
  /**
   * @default "filled"
   */
  usage: 'filled' | 'outlined'
}

type AdmonitionVariantMap = {
  [key in keyof AdmonitionVariant]: Array<AdmonitionVariant[key]>
}

type AdmonitionSlot = 'root' | 'indicator' | 'heading' | 'description'

export type AdmonitionVariantProps = {
  [key in keyof AdmonitionVariant]?: AdmonitionVariant[key] | undefined
}

export interface AdmonitionRecipe {
  __slot: AdmonitionSlot
  __type: AdmonitionVariantProps;
  (props?: AdmonitionVariantProps): Pretty<Record<AdmonitionSlot, string>>
  raw: (props?: AdmonitionVariantProps) => AdmonitionVariantProps
  variantMap: AdmonitionVariantMap
  variantKeys: Array<keyof AdmonitionVariant>
  splitVariantProps<Props extends AdmonitionVariantProps>(
    props: Props,
  ): [
    AdmonitionVariantProps,
    Pretty<DistributiveOmit<Props, keyof AdmonitionVariantProps>>,
  ]
  getVariantProps: (props?: AdmonitionVariantProps) => AdmonitionVariantProps
}

export declare const admonition: AdmonitionRecipe
