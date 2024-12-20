import {
  admonition,
  type AdmonitionVariantProps,
} from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import type { HTMLAttributes, ReactNode } from 'react'
import { Show } from './Show'
import { MatchAvatar } from './Admonition.client'

/**
 * This module provides a set of components for creating admonitions.
 * @module Admonition
 */

export type AdmonitionProps = HTMLAttributes<HTMLDivElement> &
  AdmonitionVariantProps & {
    /**
     * One off replacement for the icon.
     */
    icon?: ReactNode
  }

/**
 * The `Admonition` component is used to create an admonition.
 * @example
 * ```tsx
 * <Admonition palette="page">
 *  <AdmonitionHeading palette="page">Page</AdmonitionHeading>
 *  <AdmonitionDescription palette="page">
 *   This is a page admonition.
 *  </AdmonitionDescription>
 * </Admonition>
 * ```
 * @see https://cerberus.digitalu.design/react/admonition
 */
export function Admonition(props: AdmonitionProps) {
  const { children, palette = 'page', usage, icon, ...nativeProps } = props
  return (
    <aside
      {...nativeProps}
      className={cx(
        nativeProps.className,
        hstack({
          gap: 'md',
          w: 'full',
        }),
        admonition({ palette, usage }).root,
      )}
    >
      <Show when={Boolean(icon)} fallback={<MatchAvatar palette={palette} />}>
        {icon}
      </Show>
      <div>{children}</div>
    </aside>
  )
}

export type AdmonitionHeadingProps = HTMLAttributes<HTMLParagraphElement> &
  AdmonitionVariantProps

/**
 * The `AdmonitionHeading` component is used to create a heading within an
 * admonition.
 * @example
 * ```tsx
 * <Admonition palette="page">
 *  <AdmonitionHeading palette="page">Page</AdmonitionHeading>
 *  <AdmonitionDescription palette="page">
 *   This is a page admonition.
 *  </AdmonitionDescription>
 * </Admonition>
 * ```
 * @see https://cerberus.digitalu.design/react/admonition
 */
export function AdmonitionHeading(props: AdmonitionHeadingProps) {
  const { palette, usage, ...nativeProps } = props
  return (
    <p
      {...nativeProps}
      className={cx(
        nativeProps.className,
        admonition({ palette, usage }).heading,
      )}
    />
  )
}

export type AdmonitionDescriptionProps = HTMLAttributes<HTMLParagraphElement> &
  AdmonitionVariantProps

/**
 * The `AdmonitionDescription` component is used to create a description within
 * an admonition.
 * @example
 * ```tsx
 * <Admonition palette="page">
 *  <AdmonitionHeading palette="page">Page</AdmonitionHeading>
 *  <AdmonitionDescription palette="page">
 *   This is a page admonition.
 *  </AdmonitionDescription>
 * </Admonition>
 * ```
 * @see https://cerberus.digitalu.design/react/admonition
 */
export function AdmonitionDescription(props: AdmonitionDescriptionProps) {
  const { palette, usage, ...nativeProps } = props
  return (
    <p
      {...nativeProps}
      className={cx(
        nativeProps.className,
        admonition({ palette, usage }).description,
      )}
    />
  )
}
