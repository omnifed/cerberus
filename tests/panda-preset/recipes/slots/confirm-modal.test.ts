import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('confirm-modal recipe', () => {
  const { confirmModal } = slotRecipes

  test('should be exported', () => {
    expect(confirmModal).toBeDefined()
  })

  test('should have a base style', () => {
    expect(confirmModal.base?.dialog).toMatchObject({
      alignSelf: 'safe center',
      bgColor: 'page.surface.100',
      mxi: 'auto',
      rounded: 'md',
      shadow: 'lg',
      _backdrop: {
        bgColor: 'page.backdrop.initial',
        backdropFilter: 'blur(2px)',
        backdropBlur: 'sm',
      },
      p: '8',
      md: {
        w: '35.25rem',
      },
    })
  })

  test('should have a icon style', () => {
    expect(confirmModal.base?.icon).toMatchObject({
      mxi: 'auto',
      p: '2',
    })
  })

  test('should have a heading style', () => {
    expect(confirmModal.base?.heading).toMatchObject({
      color: 'page.text.initial',
      textStyle: 'h4',
    })
  })

  test('should have a description style', () => {
    expect(confirmModal.base?.description).toMatchObject({
      color: 'page.text.initial',
    })
  })

  test('should have a default palette', () => {
    const defaultVariants = confirmModal.defaultVariants as { palette: string }
    expect(defaultVariants?.palette).toBe('action')
  })

  test('should have a palette variant', () => {
    expect(confirmModal.variants?.palette).toMatchObject({
      action: {
        icon: {
          cerbGradient: 'purple',
          color: 'action.navigation.initial',
        },
      },
      danger: {
        icon: {
          bgColor: 'danger.surface.initial',
          color: 'danger.text.100',
        },
      },
    })
  })
})
