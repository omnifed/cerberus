import type { ElementType } from 'react'
import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
} from './primitives'

/**
 * This module contains the parts of the Carousel component.
 * @module 'carousel/parts'
 */

interface CarouselPartsValue {
  /**
   * The context provider of the carousel.
   */
  Root: ElementType
  /**
   * The control of the carousel.
   */
  Control: ElementType
  /**
   * The previous trigger of the carousel.
   */
  PrevTrigger: ElementType
  /**
   * The next trigger of the carousel.
   */
  NextTrigger: ElementType
  /**
   * The indicator group of the carousel.
   */
  IndicatorGroup: ElementType
  /**
   * The indicator of the carousel.
   */
  Indicator: ElementType
  /**
   * The item group of the carousel.
   */
  ItemGroup: ElementType
  /**
   * The item of the carousel.
   */
  Item: ElementType
}

/**
 * An Object containing the parts of the Button component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the CarouselParts object and
 * the entire family of components vs. only what you use.
 */
export const CarouselParts: CarouselPartsValue = {
  Root: CarouselRoot,
  Control: CarouselControl,
  PrevTrigger: CarouselPrevTrigger,
  NextTrigger: CarouselNextTrigger,
  IndicatorGroup: CarouselIndicatorGroup,
  Indicator: CarouselIndicator,
  ItemGroup: CarouselItemGroup,
  Item: CarouselItem,
}
