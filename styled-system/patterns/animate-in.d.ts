/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface AnimateInProperties {
  delay?: ConditionalValue<string>
}

interface AnimateInStyles
  extends AnimateInProperties,
    DistributiveOmit<
      SystemStyleObject,
      keyof AnimateInProperties | 'overflow'
    > {}

interface AnimateInPatternFn {
  (styles?: AnimateInStyles): string
  raw: (styles?: AnimateInStyles) => SystemStyleObject
}

/**
 * A container that fades in the content


 */
export declare const animateIn: AnimateInPatternFn
