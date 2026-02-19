/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface SlideFadeInProperties {}

interface SlideFadeInStyles
  extends
    SlideFadeInProperties,
    DistributiveOmit<SystemStyleObject, keyof SlideFadeInProperties> {}

interface SlideFadeInPatternFn {
  (styles?: SlideFadeInStyles): string
  raw: (styles?: SlideFadeInStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const slideFadeIn: SlideFadeInPatternFn
