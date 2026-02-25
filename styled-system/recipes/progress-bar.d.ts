/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ProgressBarVariant {
  /**
   * @default "md"
   */
  size: 'sm' | 'md'
  /**
   * @default "rounded"
   */
  usage: 'block' | 'rounded'
}

type ProgressBarVariantMap = {
  [key in keyof ProgressBarVariant]: Array<ProgressBarVariant[key]>
}

type ProgressBarSlot = 'root' | 'bar'

export type ProgressBarVariantProps = {
  [key in keyof ProgressBarVariant]?:
    | ConditionalValue<ProgressBarVariant[key]>
    | undefined
}

export interface ProgressBarRecipe {
  __slot: ProgressBarSlot
  __type: ProgressBarVariantProps;
  (props?: ProgressBarVariantProps): Pretty<Record<ProgressBarSlot, string>>
  raw: (props?: ProgressBarVariantProps) => ProgressBarVariantProps
  variantMap: ProgressBarVariantMap
  variantKeys: Array<keyof ProgressBarVariant>
  splitVariantProps<Props extends ProgressBarVariantProps>(
    props: Props,
  ): [
    ProgressBarVariantProps,
    Pretty<DistributiveOmit<Props, keyof ProgressBarVariantProps>>,
  ]
  getVariantProps: (props?: ProgressBarVariantProps) => ProgressBarVariantProps
}

export declare const progressBar: ProgressBarRecipe
