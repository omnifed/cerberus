/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface ScaleFadeInProperties {}

interface ScaleFadeInStyles
  extends
    ScaleFadeInProperties,
    DistributiveOmit<SystemStyleObject, keyof ScaleFadeInProperties> {}

interface ScaleFadeInPatternFn {
  (styles?: ScaleFadeInStyles): string
  raw: (styles?: ScaleFadeInStyles) => SystemStyleObject
}

/**
 * An element for applying animations.
 */
export declare const scaleFadeIn: ScaleFadeInPatternFn
