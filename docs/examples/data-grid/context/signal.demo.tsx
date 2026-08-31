'use client'

import { useDataGridContext } from '@cerberus-design/data-grid'
import { Text } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { type Employee } from '../api'

export function SignalDemo() {
  const store = useDataGridContext<Employee>()
  const globalFilter = useRead(store.globalFilter)

  return (
    <Text>
      The global filter is: <pre>{JSON.stringify(globalFilter, null, 2)}</pre>
    </Text>
  )
}
