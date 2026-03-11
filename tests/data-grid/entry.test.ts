import { describe, test, expect } from 'bun:test'
import {
  createColumnHelper,
  CerberusDataGrid,
  DataGrid,
} from '@cerberus-design/data-grid'

describe('entry file', () => {
  test('should export createColumnHelper function', () => {
    expect(createColumnHelper).toBeDefined()
  })

  test('should export CerberusDataGrid component', () => {
    expect(CerberusDataGrid).toBeDefined()
  })

  test('should export DataGrid component', () => {
    expect(DataGrid).toBeDefined()
  })
})
