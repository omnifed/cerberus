import type { AvatarRootProps } from '@ark-ui/react/avatar'
import type { ReactNode } from 'react'
import { splitProps } from '../../utils'
import { Show } from '../Show'
import { AvatarParts } from './parts'

/**
 * This module provides an abstraction of the Avatar primitives.
 * @module 'avatar'
 */

export interface AvatarWithoutImage extends AvatarRootProps {
  alt?: never
  src?: never
  fallback?: ReactNode
}

export interface AvatarWithImage extends AvatarRootProps {
  alt: string
  src: string
  fallback?: ReactNode
}

/**
 * Avatar component is an abstraction of the primitives that displays a
 * avatar or it's fallback when the image fails to load.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/avatar/overview)
 * @description [Ark Docs](https://ark-ui.com/react/docs/components/avatar#api-reference)
 */
export function Avatar(props: AvatarWithoutImage | AvatarWithImage) {
  const [imgProps, { fallback }, rootProps] = splitProps(
    props,
    ['alt', 'src', 'children'],
    ['fallback'],
  )

  return (
    <AvatarParts.Root {...rootProps}>
      <Show
        when={Boolean(imgProps.children)}
        fallback={
          <>
            <AvatarParts.Fallback>{fallback}</AvatarParts.Fallback>
            <AvatarParts.Image {...imgProps} decoding="async" loading="lazy" />
          </>
        }
      >
        {props.children}
      </Show>
    </AvatarParts.Root>
  )
}
