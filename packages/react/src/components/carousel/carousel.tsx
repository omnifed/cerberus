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
