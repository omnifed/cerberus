/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface EmphasizedSlideOutProperties {}

interface EmphasizedSlideOutStyles
  extends
    EmphasizedSlideOutProperties,
    DistributiveOmit<SystemStyleObject, keyof EmphasizedSlideOutProperties> {}

interface EmphasizedSlideOutPatternFn {
  (styles?: EmphasizedSlideOutStyles): string
  raw: (styles?: EmphasizedSlideOutStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const emphasizedSlideOut: EmphasizedSlideOutPatternFn
