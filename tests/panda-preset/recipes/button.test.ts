import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('button recipe', () => {
  const { button } = recipes

  test('should be exported', () => {
    expect(button).toBeDefined()
  })

  test('should have a base style', () => {
    expect(button.base).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      fontWeight: '600',
      gap: '2',
      justifyContent: 'center',
      lineHeight: '0',
      outline: 'none',
      textDecoration: 'none',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      h: '3.5rem',
      pxi: '4',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _readOnly: {
        cursor: 'default',
      },
      md: {
        h: '2.75rem',
      },
    })
  })

  test('should have an action palette variant', () => {
    expect(button.variants?.palette.action).toMatchObject({
      colorPalette: 'action',
    })
  })

  test('should have an danger palette variant', () => {
    expect(button.variants?.palette.danger).toMatchObject({
      colorPalette: 'danger',
    })
  })

  test('should have a text usage variant', () => {
    expect(button.variants?.usage.text).toMatchObject({
      color: 'colorPalette.text.alternate',
      borderColor: 'transparent',
      transitionProperty: 'border-color, color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        borderColor: 'colorPalette.border.initial',
      },
      _active: {
        color: 'colorPalette.text.initial',
      },
      _disabled: {
        _active: {
          color: 'colorPalette.text.alternate',
        },
      },
    })
  })

  test('should have an outline usage variant', () => {
    expect(button.variants?.usage.outline).toMatchObject({
      bgColor: 'colorPalette.bg.100.initial',
      border: '4px solid',
      borderColor: 'colorPalette.border.initial',
    })
  })

  test('should have a filled usage variant', () => {
    expect(button.variants?.usage.filled).toMatchObject({
      bgColor: 'colorPalette.bg.initial',
      color: 'colorPalette.text.initial',
      _hover: {
        bgColor: 'colorPalette.bg.hover',
        _disabled: {
          bgColor: 'colorPalette.bg.initial',
        },
      },
      _active: {
        bgColor: 'colorPalette.bg.active',
      },
    })
  })

  test('should have a sharp shape variant', () => {
    expect(button.variants?.shape.sharp).toMatchObject({})
  })

  test('should have a rounded shape variant', () => {
    expect(button.variants?.shape.rounded).toMatchObject({
      pxi: '8',
      rounded: 'full',
    })
  })

  test('should have default variants', () => {
    expect(button.defaultVariants).toMatchObject({
      palette: 'action',
      usage: 'filled',
      shape: 'sharp',
    })
  })
})
