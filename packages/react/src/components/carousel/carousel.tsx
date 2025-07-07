import type { PropsWithChildren } from 'react'
import { Show } from '../show/show'
import { For } from '../for/for'
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
      {children}

      <Show when={showIndicators}>
        <CarouselParts.IndicatorGroup>
          <For each={Array.from({ length: props.slideCount ?? 0 })}>
            {(_, idx) => <CarouselParts.Indicator key={idx} index={idx} />}
          </For>
        </CarouselParts.IndicatorGroup>
      </Show>
    </CarouselParts.Root>
  )
}

export const Carousel = {
  Root: CarouselEl,
  ItemGroup: CarouselParts.ItemGroup,
  Item: CarouselParts.Item,
  Control: CarouselParts.Control,
  PrevTrigger: CarouselParts.PrevTrigger,
  NextTrigger: CarouselParts.NextTrigger,
}
