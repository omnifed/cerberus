import { describe, test, expect } from 'bun:test'
import { test as dataGridTest } from '@cerberus-design/data-grid'

describe('data-grid entry file', () => {
  test('should export test function', () => {
    expect(dataGridTest).toBeDefined()
  })
})
