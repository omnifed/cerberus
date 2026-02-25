/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SlideFadeOutProperties } from '../patterns/slide-fade-out'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface SlideFadeOutProps
  extends
    SlideFadeOutProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof SlideFadeOutProperties> {}

/**
 * An element for applying animations.
 */
export declare const SlideFadeOut: FunctionComponent<SlideFadeOutProps>
