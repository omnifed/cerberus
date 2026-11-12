'use client'

import type { ReactNode } from 'react'
import { createAbstraction } from '../../internal/factory'
import { Show } from '../show/index'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type AvatarRootProps,
} from './primitives'
import { splitProps } from '../../utils'

const PARTS = {
  root: AvatarRoot,
  fallback: AvatarFallback,
  image: AvatarImage,
}

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

export const AvatarEl = createAbstraction(PARTS, (props: AvatarProps, parts) => {
  const [localProps, rootProps] = splitProps(props, [
    'fallback',
    'alt',
    'src',
    'children',
  ])

  return (
    <parts.root {...rootProps}>
      <Show
        when={localProps.children}
        fallback={
          <>
            <parts.fallback>{localProps.fallback}</parts.fallback>
            <parts.image alt={localProps.alt} src={localProps.src ?? null} />
          </>
        }
      >
        {localProps.children}
      </Show>
    </parts.root>
  )
})
