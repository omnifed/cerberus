import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('buttonGroup recipe', () => {
  const { buttonGroup } = recipes

  test('should be exported', () => {
    expect(buttonGroup).toBeDefined()
  })

  test('should have correct base styles', () => {
    expect(buttonGroup?.base).toEqual({
      display: 'inline-flex',
      gap: 'var(--btn-group-gap)',
      isolation: 'isolate',
      position: 'relative',
    })
  })

  test('should have correct variants', () => {
    expect(buttonGroup?.variants).toEqual({
      layout: {
        default: {
          gap: '{spacing.md}',
        },
        attached: {
          gap: 0,
        },
      },
    })
  })

  test('should have no default variants', () => {
    expect(buttonGroup?.defaultVariants).toEqual({
      layout: 'default',
    })
  })
})
