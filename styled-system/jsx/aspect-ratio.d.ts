/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AspectRatioProperties } from '../patterns/aspect-ratio'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface AspectRatioProps
  extends AspectRatioProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof AspectRatioProperties | 'aspectRatio'
    > {}

export declare const AspectRatio: FunctionComponent<AspectRatioProps>
