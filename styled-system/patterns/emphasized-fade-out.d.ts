/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface EmphasizedFadeOutProperties {}

interface EmphasizedFadeOutStyles
  extends
    EmphasizedFadeOutProperties,
    DistributiveOmit<SystemStyleObject, keyof EmphasizedFadeOutProperties> {}

interface EmphasizedFadeOutPatternFn {
  (styles?: EmphasizedFadeOutStyles): string
  raw: (styles?: EmphasizedFadeOutStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const emphasizedFadeOut: EmphasizedFadeOutPatternFn
