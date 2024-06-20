import { Information, TrophyFilled } from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

export function BasicTooltipPreview() {
  return (
    <IconButton ariaLabel="Like something">
      <Information />
    </IconButton>
  )
}

export function CustomTooltipPreview() {
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
