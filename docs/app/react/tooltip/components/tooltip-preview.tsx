import { Information } from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'

export function BasicTooltipPreview() {
  return (
    <IconButton ariaLabel="Like something" data-position="top">
      <Information />
    </IconButton>
  )
}

export function PositioningTooltipPreview() {
  return (
    <div
      className={hstack({
        gap: '10',
      })}
    >
      <IconButton ariaLabel="Top position" data-position="top">
        <Information />
      </IconButton>
      <IconButton ariaLabel="Right position" data-position="right">
        <Information />
      </IconButton>
      <IconButton ariaLabel="Bottom position" data-position="bottom">
        <Information />
      </IconButton>
      <IconButton ariaLabel="Left position" data-position="left">
        <Information />
      </IconButton>
    </div>
  )
}
