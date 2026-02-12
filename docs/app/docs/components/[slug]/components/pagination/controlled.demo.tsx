'use client'

import { Pagination } from '@cerberus-design/react'
import { useState } from 'react'

export function ControlledDemo() {
  const [currentPage, setCurrentPage] = useState<number>(1)

  return (
    <Pagination
      count={5000}
      onPageChange={(details) => setCurrentPage(details.page)}
      page={currentPage}
      pageSize={10}
      siblingCount={2}
    />
  )
}
