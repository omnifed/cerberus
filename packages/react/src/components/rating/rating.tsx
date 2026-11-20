'use client'

import type { UseRatingGroupItemContext } from '@ark-ui/react/rating-group'
import { StarFilled, StarHalf } from '@carbon/icons-react'
import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import {
  RatingContext,
  RatingControl,
  RatingHiddenInput,
  RatingItem,
  RatingItemContext,
  RatingLabel,
  RatingRoot,
  type RatingRootProps,
} from './primitives'

const PARTS = {
  label: RatingLabel,
  control: RatingControl,
  item: RatingItem,
  itemContext: RatingItemContext,
  hiddenInput: RatingHiddenInput,
}

/**
 * Returns the content of one rating item from its state.
 */
export type RatingItemRenderer = (
  context: UseRatingGroupItemContext,
) => ReactNode

export interface RatingProps extends Omit<RatingRootProps, 'children'> {
  /**
   * The label of the rating, rendered in `Rating.Label`. A `Rating.Label`
   * child with children replaces it.
   */
  label?: ReactNode
  /**
   * A render function that returns each item's content from its state
   * (`highlighted`, `half`, `checked`), or direct `Rating.Label`,
   * `Rating.Control`, `Rating.Item`, `Rating.ItemContext` and
   * `Rating.HiddenInput` children that override those parts. Without a render
   * function, each item shows a Cerberus star (a half star when `half`).
   */
  children?: RatingItemRenderer | ReactNode
}

function defaultItemRenderer(item: UseRatingGroupItemContext) {
  if (item.half) return <StarHalf size={24} />
  return <StarFilled size={24} />
}

/**
 * The Rating component is an abstraction of the primitives that renders an
 * optional label and one item per `count` (5 by default). Each item shows the
 * content returned by the render function child, or a Cerberus star. Direct
 * `Rating.Label`, `Rating.Control`, `Rating.Item`, `Rating.ItemContext` or
 * `Rating.HiddenInput` children override that part; a `Rating.Item` child
 * patches every item (its `index` is ignored) and a `Rating.ItemContext`
 * child's render function renders each item's content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/rating)
 * @description [Ark Docs](https://ark-ui.com/docs/components/rating-group)
 * @example
 * ```tsx
 * <Rating count={5} defaultValue={3} allowHalf label="Rate this course">
 *   {({ half }) => (half ? <StarHalf /> : <StarFilled />)}
 * </Rating>
 * ```
 */
export function RatingEl(props: RatingProps) {
  const { children, label, ...rootProps } = props

  const isRenderer = typeof children === 'function'
  const { parts } = extractParts(
    isRenderer ? undefined : (children as ReactNode),
    PARTS,
  )

  const { children: labelChildren, ...labelOverrideProps } = parts.label ?? {}
  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const {
    index: _index,
    children: itemChildren,
    ...itemOverrideProps
  } = parts.item ?? {}

  const renderItem: RatingItemRenderer = isRenderer
    ? (children as RatingItemRenderer)
    : (parts.itemContext?.children ?? defaultItemRenderer)

  const labelContent = labelChildren ?? label

  return (
    <RatingRoot {...rootProps}>
      {labelContent ? (
        <RatingLabel {...labelOverrideProps}>{labelContent}</RatingLabel>
      ) : null}

      <RatingControl {...controlOverrideProps}>
        {controlChildren ?? (
          <RatingContext>
            {(rating) =>
              rating.items.map((index) => (
                <RatingItem key={index} {...itemOverrideProps} index={index}>
                  {itemChildren ?? (
                    <RatingItemContext>{renderItem}</RatingItemContext>
                  )}
                </RatingItem>
              ))
            }
          </RatingContext>
        )}
      </RatingControl>

      <RatingHiddenInput {...parts.hiddenInput} />
    </RatingRoot>
  )
}
