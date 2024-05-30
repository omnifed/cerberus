'use client'

import {
  useCallback,
  type ButtonHTMLAttributes,
  type ElementType,
  type MouseEvent,
} from 'react'
import { cx } from '@cerberus-design/styled-system/css'
import { button } from '@cerberus-design/styled-system/recipes'
import {
  createNavTriggerProps,
  type NavTriggerAriaValues,
} from '../aria-helpers/nav-menu.aria'
import { Show } from './Show'
import type { ButtonProps } from './Button'
import { useNavMenuContext } from '../context/navMenu'

export interface NavMenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps,
    NavTriggerAriaValues {
  as?: ElementType
}

/**
 * A component that allows the user to trigger a navigation menu.
 * @description https://github.com/omnifed/cerberus/blob/main/packages/react/src/components/NavMenuTrigger.tsx
 */
export function NavMenuTrigger(props: NavMenuTriggerProps) {
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
