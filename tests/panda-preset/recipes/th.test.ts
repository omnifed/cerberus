import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('th recipe', () => {
  const { th } = recipes

  test('should be exported', () => {
    expect(th).toBeDefined()
  })

  test('should have a base style', () => {
    expect(th.base).toMatchObject({
      borderColor: 'page.border.200',
      bgColor: 'page.bg.initial',
      fontWeight: '600',
      textAlign: 'left',
      textStyle: 'label-md',
      transitionProperty: 'background-color',
      transitionDuration: '150ms',
      verticalAlign: 'middle',
      _last: {
        borderRight: 'none',
      },
      _hover: {
        bgColor: 'page.bg.100',
      },
      _active: {
        bgColor: 'action.ghost.active',
      },
    })
  })

  test('should have size variants', () => {
    const { size } = th.variants as { size: Record<string, unknown> }
    expect(size).toMatchObject({
      md: {
        h: '3rem',
        pxi: '3',
      },
      lg: {
        h: '3.5rem',
        pxi: '4',
      },
    })
  })

  test('should have a default size variant', () => {
    expect(th.defaultVariants).toMatchObject({
      size: 'md',
    })
  })
})
