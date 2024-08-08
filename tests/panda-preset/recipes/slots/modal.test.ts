import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('modal recipe', () => {
  const { modal } = slotRecipes

  test('should be exported', () => {
    expect(modal).toBeDefined()
  })

  test('should have a base style', () => {
    expect(modal.base?.dialog).toMatchObject({
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
      _motionSafe: {
        animationName: 'fadeInDown',
        animationDuration: '250ms',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'forwards',
      },
      _reduceMotion: {
        opacity: '1',
      },
      opacity: '0',
      p: '8',
      md: {
        w: '35.25rem',
      },
    })
  })

  test('should have a icon style', () => {
    expect(modal.base?.icon).toMatchObject({
      mxi: 'auto',
      p: '2',
    })
  })

  test('should have a heading style', () => {
    expect(modal.base?.heading).toMatchObject({
      color: 'page.text.initial',
      textStyle: 'h4',
    })
  })

  test('should have a description style', () => {
    expect(modal.base?.description).toMatchObject({
      color: 'page.text.initial',
    })
  })
})
