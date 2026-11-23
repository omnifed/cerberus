import type { PropsWithChildren } from 'react'
import { For } from '../for/for'
import { Show } from '../show/show'
import {
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselRoot,
  type CarouselRootProps,
} from './primitives'

export type CarouselProps = CarouselRootProps & {
  /**
   * Whether to show the carousel indicators (dot list).
   * @default false
   */
  showIndicators?: boolean
}

/**
 * A `Carousel.Root` that renders its children and, with `showIndicators`, one
 * indicator per page after them.
 *
 * @example
 * ```tsx
 * <Carousel.El slideCount={items.length} slidesPerPage={2} showIndicators>
 *   <Carousel.ItemGroup>
 *     {items.map((item, index) => (
 *       <Carousel.Item key={item.id} index={index}>
 *         {item.content}
 *       </Carousel.Item>
 *     ))}
 *   </Carousel.ItemGroup>
 * </Carousel.El>
 * ```
 */
export function CarouselEl(props: PropsWithChildren<CarouselProps>) {
  const { showIndicators = false, children, ...rootProps } = props

  return (
    <CarouselRoot {...rootProps}>
      {children}

      <Show when={showIndicators}>
        <CarouselIndicatorGroup>
          <For each={Array.from({ length: props.slideCount ?? 0 })}>
            {(_, idx) => <CarouselIndicator key={idx} index={idx} />}
          </For>
        </CarouselIndicatorGroup>
      </Show>
    </CarouselRoot>
  )
}
