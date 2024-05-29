import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ElementType,
  type ForwardedRef,
} from 'react'
import { Show } from './Show'
import type { ButtonProps } from './Button'
import { cx } from '@cerberus-design/styled-system/css'
import { button } from '@cerberus-design/styled-system/recipes'

export interface NavMenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  as?: ElementType
}

function NavMenuTriggerEL(
  props: NavMenuTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { as, palette, usage, shape, ...nativeProps } = props
  const hasAs = Boolean(as)
  const AsSub: ElementType = as!

  return (
    <Show
      when={hasAs}
      fallback={
        <button
          {...nativeProps}
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
      {hasAs && <AsSub ref={ref} {...nativeProps} />}
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
