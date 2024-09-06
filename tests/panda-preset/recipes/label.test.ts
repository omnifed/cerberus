import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('label recipe', () => {
  const { label } = recipes

  test('should be exported', () => {
    expect(label).toBeDefined()
  })

  test('should have a base style', () => {
    expect(label.base).toMatchObject({
      color: 'page.text.initial',
      userSelect: 'none',
      _disabled: {
        color: 'page.text.100',
      },
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

  test('should have a size variant', () => {
    expect(label.variants!.size).toMatchObject({
      sm: {
        textStyle: 'label-sm',
      },
      md: {
        textStyle: 'label-md',
      },
    })
  })
})
