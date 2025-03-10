import type { AvatarRootProps } from '@ark-ui/react/avatar'
import type { AvatarVariantProps } from 'styled-system/recipes'
import type { ReactNode } from 'react'
import { splitProps } from '../../utils'
import { Show } from '../Show'
import { AvatarParts } from './parts'

/**
 * This module provides an abstraction of the Avatar primitives.
 * @module 'avatar'
 */

export interface AvatarWithoutImage
  extends AvatarRootProps,
    AvatarVariantProps {
  alt?: never
  src?: never
  fallback?: ReactNode
}

export interface AvatarWithImage extends AvatarRootProps, AvatarVariantProps {
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
  const [imgProps, { fallback, children }, rootProps] = splitProps(
    props,
    ['alt', 'src'],
    ['fallback', 'children'],
  )

  return (
    <AvatarParts.Root {...rootProps}>
      <Show
        when={children}
        fallback={
          <>
            <AvatarParts.Fallback>{fallback}</AvatarParts.Fallback>
            <AvatarParts.Image {...imgProps} />
          </>
        }
      >
        {children}
      </Show>
    </AvatarParts.Root>
  )
}
