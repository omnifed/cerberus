import { Delete, ThumbsUp, TrophyFilled } from '@cerberus-design/icons'
import { css } from '@cerberus/styled-system/css'
import { IconButton } from './temp-icon-button'

export function BasicIconButtonPreview() {
  return (
    <IconButton aria-label="Like something">
      <ThumbsUp />
    </IconButton>
  )
}

export function DangerIconButtonPreview() {
  return (
    <IconButton aria-label="Delete something" palette="danger" usage="filled">
      <Delete />
    </IconButton>
  )
}

export function TextIconButtonPreview() {
  return (
    <IconButton aria-label="Like something" usage="text">
      <ThumbsUp />
    </IconButton>
  )
}

export function CustomIconButtonPreview() {
  return (
    <IconButton
      aria-label="Wu-Tang Forever"
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
