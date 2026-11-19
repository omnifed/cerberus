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
  /**
   * The alternative text for the image. Required when `src` is set.
   */
  alt?: never
  /**
   * The image source URL. When omitted, only the `fallback` is rendered.
   */
  src?: never
  /**
   * The content shown when there is no image or it fails to load, such as initials or an icon.
   */
  fallback: ReactNode
}

export type AvatarWithImage = {
  /**
   * The alternative text for the image. Required when `src` is set.
   */
  alt: string
  /**
   * The image source URL. When omitted, only the `fallback` is rendered.
   */
  src: string
  /**
   * The content shown when there is no image or it fails to load, such as initials or an icon.
   */
  fallback?: ReactNode
}

export type AvatarProps = AvatarRootProps &
  (AvatarWithoutImage | AvatarWithImage)

export const AvatarEl = createAbstraction(
  PARTS,
  (props: AvatarProps, parts) => {
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
  },
)
