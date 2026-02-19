/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface CircularProgressVariant {
  /**
   * @default "filled"
   */
  usage: 'filled' | 'transparent'
  /**
   * @default "xs"
   */
  size: 'xs' | 'sm' | 'md' | 'lg'
}

type CircularProgressVariantMap = {
  [key in keyof CircularProgressVariant]: Array<CircularProgressVariant[key]>
}

type CircularProgressSlot =
  | 'root'
  | 'label'
  | 'track'
  | 'range'
  | 'valueText'
  | 'view'
  | 'circle'
  | 'circleTrack'
  | 'circleRange'
  | 'infoGroup'

export type CircularProgressVariantProps = {
  [key in keyof CircularProgressVariant]?:
    | ConditionalValue<CircularProgressVariant[key]>
    | undefined
}

export interface CircularProgressRecipe {
  __slot: CircularProgressSlot
  __type: CircularProgressVariantProps;
  (
    props?: CircularProgressVariantProps,
  ): Pretty<Record<CircularProgressSlot, string>>
  raw: (props?: CircularProgressVariantProps) => CircularProgressVariantProps
  variantMap: CircularProgressVariantMap
  variantKeys: Array<keyof CircularProgressVariant>
  splitVariantProps<Props extends CircularProgressVariantProps>(
    props: Props,
  ): [
    CircularProgressVariantProps,
    Pretty<DistributiveOmit<Props, keyof CircularProgressVariantProps>>,
  ]
  getVariantProps: (
    props?: CircularProgressVariantProps,
  ) => CircularProgressVariantProps
}

export declare const circularProgress: CircularProgressRecipe
