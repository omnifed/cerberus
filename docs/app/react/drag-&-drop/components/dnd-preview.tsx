'use client'

import {
  Button,
  DndContext,
  Droppable,
  Show,
  type DragEndEvent,
} from '@cerberus-design/react'
import { useCallback, useState } from 'react'
import { Draggable } from './draggable'
import { css } from 'styled-system/css'

const draggableMarkup = <Draggable>Drag me</Draggable>

export default function DnDPreview() {
  const [isDropped, setIsDropped] = useState<boolean>(false)

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true)
    }
  }, [])

  const handleReset = useCallback(() => {
    setIsDropped(false)
  }, [])

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Show
        when={!isDropped}
        fallback={<Button onClick={handleReset}>Reset</Button>}
      >
        {draggableMarkup}
      </Show>

      <Droppable
        className={css({
          bgColor: 'page.surface.200',
          border: '4px dashed',
          borderColor: 'page.border.100',
          h: '8rem',
          p: '4',
          rounded: 'lg',
          transitionProperty: 'border-color',
          transitionDuration: '150ms',
          w: '1/2',
          _isOver: {
            borderColor: 'success.border.initial',
          },
        })}
        id="droppable"
      >
        <Show when={isDropped} fallback={<>Drop here</>}>
          {draggableMarkup}
        </Show>
      </Droppable>
    </DndContext>
  )
}
