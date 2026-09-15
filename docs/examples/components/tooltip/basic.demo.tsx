'use client'

import { Information } from '@carbon/icons-react'
import { Tooltip } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Tooltip content="Get information from something that has a very long description.">
      <Information />
    </Tooltip>
  )
}
