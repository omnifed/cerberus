/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface SlideFadeOutProperties {}

interface SlideFadeOutStyles
  extends
    SlideFadeOutProperties,
    DistributiveOmit<SystemStyleObject, keyof SlideFadeOutProperties> {}

interface SlideFadeOutPatternFn {
  (styles?: SlideFadeOutStyles): string
  raw: (styles?: SlideFadeOutStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const slideFadeOut: SlideFadeOutPatternFn
