import { describe, test, expect } from 'bun:test'
import { focusStates, slotRecipes } from '@cerberus-design/panda-preset'

describe('toggle recipe', () => {
  const { toggle } = slotRecipes
  const BG_COLOR = 'background-color'
  const SM_RADII = 'full'
  const LG_RADII = '0.75rem'

  test('should be exported', () => {
    expect(toggle).toBeDefined()
  })

  test('should have a base style', () => {
    expect(toggle.base?.track).toMatchObject({
      bgColor: 'neutral.surface.300',
      position: 'relative',
      _motionSafe: {
        transitionProperty: BG_COLOR,
        transitionDuration: '150ms',
      },
      _checked: {
        bgColor: 'action.bg.initial',
      },
    })
  })

  test('should have a input style', () => {
    expect(toggle.base?.input).toMatchObject({
      appearance: 'none',
      h: 'full',
      position: 'absolute',
      w: 'full',
      zIndex: 'decorator',
      ...focusStates,
    })
  })

  test('should have a thumb style', () => {
    expect(toggle.base?.thumb).toMatchObject({
      bgColor: 'white',
      color: 'white',
      transform: 'translateX(12%) scale(0.85)',
      _motionSafe: {
        transitionProperty: 'transform, color, box-shadow',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in',
      },
      _peerChecked: {
        transform: 'translateX(164%) scale(1)',
        color: 'action.text.200',
      },
      _peerDisabled: {
        opacity: '0.5',
      },
      _groupHover: {
        boxShadow: '0px 0px 8px 0px rgba(22, 1, 38, 0.4)',
      },
    })
  })

  test('should have a size variant', () => {
    expect(toggle.variants?.size).toMatchObject({
      sm: {
        track: {
          h: '1.5rem',
          rounded: SM_RADII,
          w: '3.25rem',
        },
        input: {
          rounded: SM_RADII,
        },
        thumb: {
          h: '1rem',
          rounded: SM_RADII,
          w: '1rem',
          _peerChecked: {
            transform: 'translateX(200%) scale(1)',
          },
        },
      },
      lg: {
        track: {
          h: '2.5rem',
          rounded: LG_RADII,
          w: '5rem',
        },
        input: {
          rounded: LG_RADII,
        },
        thumb: {
          h: '1.75rem',
          rounded: LG_RADII,
          w: '1.75rem',
        },
      },
    })
  })

  test('should have a default variant', () => {
    expect(toggle.defaultVariants).toMatchObject({
      size: 'sm',
    })
  })
})
