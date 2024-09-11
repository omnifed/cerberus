import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('modalIcon recipe', () => {
  const { modalIcon } = recipes
  test('should be exported', () => {
    expect(modalIcon).toBeDefined()
  })

  test('should have a base style', () => {
    expect(modalIcon.base).toMatchObject({
      mxi: 'auto',
      p: '2',
    })
  })

  test('should have a palette variant', () => {
    expect(modalIcon.variants!.palette).toMatchObject({
      action: {
        colorPalette: 'action',
        cerbGradient: 'purple',
        color: 'colorPalette.text.inverse',
      },
      danger: {
        colorPalette: 'danger',
        bgColor: 'danger.surface.initial',
      },
    })
  })

  test('should have a default palette variant', () => {
    const defaultVariants = modalIcon.defaultVariants as { palette: string }
    expect(defaultVariants!.palette).toBe('action')
  })
})
