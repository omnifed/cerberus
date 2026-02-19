'use client'

import { useDataGridContext } from '../context'
import { useSignalValue } from '../adapter'

export function GridPagination() {
  const store = useDataGridContext()

  const pageIndex = useSignalValue(store.pageIndex)
  const pageCount = useSignalValue(store.pageCount)
  const pageSize = useSignalValue(store.pageSize)
  const rowCount = useSignalValue(store.rowCount)

  // Simple Pagination UI (Can be replaced with <Pagination.Root> from Ark)
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white">
      <div className="text-sm text-gray-500">
        Showing <span className="font-medium">{pageIndex * pageSize + 1}</span>{' '}
        to{' '}
        <span className="font-medium">
          {Math.min((pageIndex + 1) * pageSize, rowCount)}
        </span>{' '}
        of <span className="font-medium">{rowCount}</span> results
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => store.setPage(pageIndex - 1)}
          disabled={pageIndex === 0}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &gt;
        </button>
        <span className="text-sm font-medium text-gray-700">
          Page {pageIndex + 1} of {pageCount}
        </span>
        <button
          onClick={() => store.setPage(pageIndex + 1)}
          disabled={pageIndex >= pageCount - 1}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &lt;
        </button>
      </div>
    </div>
  )
}
