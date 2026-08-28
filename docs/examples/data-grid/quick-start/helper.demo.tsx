import { createColumnHelper } from '@cerberus-design/data-grid'
import { type Employee } from './data.demo'

export const columnHelper = createColumnHelper<Employee>()
