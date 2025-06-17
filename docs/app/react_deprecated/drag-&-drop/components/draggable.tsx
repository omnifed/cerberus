import { useDraggable } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export function Draggable(
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <button
      className={css({
        bgColor: 'info.bg.initial',
        cursor: 'grab',
        p: '4',
        rounded: 'lg',
        userSelect: 'none',
      })}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </button>
  )
}
