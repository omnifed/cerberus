import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('label recipe', () => {
  const { label } = recipes

  test('should be exported', () => {
    expect(label).toBeDefined()
  })

  test('should have a base style', () => {
    expect(label.base).toMatchObject({
      textStyle: 'label-sm',
      pb: '1',
    })
  })
})
