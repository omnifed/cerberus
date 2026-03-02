import { CarbonIconProps, Pin, PinFilled } from '@carbon/icons-react'
import { PropsWithChildren } from 'react'
import { Box } from 'styled-system/jsx'

export function PinLeftIcon(props: CarbonIconProps) {
  return <Pin {...props} />
}

export function PinLeftFilledIcon(props: CarbonIconProps) {
  return <PinFilled {...props} />
}

export function PinRightIcon(props: CarbonIconProps) {
  return (
    <FlippedContainer>
      <Pin {...props} />
    </FlippedContainer>
  )
}

export function PinRightFilledIcon(props: CarbonIconProps) {
  return (
    <FlippedContainer>
      <PinFilled {...props} />
    </FlippedContainer>
  )
}

function FlippedContainer(props: PropsWithChildren) {
  return <Box transform="scaleX(-1)" {...props} />
}
