import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('table recipe', () => {
  const { table } = slotRecipes

  test('should be exported', () => {
    expect(table).toBeDefined()
  })

  test('should have a base style', () => {
    expect(table.base?.container).toMatchObject({
      border: '1px solid',
      borderColor: 'page.border.200',
      rounded: 'md',
      overflow: 'hidden',
    })
  })

  test('should have a table style', () => {
    expect(table.base?.table).toMatchObject({
      borderCollapse: 'collapse',
      borderSpacing: '0',
      width: 'full',
    })
  })

  test('should have a caption style', () => {
    expect(table.base?.caption).toMatchObject({
      h: '0',
      lineHeight: '0',
      opacity: '0',
    })
  })
})
