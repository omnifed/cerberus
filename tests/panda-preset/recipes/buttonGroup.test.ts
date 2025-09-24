import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('buttonGroup recipe', () => {
  const { buttonGroup } = recipes

  test('should be exported', () => {
    expect(buttonGroup).toBeDefined()
  })
})
