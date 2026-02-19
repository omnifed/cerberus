/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { EmphasizedFadeOutProperties } from '../patterns/emphasized-fade-out'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface EmphasizedFadeOutProps
  extends
    EmphasizedFadeOutProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof EmphasizedFadeOutProperties
    > {}

/**
 * An element for applying animations.
 */
export declare const EmphasizedFadeOut: FunctionComponent<EmphasizedFadeOutProps>
