/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface IconButtonVariant {
  /**
   * @default "action"
   */
  palette:
    | 'action'
    | 'secondaryAction'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  /**
   * @default "ghost"
   */
  usage: 'ghost' | 'filled' | 'outlined' | 'outlined-subtle'
  /**
   * @default "circle"
   */
  shape: 'square' | 'circle'
  /**
   * @default "lg"
   */
  size: 'sm' | 'lg'
}

type IconButtonVariantMap = {
  [key in keyof IconButtonVariant]: Array<IconButtonVariant[key]>
}

export type IconButtonVariantProps = {
  [key in keyof IconButtonVariant]?: IconButtonVariant[key] | undefined
}

export interface IconButtonRecipe {
  __type: IconButtonVariantProps;
  (props?: IconButtonVariantProps): string
  raw: (props?: IconButtonVariantProps) => IconButtonVariantProps
  variantMap: IconButtonVariantMap
  variantKeys: Array<keyof IconButtonVariant>
  splitVariantProps<Props extends IconButtonVariantProps>(
    props: Props,
  ): [
    IconButtonVariantProps,
    Pretty<DistributiveOmit<Props, keyof IconButtonVariantProps>>,
  ]
  getVariantProps: (props?: IconButtonVariantProps) => IconButtonVariantProps
}

/**
 * WCAG Level AAA compliant button styles.
 */
export declare const iconButton: IconButtonRecipe
