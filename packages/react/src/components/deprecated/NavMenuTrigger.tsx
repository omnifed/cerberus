'use client'

import {
  useCallback,
  type ButtonHTMLAttributes,
  type ElementType,
  type MouseEvent,
} from 'react'
import { cx } from '@cerberus/styled-system/css'
import { button } from '@cerberus/styled-system/recipes'
import {
  createNavTriggerProps,
  type NavTriggerAriaValues,
} from '../../aria-helpers/nav-menu.aria'
import { useNavMenuContext } from '../../context/navMenu'
import type { ButtonProps } from '../Button'
import { Show } from '../Show'

/**
 * This module contains the NavMenuTrigger component.
 * @module
 */

export interface NavMenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps,
    NavTriggerAriaValues {
  /**
   * The element type to render as. Recommended to use for an IconButton trigger vs a standard Button.
   * @default 'button'
   * @example
   * ```tsx
   * <NavMenuTrigger as={IconButton} href="/home" />
   * ```
   */
  as?: ElementType
}

/**
 * @deprecated use the {@link Menu} family instead
 */
export function NavMenuTrigger(props: NavMenuTriggerProps): JSX.Element {
  const {
    as,
    palette,
    usage,
    shape,
    controls,
    expanded: propsExpanded,
    onClick,
    ...nativeProps
  } = props
  const { triggerRef, onToggle, expanded } = useNavMenuContext()
  const ariaProps = createNavTriggerProps({
    controls,
    expanded: propsExpanded ?? expanded,
  })
  const hasAs = Boolean(as)
  const AsSub: ElementType = as!

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) return onClick(e)
      onToggle()
    },
    [onClick, onToggle],
  )

  return (
    <Show
      when={hasAs}
      fallback={
        <button
          {...nativeProps}
          {...ariaProps}
          className={cx(
            nativeProps.className,
            button({
              palette,
              usage,
              shape,
            }),
          )}
          onClick={handleClick}
          ref={triggerRef}
        >
          {props.children}
        </button>
      }
    >
      {hasAs && (
        <AsSub
          {...nativeProps}
          {...ariaProps}
          onClick={handleClick}
          ref={triggerRef}
        />
      )}
    </Show>
  )
}
