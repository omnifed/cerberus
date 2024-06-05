import { Delete, ThumbsUp, TrophyFilled } from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

export function BasicIconButtonPreview() {
  return (
    <IconButton ariaLabel="Like something">
      <ThumbsUp />
    </IconButton>
  )
}

export function DangerIconButtonPreview() {
  return (
    <IconButton ariaLabel="Delete something" palette="danger" usage="filled">
      <Delete />
    </IconButton>
  )
}

export function TextIconButtonPreview() {
  return (
    <IconButton ariaLabel="Like something" usage="text">
      <ThumbsUp />
    </IconButton>
  )
}

export function CustomIconButtonPreview() {
  return (
    <IconButton
      ariaLabel="Wu-Tang Forever"
      className={css({
        alignItems: 'center',
        display: 'inline-flex',
        bgColor: 'yellow',
        color: 'black',
        h: '3.7rem',
        justifyContent: 'center',
        rounded: 'md',
        w: '3.7rem',
        _hover: {
          bgColor: 'black',
          color: 'yellow',
        },
      })}
    >
      <TrophyFilled size={32} />
    </IconButton>
  )
}
