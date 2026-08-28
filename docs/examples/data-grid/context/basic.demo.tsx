'use client'

import { useDataGridContext } from '@cerberus-design/data-grid'

export function BasicDemo() {
  const store = useDataGridContext()
  return <pre>{JSON.stringify(store, null, 2)}</pre>
}
