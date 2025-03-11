import { Information, InformationFilled } from '@carbon/icons-react'
import { Tooltip } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function BasicTooltipPreview() {
  return (
    <Tooltip content="Get information from something that has a very long description.">
      <Information />
    </Tooltip>
  )
}

export function PositioningTooltipPreview() {
  return (
    <HStack gap="3xl">
      <Tooltip content="Top position" position="top">
        <InformationFilled />
      </Tooltip>
      <Tooltip content="Right position" position="right">
        <InformationFilled />
      </Tooltip>
      <Tooltip content="Bottom position" position="bottom">
        <InformationFilled />
      </Tooltip>
      <Tooltip content="Left position" position="left">
        <InformationFilled />
      </Tooltip>
    </HStack>
  )
}
