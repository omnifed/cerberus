import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('thead recipe', () => {
  const { thead } = recipes

  test('should be exported', () => {
    expect(thead).toBeDefined()
  })

  test('should have a base style', () => {
    expect(thead.base).toMatchObject({
      _first: {
        borderTop: 'none',
      },
    })
  })
})
