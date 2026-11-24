'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type AvatarRootProps,
} from './primitives'

const PARTS = {
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

/**
 * The Avatar component is an abstraction of the primitives that displays the
 * image at `src`, or the `fallback` while it loads or when it fails. Direct
 * `Avatar.Fallback` or `Avatar.Image` children override that part. A part
 * child with children replaces its default content. Any other children
 * replace the fallback and image entirely.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/avatar)
 * @description [Ark Docs](https://ark-ui.com/docs/components/avatar)
 * @example
 * ```tsx
 * <Avatar alt="Cerberus" src="/logo.svg" fallback="CB" />
 * ```
 */
export function AvatarEl(props: AvatarProps) {
  const [localProps, rootProps] = splitProps(props, [
    'fallback',
    'alt',
    'src',
    'children',
  ])

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: fallbackChildren, ...fallbackOverrideProps } =
    parts.fallback ?? {}

  return (
    <AvatarRoot {...rootProps}>
      {content ?? (
        <>
          <AvatarFallback {...fallbackOverrideProps}>
            {fallbackChildren ?? localProps.fallback}
          </AvatarFallback>
          <AvatarImage
            alt={localProps.alt}
            src={localProps.src}
            {...parts.image}
          />
        </>
      )}
    </AvatarRoot>
  )
}
