'use client'

import { useDataGridContext, useSignalValue } from '@cerberus-design/data-grid'
import { Text } from '@cerberus-design/react'
import { Employee } from '../quick-start/data.demo'

export function SignalDemo() {
  const store = useDataGridContext<Employee>()
  const globalFilter = useSignalValue(store.globalFilter)

  return <Text>The global filter is: {globalFilter}</Text>
}
