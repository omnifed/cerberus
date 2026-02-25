/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface TheadVariant {}

type TheadVariantMap = {
  [key in keyof TheadVariant]: Array<TheadVariant[key]>
}

export type TheadVariantProps = {
  [key in keyof TheadVariant]?: ConditionalValue<TheadVariant[key]> | undefined
}

export interface TheadRecipe {
  __type: TheadVariantProps;
  (props?: TheadVariantProps): string
  raw: (props?: TheadVariantProps) => TheadVariantProps
  variantMap: TheadVariantMap
  variantKeys: Array<keyof TheadVariant>
  splitVariantProps<Props extends TheadVariantProps>(
    props: Props,
  ): [
    TheadVariantProps,
    Pretty<DistributiveOmit<Props, keyof TheadVariantProps>>,
  ]
  getVariantProps: (props?: TheadVariantProps) => TheadVariantProps
}

/**
 * Styles for the Thead component.
 */
export declare const thead: TheadRecipe
