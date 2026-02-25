/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { EmphasizedSlideOutProperties } from '../patterns/emphasized-slide-out'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface EmphasizedSlideOutProps
  extends
    EmphasizedSlideOutProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof EmphasizedSlideOutProperties
    > {}

/**
 * An element for applying animations.
 */
export declare const EmphasizedSlideOut: FunctionComponent<EmphasizedSlideOutProps>
