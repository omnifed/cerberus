'use client'

import { useDataGridContext } from '@cerberus-design/data-grid'
import { Button } from '@cerberus-design/react'
import { Employee } from '../quick-start/data.demo'
import { MouseEvent } from 'react'

export function ActionDemo() {
  const store = useDataGridContext<Employee>()

  function handleUpdateData(e: MouseEvent<HTMLButtonElement>) {
    store.togglePinned(e.currentTarget.value, 'left')
  }

  return (
    <Button onClick={handleUpdateData} value="ID">
      Toggle Pinned
    </Button>
  )
}
