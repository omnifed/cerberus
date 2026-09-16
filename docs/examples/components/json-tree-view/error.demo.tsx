'use client'

import { JsonTreeView } from '@cerberus-design/react'
import { ChevronRight } from '@carbon/icons-react'

const data = new Error('Error')

export function ErrorDemo() {
  return (
    <JsonTreeView.Root data={data}>
      <JsonTreeView.Tree arrow={<ChevronRight />} />
    </JsonTreeView.Root>
  )
}
