import { AvatarRoot, type AvatarRootProps } from '@ark-ui/solid/avatar'
import { Show, splitProps, type JSXElement } from 'solid-js'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import { AvatarParts } from './parts'
import { css, cx } from 'styled-system/css'
import type { WithCss } from 'styled-system/types'

/**
 * This module provides an abstraction of the Avatar primitives.
 * @module 'avatar'
 */

export interface AvatarWithoutImage
  extends AvatarRootProps,
    AvatarVariantProps,
    WithCss {
  alt?: never
  src?: never
  fallback?: JSXElement
}

export interface AvatarWithImage
  extends AvatarRootProps,
    AvatarVariantProps,
    WithCss {
  alt: string
  src: string
  fallback?: JSXElement
}

/**
 * Avatar component is an abstraction of the primitives that displays a
 * avatar or it's fallback when the image fails to load.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/components/avatar/overview)
 * @description [Ark Docs](https://ark-ui.com/solid/docs/components/avatar#api-reference)
 */
export function Avatar(props: AvatarWithoutImage | AvatarWithImage) {
  const [
    imgProps,
    { fallback, children },
    { gradient, shape, size, css: customCss },
    rootProps,
  ] = splitProps(
    props,
    ['alt', 'src'],
    ['fallback', 'children'],
    ['gradient', 'shape', 'size', 'css'],
  )
  const styles = avatar({ gradient, shape, size })

  // For some reason we have to use the ark AvatarRoot

  return (
    <AvatarRoot {...rootProps} class={cx(styles.root, css(customCss))}>
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
    </AvatarRoot>
  )
}
