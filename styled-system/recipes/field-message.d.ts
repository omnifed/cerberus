/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface FieldMessageVariant {}

type FieldMessageVariantMap = {
  [key in keyof FieldMessageVariant]: Array<FieldMessageVariant[key]>
}

export type FieldMessageVariantProps = {
  [key in keyof FieldMessageVariant]?:
    | ConditionalValue<FieldMessageVariant[key]>
    | undefined
}

export interface FieldMessageRecipe {
  __type: FieldMessageVariantProps;
  (props?: FieldMessageVariantProps): string
  raw: (props?: FieldMessageVariantProps) => FieldMessageVariantProps
  variantMap: FieldMessageVariantMap
  variantKeys: Array<keyof FieldMessageVariant>
  splitVariantProps<Props extends FieldMessageVariantProps>(
    props: Props,
  ): [
    FieldMessageVariantProps,
    Pretty<DistributiveOmit<Props, keyof FieldMessageVariantProps>>,
  ]
  getVariantProps: (
    props?: FieldMessageVariantProps,
  ) => FieldMessageVariantProps
}

/**
 * WCAG Level AAA compliant input description styles.
 */
export declare const fieldMessage: FieldMessageRecipe
