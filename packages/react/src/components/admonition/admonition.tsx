'use client'

import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { createAbstraction } from '../../internal/factory'
import { splitProps } from '../../utils/index'
import { IconButtonRoot, type IconButtonRootProps } from '../button/primitives'
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
  closeTrigger: IconButtonRoot,
}

export type AdmonitionProps = AdmonitionRootProps & {
  /**
   * The heading title for the Admonition.
   */
  heading?: string
  /**
   * When provided displays a `IconButton` using the `icons.close` icon at the
   * end of the `Admonition`. This event is called when the user clicks the
   * button.
   */
  onClose?: IconButtonRootProps['onClick']
  /**
   * @deprecated - **THIS WILL BE REMOVED IN v3**. Use `slots` instead.
   */
  icon?: ReactNode
}

export const AdmonitionEl = createAbstraction(
  PARTS,
  (props: AdmonitionProps, parts) => {
    const [localProps, rootProps] = splitProps(props, [
      'heading',
      'icon',
      'onClose',
      'children',
    ])

    const { icons } = useCerberusContext()
    const { close: CloseIcon } = icons

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

        <Show when={localProps.onClose}>
          <parts.closeTrigger
            aria-label="Close admonition"
            onClick={props.onClose}
            palette={rootProps.palette ?? 'action'}
            size="xs"
          >
            <CloseIcon />
          </parts.closeTrigger>
        </Show>
      </parts.root>
    )
  },
)
