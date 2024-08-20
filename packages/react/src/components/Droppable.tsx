'use client'

import { useDroppable, type UseDroppableArguments } from '@dnd-kit/core'
import { useId, type HtmlHTMLAttributes, type PropsWithChildren } from 'react'

export interface DroppableProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'id'>,
    UseDroppableArguments {
  dropped?: boolean
}

export function Droppable(props: PropsWithChildren<DroppableProps>) {
  const { dropped, id, disabled, data, resizeObserverConfig, ...nativeProps } =
    props
  const uuid = useId()
  const { isOver, setNodeRef } = useDroppable({
    data,
    disabled,
    id: id || uuid,
    resizeObserverConfig,
  })

  return (
    <div
      {...nativeProps}
      data-over={isOver}
      data-dropped={dropped}
      ref={setNodeRef}
    >
      {props.children}
    </div>
  )
}
