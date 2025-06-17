import type { ReactNode } from 'react'
import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import { AdmonitionParts } from './parts'
import type { AdmonitionRootProps } from './primitives'
import { MatchAvatar } from './match-avatar'

/**
 * This module provides an abstraction for the Admonition component.
 * @module 'admonition/admonition'
 */

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

/**
 * The Admonition component is an abstraction of the primitives which
 * displays a Admonition with a label.
 *
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/admonition)
 *
 * @remarks
 *
 * For a customizable Admonition, use the `AdmonitionParts` object to access the
 * individual primitives of the Admonition component.
 */
export function Admonition(props: AdmonitionProps) {
  const [elProps, styleProps, rootProps] = splitProps(
    props,
    ['heading', 'icon', 'children'],
    ['palette', 'usage'],
  )

  return (
    <AdmonitionParts.Root {...styleProps} {...rootProps}>
      <Show
        when={elProps.icon}
        fallback={<MatchAvatar palette={styleProps.palette} />}
      >
        <AdmonitionParts.Indicator>{elProps.icon}</AdmonitionParts.Indicator>
      </Show>

      <AdmonitionParts.Content>
        <Show when={elProps.heading}>
          <AdmonitionParts.Heading>{elProps.heading}</AdmonitionParts.Heading>
        </Show>

        <AdmonitionParts.Description>
          {elProps.children}
        </AdmonitionParts.Description>
      </AdmonitionParts.Content>
    </AdmonitionParts.Root>
  )
}
