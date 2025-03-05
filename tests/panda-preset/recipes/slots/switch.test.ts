import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('switchRecipe recipe', () => {
  const { switchRecipe } = slotRecipes

  test('should be exported', () => {
    expect(switchRecipe).toBeDefined()
  })

  test('should have a jsx property', () => {
    expect(switchRecipe.jsx).toEqual([
      'SwitchRoot',
      'SwitchControl',
      'SwitchThumb',
      'SwitchLabel',
      'Switch',
    ])
  })

  test('should have a base.root property', () => {
    expect(switchRecipe.base?.root).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      gap: 'sm',
      position: 'relative',
      verticalAlign: 'middle',
      '--switch-x':
        'calc(var(--switch-width) - calc(var(--switch-height) + 0.20rem))',
    })
  })

  test('should have a base.label property', () => {
    expect(switchRecipe.base?.label).toEqual({
      ...slotRecipes.field.base?.label,
    })
  })

  test('should have a base.control property', () => {
    expect(switchRecipe.base?.control).toMatchObject({
      alignItems: 'center',
      bgColor: 'page.surface.300',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: 0,
      h: 'var(--switch-height)',
      justifyContent: 'flex-start',
      paddingInline: '0.37rem',
      position: 'relative',
      rounded: 'var(--switch-radius)',
      transitionProperty: 'background-color, outline',
      transitionDuration: 'fast',
      w: 'var(--switch-width)',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _checked: {
        bgColor: 'action.bg.initial',
      },
      _userInvalid: {
        outline: '2px solid',
        outlineColor: 'border.error',
        outlineOffset: '2px',
        bgColor: 'danger.surface.initial',
      },
      _readOnly: {
        cursor: 'default',
      },
    })
  })

  test('should have a base.thumb property', () => {
    expect(switchRecipe.base?.thumb).toMatchObject({
      colorPalette: 'page',
      alignItems: 'center',
      bgColor: 'colorPalette.text.initial',
      color: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      h: 'var(--thumb-size)',
      justifyContent: 'center',
      p: '0.125rem',
      rounded: 'var(--switch-radius)',
      transitionProperty: 'background-color, color, translate, transform',
      transitionDuration: 'fast',
      w: 'var(--thumb-size)',
      _checked: {
        colorPalette: 'action',
        color: 'action.text.200',
        translate: 'var(--switch-x) 0',
      },
    })
  })

  test('should have a variants property', () => {
    expect(switchRecipe.variants).toMatchObject({
      size: {
        sm: {
          root: {
            '--switch-height': '1.5rem',
            '--switch-width': '3.25rem',
            '--switch-radius': '31.25rem',
            '--thumb-size': '1rem',
          },
        },
        lg: {
          root: {
            '--switch-height': '2.5rem',
            '--switch-width': '5rem',
            '--switch-radius': '0.75rem',
            '--thumb-size': '1.75rem',
          },
        },
      },
    })
  })

  test('should have a defaultVariants property', () => {
    expect(switchRecipe.defaultVariants).toMatchObject({
      size: 'sm',
    })
  })
})
