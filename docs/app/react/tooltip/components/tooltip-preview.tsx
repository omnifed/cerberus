import { Information } from '@cerberus-design/icons'
import type { ButtonProps } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'
import { iconButton } from '@cerberus/styled-system/recipes'

function IconButton(
  props: ButtonProps & {
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
  },
) {
  const { tooltipPosition, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      data-tooltip
      data-position={tooltipPosition || 'top'}
      className={iconButton()}
    />
  )
}

export function BasicTooltipPreview() {
  return (
    <IconButton aria-label="Get information from something that has a very long description.">
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
      <IconButton aria-label="Top position" tooltipPosition="top">
        <Information />
      </IconButton>
      <IconButton aria-label="Right position" tooltipPosition="right">
        <Information />
      </IconButton>
      <IconButton aria-label="Bottom position" tooltipPosition="bottom">
        <Information />
      </IconButton>
      <IconButton aria-label="Left position" tooltipPosition="left">
        <Information />
      </IconButton>
    </div>
  )
}
