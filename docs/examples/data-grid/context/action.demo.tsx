'use client'

import { useDataGridContext } from '@cerberus-design/data-grid'
import { Button } from '@cerberus-design/react'
import { MouseEvent } from 'react'
import { type Employee } from '../api'

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
