import {
  admonition,
  type AdmonitionVariantProps,
} from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { $cerberusIcons } from '../config/defineIcons'
import type { HTMLAttributes, ReactNode } from 'react'
import { Avatar } from './Avatar'
import { Show } from './Show'

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

// Private components

type MatchAvatarProps = AdmonitionVariantProps

function MatchAvatar(props: MatchAvatarProps) {
  const {
    infoNotification: InfoIcon,
    successNotification: SuccessIcon,
    warningNotification: WarningIcon,
    dangerNotification: DangerIcon,
  } = $cerberusIcons
  switch (props.palette) {
    case 'page':
      return (
        <Avatar
          gradient="charon-light"
          ariaLabel=""
          icon={<InfoIcon />}
          size="sm"
          src=""
        />
      )
    case 'info':
      return (
        <Avatar
          gradient="amphiaraus-dark"
          ariaLabel=""
          icon={<InfoIcon />}
          size="sm"
          src=""
        />
      )
    case 'success':
      return (
        <Avatar
          gradient="thanatos-dark"
          ariaLabel=""
          icon={<SuccessIcon />}
          size="sm"
          src=""
        />
      )
    case 'warning':
      return (
        <Avatar
          gradient="asphodel-light"
          ariaLabel=""
          icon={<WarningIcon />}
          size="sm"
          src=""
        />
      )
    case 'danger':
      return (
        <Avatar
          gradient="hades-light"
          ariaLabel=""
          icon={<DangerIcon />}
          size="sm"
          src=""
        />
      )

    default:
      throw new Error('Unsupported admonition palette')
  }
}
