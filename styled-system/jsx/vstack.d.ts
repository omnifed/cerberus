/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VstackProperties } from '../patterns/vstack'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface VstackProps
  extends VstackProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof VstackProperties> {}

export declare const VStack: FunctionComponent<VstackProps>
