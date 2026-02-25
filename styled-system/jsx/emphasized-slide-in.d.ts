/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { EmphasizedSlideInProperties } from '../patterns/emphasized-slide-in'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface EmphasizedSlideInProps
  extends
    EmphasizedSlideInProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof EmphasizedSlideInProperties
    > {}

/**
 * An element for applying animations.
 */
export declare const EmphasizedSlideIn: FunctionComponent<EmphasizedSlideInProps>
