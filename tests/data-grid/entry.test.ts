import { describe, test, expect } from 'bun:test'
import { createColumnHelper } from '@cerberus-design/data-grid'

describe('entry file', () => {
  test('should export createColumnHelper function', () => {
    expect(createColumnHelper).toBeDefined()
  })
})
