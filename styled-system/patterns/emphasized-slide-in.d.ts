/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface EmphasizedSlideInProperties {}

interface EmphasizedSlideInStyles
  extends
    EmphasizedSlideInProperties,
    DistributiveOmit<SystemStyleObject, keyof EmphasizedSlideInProperties> {}

interface EmphasizedSlideInPatternFn {
  (styles?: EmphasizedSlideInStyles): string
  raw: (styles?: EmphasizedSlideInStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const emphasizedSlideIn: EmphasizedSlideInPatternFn
