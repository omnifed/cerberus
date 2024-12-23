import { Close, ThumbsDown, ThumbsUp, TrophyFilled } from '@carbon/icons-react'
import { IconButton } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'

export function BasicIconButtonPreview() {
  return (
    <IconButton ariaLabel="Like something">
      <ThumbsUp size={24} />
    </IconButton>
  )
}

export function DangerIconButtonPreview() {
  return (
    <IconButton ariaLabel="Delete something" palette="danger" usage="filled">
      <Close size={24} />
    </IconButton>
  )
}

export function OutlinedIconButtonPreview() {
  return (
    <IconButton ariaLabel="Like something" usage="outlined">
      <ThumbsUp size={16} />
    </IconButton>
  )
}

export function TextIconButtonPreview() {
  return (
    <IconButton ariaLabel="Like something" usage="ghost">
      <ThumbsUp size={24} />
    </IconButton>
  )
}

export function IconButtonSizesPreview() {
  return (
    <div className={hstack()}>
      <IconButton ariaLabel="Like something" size="sm">
        <ThumbsUp />
      </IconButton>
      <IconButton ariaLabel="Dislike something">
        <ThumbsDown size={24} />
      </IconButton>
    </div>
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
