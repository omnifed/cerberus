import { splitProps } from '../utils/index'
import type { ReactNode } from 'react'

export interface AbstractionProps<TSlots extends string, TParts extends string> {
  slots?: Partial<Record<TSlots, ReactNode>>
  slotProps?: Partial<Record<TParts, any>>
}

export function createAbstraction<P, TSlots extends string, TParts extends string>(
  render: (
    props: P,
    slots: Partial<Record<TSlots, ReactNode>>,
    slotProps: Partial<Record<TParts, any>>,
  ) => ReactNode,
) {
  return function AbstractionComponent(props: P & AbstractionProps<TSlots, TParts>) {
    const [abstractionProps, componentProps] = splitProps(props, ['slots', 'slotProps'])

    return render(
      componentProps as P,
      (abstractionProps.slots ?? {}) as Partial<Record<TSlots, ReactNode>>,
      (abstractionProps.slotProps ?? {}) as Partial<Record<TParts, any>>,
    )
  }
}
