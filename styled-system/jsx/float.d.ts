/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FloatProperties } from '../patterns/float'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface FloatProps
  extends FloatProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof FloatProperties> {}

export declare const Float: FunctionComponent<FloatProps>
