import { Pagination } from '@cerberus-design/react'

export function AttachedDemo() {
  return (
    <Pagination count={20} pageSize={2} defaultPage={1} layout="attached" />
  )
}
