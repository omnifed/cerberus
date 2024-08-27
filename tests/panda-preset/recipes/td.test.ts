import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('td recipe', () => {
  const { td } = recipes

  test('should be exported', () => {
    expect(td).toBeDefined()
  })

  test('should have a base style', () => {
    expect(td.base).toMatchObject({
      borderTop: '1px solid',
      borderColor: 'page.border.200',
      textStyle: 'label-md',
      _last: {
        borderRight: 'none',
      },
    })
  })

  test('should have size variants', () => {
    const { size } = td.variants as { size: Record<string, unknown> }
    expect(size).toMatchObject({
      sm: {
        h: '2rem',
        pxi: '3',
      },
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
    expect(td.defaultVariants).toMatchObject({
      size: 'md',
    })
  })
})
