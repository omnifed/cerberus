import { CarbonIconProps, SortAscending } from '@carbon/icons-react'
import { PropsWithChildren } from 'react'
import { Box } from 'styled-system/jsx'

export function SortAscIcon(props: CarbonIconProps) {
  return <SortAscending {...props} />
}

export function SortDescIcon(props: CarbonIconProps) {
  return (
    <FlippedContainer>
      <SortAscending {...props} />
    </FlippedContainer>
  )
}

function FlippedContainer(props: PropsWithChildren) {
  return <Box transform="rotate(180deg)" {...props} />
}
