import type { PropsWithChildren } from 'react'
import { IconButton } from '../icon-button'
import { Show } from '../show/show'
import { CarouselParts } from './parts'
import type { CarouselRootProps } from './primitives'

/**
 * This module contains an abstraction of the carousel family of components.
 * @module carousel
 */

export interface CarouselProps extends CarouselRootProps {
  /**
   * Whether to show the carousel indicators (dot list).
   * @default false
   */
  showIndicators?: boolean
}

/**
 * The Carousel component is an abstraction of the carousel family of
 * components. It provides a simple interface for creating carousels with
 * various configurations.
 *
 * @remarks
 * This component uses the `CarouselParts` object to provide the necessary
 * parts. For customization, we recommend using the `CarouselParts` object
 * directly in combination with the `css` prop.
 */
function CarouselEl(props: PropsWithChildren<CarouselProps>) {
  const { showIndicators = false, children, ...rootProps } = props

  return (
    <CarouselParts.Root {...rootProps}>
      <CarouselParts.Control>
        <CarouselParts.PrevTrigger asChild>
          <IconButton ariaLabel="Previous page">&lt;</IconButton>
        </CarouselParts.PrevTrigger>
        <CarouselParts.NextTrigger asChild>
          <IconButton ariaLabel="Next page">&gt;</IconButton>
        </CarouselParts.NextTrigger>
      </CarouselParts.Control>

      <CarouselParts.ItemGroup>{children}</CarouselParts.ItemGroup>

      <Show when={showIndicators}>
        <CarouselParts.IndicatorGroup>
          <CarouselParts.Indicator />
        </CarouselParts.IndicatorGroup>
      </Show>
    </CarouselParts.Root>
  )
}

// TODO: Figure out how this is going to be used in the designs to dictate the
// best abstracted API.

export const Carousel = {
  Root: CarouselEl,
  Item: CarouselParts.Item,
}
