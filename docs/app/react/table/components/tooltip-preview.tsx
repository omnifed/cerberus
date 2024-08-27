import { Information } from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'

export function BasicTooltipPreview() {
  return (
    <IconButton ariaLabel="Get information">
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
      <IconButton ariaLabel="Top position" tooltipPosition="top">
        <Information />
      </IconButton>
      <IconButton ariaLabel="Right position" tooltipPosition="right">
        <Information />
      </IconButton>
      <IconButton ariaLabel="Bottom position" tooltipPosition="bottom">
        <Information />
      </IconButton>
      <IconButton ariaLabel="Left position" tooltipPosition="left">
        <Information />
      </IconButton>
    </div>
  )
}
