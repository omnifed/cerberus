import {
  Carousel,
  type CarouselRootProps as ArkRootProps,
  type CarouselControlProps as ArkControlProps,
  type CarouselPrevTriggerProps as ArkPrevTriggerProps,
  type CarouselNextTriggerProps as ArkNextTriggerProps,
  type CarouselIndicatorGroupProps as ArkIndicatorGroupProps,
  type CarouselIndicatorProps as ArkIndicatorProps,
  type CarouselItemGroupProps as ArkItemGroupProps,
  type CarouselItemProps as ArkItemProps,
} from '@ark-ui/react/carousel'
import { carousel, type CarouselVariantProps } from 'styled-system/recipes'
import { createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the carousel primitives.
 * @module carousel/primitives
 */

const { withSlotRecipe } = createCerberusPrimitive(carousel)

// Primitives

export type CarouselRootProps = CarouselVariantProps & ArkRootProps
export const CarouselRoot = withSlotRecipe(Carousel.Root, 'root')

export type CarouselControlProps = CarouselVariantProps & ArkControlProps
export const CarouselControl = withSlotRecipe(Carousel.Control, 'control')

export type CarouselPrevTriggerProps = CarouselVariantProps &
  ArkPrevTriggerProps
export const CarouselPrevTrigger = withSlotRecipe(
  Carousel.PrevTrigger,
  'prevTrigger',
)

export type CarouselNextTriggerProps = CarouselVariantProps &
  ArkNextTriggerProps
export const CarouselNextTrigger = withSlotRecipe(
  Carousel.NextTrigger,
  'nextTrigger',
)

export type CarouselIndicatorGroupProps = CarouselVariantProps &
  ArkIndicatorGroupProps
export const CarouselIndicatorGroup = withSlotRecipe(
  Carousel.IndicatorGroup,
  'indicatorGroup',
)

export type CarouselIndicatorProps = CarouselVariantProps & ArkIndicatorProps
export const CarouselIndicator = withSlotRecipe(Carousel.Indicator, 'indicator')

export type CarouselItemGroupProps = CarouselVariantProps & ArkItemGroupProps
export const CarouselItemGroup = withSlotRecipe(Carousel.ItemGroup, 'itemGroup')

export type CarouselItemProps = CarouselVariantProps & ArkItemProps
export const CarouselItem = withSlotRecipe(Carousel.Item, 'item')
