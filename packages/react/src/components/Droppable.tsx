'use client'

import { useDroppable, type UseDroppableArguments } from '@dnd-kit/core'
import { useId, type HtmlHTMLAttributes, type PropsWithChildren } from 'react'

export interface DroppableProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'id'>,
    UseDroppableArguments {
  /**
   * If the item has been dropped.
   */
  dropped?: boolean
}

/**
 * A Cerberus component is used to define a drop target for draggable elements.
 * @see https://dndkit.com/
 * @example
 * ```tsx
 * <Droppable id="dropzone">
 *   <Draggable id="draggable">Drag me</Draggable>
 * </Droppable>
 * ```
 */
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
