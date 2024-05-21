/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { WrapProperties } from '../patterns/wrap'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface WrapProps
  extends WrapProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof WrapProperties> {}

export declare const Wrap: FunctionComponent<WrapProps>
