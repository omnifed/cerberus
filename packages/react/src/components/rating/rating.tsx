import type {
  RatingGroupRootProps,
  UseRatingGroupContext,
  UseRatingGroupItemContext,
} from '@ark-ui/react/rating-group'
import type { RatingGroupVariantProps } from 'styled-system/recipes'
import type { ReactNode } from 'react'
import { splitProps } from '../../utils/index'
import { Show } from '../Show'
import { RatingParts } from './parts'

/**
 * This module contains the abstracted Rating component.
 * @module 'react/rating'
 */

export interface RatingProps
  extends Omit<RatingGroupRootProps, 'children'>,
    RatingGroupVariantProps {
  /**
   * The label of the rating component.
   */
  label?: string
  /**
   * The children of the rating component.
   */
  children: (context: UseRatingGroupItemContext) => ReactNode
}

/**
 * The Rating component is an abstraction of the primitives which provides a
 * visual rating system for a user to select a value.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/rating)
 * @description [Ark Docs](https://ark-ui.com/react/docs/components/rating-group#api-reference)
 * @example
 * ```tsx
 * <Rating count={5} defaultValue={3} allowHalf>
 *  {({ half, highlighted }) => {
 *   if (half) return <StarHalfIcon fill="current" />
 *   if (highlighted) return <StarIcon fill="current" />
 *   return <StarIcon />
 *  }}
 * </Rating>
 * ```
 */
export function Rating(props: RatingProps) {
  const [{ label }, styleProps, rootProps] = splitProps(
    props,
    ['label'],
    ['orientation', 'palette', 'size'],
  )

  return (
    <RatingParts.Root {...styleProps} {...rootProps}>
      <Show when={label}>
        <RatingParts.Label>{label}</RatingParts.Label>
      </Show>

      <RatingParts.Control>
        <RatingParts.Context>
          {(context: UseRatingGroupContext) =>
            context.items.map((item) => (
              <RatingParts.Item
                key={item}
                index={item}
                palette={styleProps.palette}
              >
                <RatingParts.ItemContext>
                  {rootProps.children}
                </RatingParts.ItemContext>
              </RatingParts.Item>
            ))
          }
        </RatingParts.Context>
      </RatingParts.Control>
    </RatingParts.Root>
  )
}
