/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface LabelVariant {
  /**
   * @default "visible"
   */
  usage: 'visible' | 'hidden'
  /**
   * @default "sm"
   */
  size: 'sm' | 'md'
}

type LabelVariantMap = {
  [key in keyof LabelVariant]: Array<LabelVariant[key]>
}

export type LabelVariantProps = {
  [key in keyof LabelVariant]?: ConditionalValue<LabelVariant[key]> | undefined
}

export interface LabelRecipe {
  __type: LabelVariantProps;
  (props?: LabelVariantProps): string
  raw: (props?: LabelVariantProps) => LabelVariantProps
  variantMap: LabelVariantMap
  variantKeys: Array<keyof LabelVariant>
  splitVariantProps<Props extends LabelVariantProps>(
    props: Props,
  ): [
    LabelVariantProps,
    Pretty<DistributiveOmit<Props, keyof LabelVariantProps>>,
  ]
  getVariantProps: (props?: LabelVariantProps) => LabelVariantProps
}

/**
 * WCAG Level AAA compliant label styles.
 */
export declare const label: LabelRecipe
