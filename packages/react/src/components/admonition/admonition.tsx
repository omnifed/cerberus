'use client'

import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import { IconButtonRoot, type IconButtonRootProps } from '../buttons/primitives'
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
   * When provided displays a `IconButton` using the `icons.close` icon at the
   * end of the `Admonition`. This event is called when the user clicks the
   * button.
   */
  onClose?: IconButtonRootProps['onClick']
  /**
   * @deprecated - **THIS WILL BE REMOVED IN v3**. Pass an
   * `<Admonition.Indicator>` child with your icon instead.
   */
  icon?: ReactNode
}

/**
 * The Admonition component is an abstraction of the primitives that displays
 * an indicator avatar matching the `palette`, an optional `heading`, and its
 * children as the description. When `onClose` is set, it also renders a close
 * IconButton (labelled "Close admonition"). Direct `Admonition.Indicator`,
 * `Admonition.Content`, `Admonition.Heading` or `Admonition.Description`
 * children override that part. A part child with children replaces its default
 * content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/admonition)
 * @example
 * ```tsx
 * <Admonition palette="info" heading="Heads up">
 *   Something worth knowing.
 * </Admonition>
 * ```
 */
export function AdmonitionEl(props: AdmonitionProps) {
  const [localProps, rootProps] = splitProps(props, [
    'heading',
    'icon',
    'onClose',
    'children',
  ])

  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: indicatorChildren, ...indicatorOverrideProps } =
    parts.indicator ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.content ?? {}
  const { children: headingChildren, ...headingOverrideProps } =
    parts.heading ?? {}
  const { children: descriptionChildren, ...descriptionOverrideProps } =
    parts.description ?? {}

  const indicatorContent = indicatorChildren ?? localProps.icon
  const heading = headingChildren ?? localProps.heading

  return (
    <AdmonitionRoot {...rootProps}>
      {/* The default avatar takes the indicator's place via asChild */}
      <AdmonitionIndicator
        asChild={indicatorContent == null}
        {...indicatorOverrideProps}
      >
        {indicatorContent ?? (
          <MatchAvatar palette={rootProps.palette ?? 'page'} />
        )}
      </AdmonitionIndicator>

      <AdmonitionContent {...contentOverrideProps}>
        {contentChildren ?? (
          <>
            <Show when={heading}>
              <AdmonitionHeading {...headingOverrideProps}>
                {heading}
              </AdmonitionHeading>
            </Show>

            <AdmonitionDescription {...descriptionOverrideProps}>
              {descriptionChildren ?? content}
            </AdmonitionDescription>
          </>
        )}
      </AdmonitionContent>

      <Show when={localProps.onClose}>
        <IconButtonRoot
          aria-label="Close admonition"
          onClick={localProps.onClose}
          // IconButton has no `page` palette: fall back to its `action` default
          palette={
            !rootProps.palette || rootProps.palette === 'page'
              ? 'action'
              : rootProps.palette
          }
          size="xs"
        >
          <CloseIcon />
        </IconButtonRoot>
      </Show>
    </AdmonitionRoot>
  )
}
