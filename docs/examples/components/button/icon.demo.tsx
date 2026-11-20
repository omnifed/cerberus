'use client'

import { Button } from '@cerberus-design/react'
import { ArrowDownRight } from '@carbon/icons-react'

export function IconDemo() {
  return (
    <Button.Group>
      <Button>
        With icon
        <Button.Icon>
          <ArrowDownRight />
        </Button.Icon>
      </Button>

      <Button pending>
        <Button.Icon>
          <ArrowDownRight />
        </Button.Icon>
        Pending
      </Button>
    </Button.Group>
  )
}
