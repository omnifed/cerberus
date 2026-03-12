import { ButtonParts } from '@cerberus-design/react'
import { ArrowDownRight } from '@carbon/icons-react'

export function IconDemo() {
  return (
    <ButtonParts.Root>
      With icon
      <ButtonParts.Icon>
        <ArrowDownRight />
      </ButtonParts.Icon>
    </ButtonParts.Root>
  )
}
