/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { EmphasizedFadeInProperties } from '../patterns/emphasized-fade-in'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface EmphasizedFadeInProps
  extends
    EmphasizedFadeInProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof EmphasizedFadeInProperties
    > {}

/**
 * An element for applying animations.
 */
export declare const EmphasizedFadeIn: FunctionComponent<EmphasizedFadeInProps>
