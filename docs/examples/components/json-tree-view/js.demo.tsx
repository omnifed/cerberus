'use client'

import { JsonTreeView } from '@cerberus-design/react'
import { ChevronRight } from '@carbon/icons-react'

const data = [
  function sum(a: number, b: number) {
    return a + b
  },
  async (promises: Promise<any>[]) => await Promise.all(promises),
  function* generator(a: number) {
    while (a > 0) {
      yield a - 1
    }
  },
]

export function JSDemo() {
  return (
    <JsonTreeView.Root data={data}>
      <JsonTreeView.Tree arrow={<ChevronRight />} />
    </JsonTreeView.Root>
  )
}
