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

  test('should have a visible variant', () => {
    expect(label.variants!.usage.visible).toMatchObject({})
  })

  test('should have a hidden variant', () => {
    expect(label.variants!.usage.hidden).toMatchObject({
      srOnly: true,
    })
  })
})
