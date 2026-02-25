/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SlideFadeInProperties } from '../patterns/slide-fade-in'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface SlideFadeInProps
  extends
    SlideFadeInProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof SlideFadeInProperties> {}

/**
 * An element for applying animations.
 */
export declare const SlideFadeIn: FunctionComponent<SlideFadeInProps>
