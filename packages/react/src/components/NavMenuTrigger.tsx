import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ElementType,
  type ForwardedRef,
} from 'react'
import { cx } from '@cerberus-design/styled-system/css'
import { button } from '@cerberus-design/styled-system/recipes'
import {
  createNavTriggerProps,
  type NavTriggerAriaValues,
} from '../aria-helpers/nav-menu.aria'
import { Show } from './Show'
import type { ButtonProps } from './Button'

export interface NavMenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps,
    NavTriggerAriaValues {
  as?: ElementType
}

function NavMenuTriggerEL(
  props: NavMenuTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { as, palette, usage, shape, controls, expanded, ...nativeProps } =
    props
  const ariaProps = createNavTriggerProps({ controls, expanded })
  const hasAs = Boolean(as)
  const AsSub: ElementType = as!

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
          ref={ref}
        >
          {props.children}
        </button>
      }
    >
      {hasAs && <AsSub ref={ref} {...nativeProps} {...ariaProps} />}
    </Show>
  )
}

/**
 * A component that allows the user to trigger a navigation menu.
 * @description https://github.com/omnifed/cerberus/blob/main/packages/react/src/components/NavMenuTrigger.tsx
 */
export const NavMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavMenuTriggerProps
>(NavMenuTriggerEL)
