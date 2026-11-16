import type { PropsWithChildren } from 'react'
import { Show } from '../show/show'
import { For } from '../for/for'
import { CarouselParts } from './parts'
import type { CarouselRootProps } from './primitives'

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
