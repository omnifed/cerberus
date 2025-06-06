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
      <Tooltip
        content="Top position"
        positioning={{
          placement: 'top',
        }}
      >
        <InformationFilled />
      </Tooltip>
      <Tooltip
        content="Right position"
        positioning={{
          placement: 'right',
        }}
      >
        <InformationFilled />
      </Tooltip>
      <Tooltip
        content="Bottom position"
        positioning={{
          placement: 'bottom',
        }}
      >
        <InformationFilled />
      </Tooltip>
      <Tooltip
        content="Left position"
        positioning={{
          placement: 'left',
        }}
      >
        <InformationFilled />
      </Tooltip>
    </HStack>
  )
}
