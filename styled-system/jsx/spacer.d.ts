/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SpacerProperties } from '../patterns/spacer'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface SpacerProps
  extends SpacerProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof SpacerProperties> {}

export declare const Spacer: FunctionComponent<SpacerProps>
