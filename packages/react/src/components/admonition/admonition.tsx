import type { ReactNode } from 'react'
import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import { MatchAvatar } from './match-avatar'
import {
  AdmonitionContent,
  AdmonitionDescription,
  AdmonitionHeading,
  AdmonitionIndicator,
  AdmonitionRoot,
  type AdmonitionRootProps,
} from './primitives'

export interface AdmonitionProps extends AdmonitionRootProps {
  /**
   * The heading title for the Admonition.
   */
  heading?: string
  /**
   * One off replacement for the icon.
   */
  icon?: ReactNode
}

export function AdmonitionEl(props: AdmonitionProps) {
  const [elProps, styleProps, rootProps] = splitProps(
    props,
    ['heading', 'icon', 'children'],
    ['palette', 'usage'],
  )

  return (
    <AdmonitionRoot {...styleProps} {...rootProps}>
      <Show when={elProps.icon} fallback={<MatchAvatar palette={styleProps.palette} />}>
        <AdmonitionIndicator>{elProps.icon}</AdmonitionIndicator>
      </Show>

      <AdmonitionContent>
        <Show when={elProps.heading}>
          <AdmonitionHeading>{elProps.heading}</AdmonitionHeading>
        </Show>

        <AdmonitionDescription>{elProps.children}</AdmonitionDescription>
      </AdmonitionContent>
    </AdmonitionRoot>
  )
}
