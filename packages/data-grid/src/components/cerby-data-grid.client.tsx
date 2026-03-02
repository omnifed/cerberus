'use client'

import { CerberusProvider } from '@cerberus-design/react'
import { DataGrid, type DataGridProps } from './data-grid.client'

/**
 * A Data Grid wrapped in the CerberusProvider in order to provide the necessary
 * context for the grid to function properly.
 */
export function CerberusDataGrid<TData>(props: DataGridProps<TData>) {
  return (
    <CerberusProvider>
      <DataGrid {...props} />
    </CerberusProvider>
  )
}
