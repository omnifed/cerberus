import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('tbody recipe', () => {
  const { tbody } = recipes

  test('should be exported', () => {
    expect(tbody).toBeDefined()
  })

  test('should have a base style', () => {
    expect(tbody.base).toMatchObject({
      bgColor: 'page.surface.100',
    })
  })

  test('should have a decoration variant', () => {
    expect(tbody.variants).toMatchObject({
      decoration: {
        zebra: {
          '& tr': {
            _even: {
              bgColor: 'page.surface.initial',
            },
          },
        },
        default: {},
      },
    })
  })

  test('should have a default decoration variant', () => {
    expect(tbody.defaultVariants).toMatchObject({
      decoration: 'default',
    })
  })
})
