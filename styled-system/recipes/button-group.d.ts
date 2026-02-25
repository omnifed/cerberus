/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ButtonGroupVariant {
  /**
   * @default "default"
   */
  layout: 'default' | 'attached'
  /**
   * @default "sharp"
   */
  shape: 'default' | 'sharp' | 'rounded'
}

type ButtonGroupVariantMap = {
  [key in keyof ButtonGroupVariant]: Array<ButtonGroupVariant[key]>
}

export type ButtonGroupVariantProps = {
  [key in keyof ButtonGroupVariant]?: ButtonGroupVariant[key] | undefined
}

export interface ButtonGroupRecipe {
  __type: ButtonGroupVariantProps;
  (props?: ButtonGroupVariantProps): string
  raw: (props?: ButtonGroupVariantProps) => ButtonGroupVariantProps
  variantMap: ButtonGroupVariantMap
  variantKeys: Array<keyof ButtonGroupVariant>
  splitVariantProps<Props extends ButtonGroupVariantProps>(
    props: Props,
  ): [
    ButtonGroupVariantProps,
    Pretty<DistributiveOmit<Props, keyof ButtonGroupVariantProps>>,
  ]
  getVariantProps: (props?: ButtonGroupVariantProps) => ButtonGroupVariantProps
}

/**
 * Styles for the buttonGroup component.
 */
export declare const buttonGroup: ButtonGroupRecipe
