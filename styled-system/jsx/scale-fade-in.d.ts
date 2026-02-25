/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScaleFadeInProperties } from '../patterns/scale-fade-in'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface ScaleFadeInProps
  extends
    ScaleFadeInProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof ScaleFadeInProperties> {}

/**
 * An element for applying animations.
 */
export declare const ScaleFadeIn: FunctionComponent<ScaleFadeInProps>
