import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('fileStatus recipe', () => {
  const { fileStatus } = slotRecipes

  test('should be exported', () => {
    expect(fileStatus).toBeDefined()
  })

  test('should have a base style', () => {
    expect(fileStatus.base?.root).toMatchObject({
      bgColor: 'page.surface.100',
      border: '2px solid',
      borderColor: 'page.border.initial',
      p: 4,
      rounded: 'sm',
      w: 'full',
    })
  })

  test('should have a icon style', () => {
    expect(fileStatus.base?.icon).toMatchObject({
      p: 2,
    })
  })

  test('should have a todo status variant', () => {
    expect(fileStatus.variants?.status?.todo?.icon).toMatchObject({
      gradient: 'charon-dark',
      colorPalette: 'action',
    })
  })

  test('should have a processing status variant', () => {
    expect(fileStatus.variants?.status?.processing?.icon).toMatchObject({
      gradient: 'charon-dark',
      colorPalette: 'action',
    })
  })

  test('should have a done status variant', () => {
    expect(fileStatus.variants?.status?.done?.icon).toMatchObject({
      gradient: 'thanatos-light',
      colorPalette: 'success',
    })
  })

  test('should have a error status variant', () => {
    expect(fileStatus.variants?.status?.error?.icon).toMatchObject({
      colorPalette: 'danger',
      gradient: 'hades-dark',
    })
  })

  test('should have a default status variant', () => {
    const defaultVariants = fileStatus.defaultVariants as { status: string }
    expect(defaultVariants.status).toBe('todo')
  })
})
