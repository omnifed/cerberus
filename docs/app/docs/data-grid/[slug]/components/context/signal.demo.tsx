'use client'

import { useDataGridContext } from '@cerberus-design/data-grid'
import { Text } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { Employee } from '../quick-start/data.demo'

export function SignalDemo() {
  const store = useDataGridContext<Employee>()
  const globalFilter = useRead(store.globalFilter)

  return (
    <Text>
      The global filter is: <pre>{JSON.stringify(globalFilter, null, 2)}</pre>
    </Text>
  )
}
