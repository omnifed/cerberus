import type { ElementType } from 'react'
import {
  RatingContext,
  RatingControl,
  RatingHiddenInput,
  RatingItem,
  RatingItemContext,
  RatingLabel,
  RatingRoot,
} from './primitives'

/**
 * This module contains the parts of the Rating component.
 * @module 'rating/parts'
 */

interface RatingPartsValue {
  /**
   * The container of the rating.
   */
  Root: ElementType
  /**
   * The label of the rating.
   */
  Label: ElementType
  /**
   * The visual representation of the rating.
   */
  Control: ElementType
  /**
   * The context of the rating.
   */
  Context: ElementType
  /**
   * The item to display for the rating.
   */
  Item: ElementType
  /**
   * The context provider for the rating items.
   */
  ItemContext: ElementType
  /**
   * The native input of the rating.
   */
  HiddenInput: ElementType
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
