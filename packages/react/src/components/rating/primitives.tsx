import {
  RatingGroup,
  type RatingGroupContextProps as ArkRatingGroupContextProps,
  type RatingGroupControlProps as ArkRatingGroupControlProps,
  type RatingGroupHiddenInputProps as ArkRatingGroupHiddenInputProps,
  type RatingGroupItemContextProps as ArkRatingGroupItemContextProps,
  type RatingGroupItemProps as ArkRatingGroupItemProps,
  type RatingGroupLabelProps as ArkRatingGroupLabelProps,
  type RatingGroupRootProps as ArkRatingGroupRootProps,
} from '@ark-ui/react/rating-group'
import {
  ratingGroup,
  type RatingGroupVariantProps,
} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Rating component.
 * @module 'rating/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(ratingGroup)

// Root

export type RatingRootProps = CerberusPrimitiveProps<
  ArkRatingGroupRootProps & RatingGroupVariantProps
>
export const RatingRoot = withSlotRecipe(RatingGroup.Root, 'root')

// Label

export type RatingLabelProps = CerberusPrimitiveProps<ArkRatingGroupLabelProps>
export const RatingLabel = withSlotRecipe(RatingGroup.Label, 'label')

// Control

export type RatingGroupControlProps =
  CerberusPrimitiveProps<ArkRatingGroupControlProps>
export const RatingControl = withSlotRecipe(RatingGroup.Control, 'control')

// Context

export type RatingGroupContextProps = ArkRatingGroupContextProps
export const RatingContext = RatingGroup.Context

// Item

export type RatingGroupItemProps = CerberusPrimitiveProps<
  ArkRatingGroupItemProps & RatingGroupVariantProps
>
export const RatingItem = withSlotRecipe(RatingGroup.Item, 'item')

// Item Context
export type RatingGroupItemContextProps = ArkRatingGroupItemContextProps
export const RatingItemContext = RatingGroup.ItemContext

// Hidden Input

export type RatingGroupHiddenInputProps = ArkRatingGroupHiddenInputProps
export const RatingHiddenInput = RatingGroup.HiddenInput
