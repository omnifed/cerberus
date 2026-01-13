import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus/panda-preset'

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
          '--btn-group-gap': '{spacing.md}',
        },
        attached: {
          '--btn-group-gap': 0,
          '& > :is([data-scope="button"])': {
            borderTopRightRadius: '0!',
            borderBottomRightRadius: '0!',
          },
          '& > :is([data-scope="icon-button"])': {
            borderLeft: '1px solid',
            borderLeftColor: 'page.border.initial',
            borderTopLeftRadius: '0!',
            borderBottomLeftRadius: '0!',
          },
        },
      },
      shape: {
        sharp: {},
        rounded: {},
      },
    })
  })

  test('should have no default variants', () => {
    expect(buttonGroup?.defaultVariants).toEqual({
      layout: 'default',
      shape: 'sharp',
    })
  })

  test('should have correct compound variants', () => {
    expect(buttonGroup?.compoundVariants).toMatchObject([
      {
        layout: 'attached',
        shape: 'sharp',
        css: {
          '& > :is([data-scope="icon-button"])': {
            borderBottomRightRadius: '0!',
          },
        },
      },
    ])
  })
})
