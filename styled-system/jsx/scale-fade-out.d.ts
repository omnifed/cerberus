/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScaleFadeOutProperties } from '../patterns/scale-fade-out'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface ScaleFadeOutProps
  extends
    ScaleFadeOutProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof ScaleFadeOutProperties> {}

/**
 * An element for applying animations.
 */
export declare const ScaleFadeOut: FunctionComponent<ScaleFadeOutProps>
