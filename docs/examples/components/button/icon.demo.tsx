'use client'

import { Button } from '@cerberus-design/react'
import { ArrowDownRight } from '@carbon/icons-react'

export function IconDemo() {
  return (
    <Button>
      With icon
      <Button.Icon>
        <ArrowDownRight />
      </Button.Icon>
    </Button>
  )
}
