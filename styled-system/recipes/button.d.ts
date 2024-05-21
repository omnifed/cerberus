/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ButtonVariant {
  palette: 'action' | 'danger'
  usage: 'text' | 'outline' | 'filled'
  shape: 'sharp' | 'rounded'
}

type ButtonVariantMap = {
  [key in keyof ButtonVariant]: Array<ButtonVariant[key]>
}

export type ButtonVariantProps = {
  [key in keyof ButtonVariant]?:
    | ConditionalValue<ButtonVariant[key]>
    | undefined
}

export interface ButtonRecipe {
  __type: ButtonVariantProps
  (props?: ButtonVariantProps): string
  raw: (props?: ButtonVariantProps) => ButtonVariantProps
  variantMap: ButtonVariantMap
  variantKeys: Array<keyof ButtonVariant>
  splitVariantProps<Props extends ButtonVariantProps>(
    props: Props,
  ): [
    ButtonVariantProps,
    Pretty<DistributiveOmit<Props, keyof ButtonVariantProps>>,
  ]
  getVariantProps: (props?: ButtonVariantProps) => ButtonVariantProps
}

/**
 * WCAG Level AAA compliant button styles.


 */
export declare const button: ButtonRecipe
