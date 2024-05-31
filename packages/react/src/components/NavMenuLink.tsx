import type { AnchorHTMLAttributes, ElementType } from 'react'
import { Show } from './Show'
import { css, cx } from '@cerberus-design/styled-system/css'

export interface NavMenuLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType
}

export function NavMenuLink(props: NavMenuLinkProps): JSX.Element {
  const { as, ...nativeProps } = props
  const hasAs = Boolean(as)
  const AsSub: ElementType = as!

  return (
    <li
      className={css({
        w: 'full',
      })}
    >
      <Show
        when={hasAs}
        fallback={
          <a
            {...nativeProps}
            className={cx(
              nativeProps.className,
              css({
                color: 'action.navigation.initial',
                textStyle: 'link',
                _hover: {
                  color: 'action.navigation.hover',
                },
              }),
            )}
          />
        }
      >
        {hasAs && <AsSub {...nativeProps} />}
      </Show>
    </li>
  )
}
