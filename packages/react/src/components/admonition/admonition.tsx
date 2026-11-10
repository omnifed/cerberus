'use client'

import type { ReactNode } from 'react'
import { createAbstraction } from '../../internal/factory'
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

const PARTS = {
  root: AdmonitionRoot,
  indicator: AdmonitionIndicator,
  content: AdmonitionContent,
  heading: AdmonitionHeading,
  description: AdmonitionDescription,
}

export type AdmonitionProps = AdmonitionRootProps & {
  /**
   * The heading title for the Admonition.
   */
  heading?: string
  /**
   * @deprecated - **THIS WILL BE REMOVED IN v3**. Use `slots` instead.
   */
  icon?: ReactNode
}

export const AdmonitionEl = createAbstraction(
  PARTS,
  (props: AdmonitionProps, parts) => {
    const [localProps, rootProps] = splitProps(props, ['heading', 'icon', 'children'])

    return (
      <parts.root {...rootProps}>
        <parts.indicator asChild={!localProps.icon}>
          {localProps.icon ?? <MatchAvatar palette={rootProps.palette ?? 'page'} />}
        </parts.indicator>

        <parts.content>
          <Show when={localProps.heading}>
            <parts.heading>{localProps.heading}</parts.heading>
          </Show>

          <parts.description>{localProps.children}</parts.description>
        </parts.content>
      </parts.root>
    )
  },
)
