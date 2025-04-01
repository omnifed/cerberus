import type {
  RatingGroupContextProps,
  RatingGroupControlProps,
  RatingGroupHiddenInputProps,
  RatingGroupItemContextProps,
  RatingGroupItemProps,
  RatingGroupLabelProps,
  RatingGroupRootProps,
} from '@ark-ui/solid/rating-group'
import type { JSX } from 'solid-js'
import {
  RatingContext,
  RatingControl,
  RatingHiddenInput,
  RatingItem,
  RatingItemContext,
  RatingLabel,
  RatingRoot,
} from './primitives'
import type { RatingGroupVariantProps } from 'styled-system/recipes'

/**
 * This module contains the parts of the Rating component.
 * @module 'rating/parts'
 */

interface RatingPartsValue {
  /**
   * The container of the rating.
   */
  Root: (props: RatingGroupRootProps) => JSX.Element
  /**
   * The label of the rating.
   */
  Label: (props: RatingGroupLabelProps) => JSX.Element
  /**
   * The visual representation of the rating.
   */
  Control: (props: RatingGroupControlProps) => JSX.Element
  /**
   * The context of the rating.
   */
  Context: (props: RatingGroupContextProps) => JSX.Element
  /**
   * The item to display for the rating.
   */
  Item: (props: RatingGroupItemProps & RatingGroupVariantProps) => JSX.Element
  /**
   * The context provider for the rating items.
   */
  ItemContext: (props: RatingGroupItemContextProps) => JSX.Element
  /**
   * The native input of the rating.
   */
  HiddenInput: (props: RatingGroupHiddenInputProps) => JSX.Element
}

/**
 * An Object containing the parts of the Rating component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the RatingParts object and
 * the entire family of components vs. only what you use.
 */
export const RatingParts: RatingPartsValue = {
  Root: RatingRoot,
  Label: RatingLabel,
  Control: RatingControl,
  Context: RatingContext,
  Item: RatingItem,
  ItemContext: RatingItemContext,
  HiddenInput: RatingHiddenInput,
}
