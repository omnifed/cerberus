import type {
  RatingGroupRootProps,
  UseRatingGroupContext,
} from '@ark-ui/react/rating-group'
import { Show } from '../Show'
import { RatingParts } from './parts'

/**
 * This module contains the abstracted Rating component.
 * @module 'react/rating'
 */

export interface RatingProps extends RatingGroupRootProps {
  /**
   * The label of the rating component.
   */
  label?: string
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
  return (
    <RatingParts.Root {...props}>
      <Show when={Boolean(props.label)}>
        <RatingParts.Label>{props.label}</RatingParts.Label>
      </Show>

      <RatingParts.Control>
        <RatingParts.Context>
          {(context: UseRatingGroupContext) =>
            context.items.map((item) => (
              <RatingParts.Item key={item} index={item}>
                <RatingParts.ItemContext>
                  {props.children}
                </RatingParts.ItemContext>
              </RatingParts.Item>
            ))
          }
        </RatingParts.Context>
      </RatingParts.Control>
    </RatingParts.Root>
  )
}
