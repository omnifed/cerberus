'use client'

import type { ReactNode } from 'react'
import { Show } from '../show/index'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type AvatarRootProps,
} from './primitives'

export type AvatarWithoutImage = {
  alt?: never
  src?: never
  fallback: ReactNode
}

export type AvatarWithImage = {
  alt: string
  src: string
  fallback?: ReactNode
}

export type AvatarProps = AvatarRootProps & (AvatarWithoutImage | AvatarWithImage)

/**
 * Avatar component is an abstraction of the primitives that displays a
 * avatar or it's fallback when the image fails to load.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/avatar/overview)
 * @description [Ark Docs](https://ark-ui.com/react/docs/components/avatar#api-reference)
 */
export function AvatarEl(props: AvatarProps) {
  const { alt, src, fallback, children, ...rootProps } = props
  const imgProps = { alt, src }

  return (
    <AvatarRoot {...rootProps}>
      <Show
        when={children}
        fallback={
          <>
            <AvatarFallback>{fallback}</AvatarFallback>
            <AvatarImage {...imgProps} />
          </>
        }
      >
        {children}
      </Show>
    </AvatarRoot>
  )
}
