'use client'

import { css, cx } from '@cerberus/styled-system/css'
import { circle } from '@cerberus/styled-system/patterns'
import {
  avatar,
  type AvatarVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HtmlHTMLAttributes, ReactNode } from 'react'
import { Show } from './Show'
import { useCerberusContext } from '../context/cerberus'

/**
 * This module contains the Avatar component.
 * @module
 */

export type SharedAvatarProps = {
  /**
   * An optional icon to show when no src or ariaLabel is provided.
   */
  icon?: ReactNode
  /**
   * The size of the avatar.
   */
  width?: number
  /**
   * The size of the avatar.
   */
  height?: number
}
export type AvatarImageProps = HtmlHTMLAttributes<HTMLImageElement> &
  SharedAvatarProps & {
    /**
     * The aria-label for the avatar needed for accessibility.
     */
    ariaLabel: string
    /**
     * An optional element to replace the image. Recommended for Next.js Image component.
     */
    as?: never
    /**
     * The source of the image.
     */
    src: string
  }
export type AvatarAsProps = SharedAvatarProps & {
  /**
   * An optional element to replace the image. Recommended for Next.js Image component.
   */
  as: ReactNode
  /**
   * The aria-label for the avatar needed for accessibility.
   */
  ariaLabel?: never
  /**
   * The source of the image.
   */
  src?: never
}

export type AvatarProps = (HtmlHTMLAttributes<HTMLDivElement> &
  AvatarVariantProps) &
  (AvatarImageProps | AvatarAsProps)

/**
 * The Avatar component is used to represent a user or entity. It will show an image if src provided, otherwise it will show the ariaLabel of the ariaLabel. If the ariaLabel is empty, it will show a `defineIcons().avatar` icon.
 * @see https://cerberus.digitalu.design/react/avatar
 * @example
 * ```tsx
 * <Avatar
 *   ariaLabel="Protector Cerberus"
 *   src="https://cerberus.digitalu.design/logo.svg"
 * />
 * ```
 */
export function Avatar(props: AvatarProps) {
  const {
    ariaLabel,
    as,
    gradient,
    size,
    src,
    width,
    height,
    icon,
    ...nativeProps
  } = props
  const { icons } = useCerberusContext()
  const { avatar: AvatarIcon } = icons
  const initials = (ariaLabel || '')
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <div
      {...nativeProps}
      className={cx(
        nativeProps.className,
        avatar({ gradient, size }),
        circle(),
      )}
    >
      <Show
        when={Boolean(src) || Boolean(as)}
        fallback={
          <Show
            when={Boolean(initials)}
            fallback={
              <Show
                when={Boolean(icon)}
                fallback={
                  <AvatarIcon
                    size={iconSizeMap[size as keyof typeof iconSizeMap]}
                  />
                }
              >
                {icon}
              </Show>
            }
          >
            {initials}
          </Show>
        }
      >
        <Show
          when={Boolean(as)}
          fallback={
            <img
              alt={props.ariaLabel}
              className={css({
                h: 'full',
                objectFit: 'cover',
                w: 'full',
              })}
              decoding="async"
              loading="lazy"
              src={src}
              height={height}
              width={width}
            />
          }
        >
          {as}
        </Show>
      </Show>
    </div>
  )
}

const iconSizeMap = {
  xs: 16,
  sm: 16,
  md: 20,
  lg: 34,
  xl: 32,
  '2xl': 32,
  '3xl': 32,
  '4xl': 32,
}
