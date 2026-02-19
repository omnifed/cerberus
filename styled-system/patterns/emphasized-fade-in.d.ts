/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface EmphasizedFadeInProperties {}

interface EmphasizedFadeInStyles
  extends
    EmphasizedFadeInProperties,
    DistributiveOmit<SystemStyleObject, keyof EmphasizedFadeInProperties> {}

interface EmphasizedFadeInPatternFn {
  (styles?: EmphasizedFadeInStyles): string
  raw: (styles?: EmphasizedFadeInStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const emphasizedFadeIn: EmphasizedFadeInPatternFn
