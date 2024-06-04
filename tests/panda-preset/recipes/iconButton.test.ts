import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('iconButton recipe', () => {
  const { iconButton } = recipes

  test('should be exported', () => {
    expect(iconButton).toBeDefined()
  })

  test('should have a base style', () => {
    expect(iconButton.base).toMatchObject({
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
      h: '2.75rem',
      pxi: '0',
      w: '2.75rem',
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
        h: '1.5rem',
        w: '1.5rem',
      },
    })
  })

  test('should have an action palette variant', () => {
    expect(iconButton.variants?.palette.action).toMatchObject({
      colorPalette: 'action',
    })
  })

  test('should have an danger palette variant', () => {
    expect(iconButton.variants?.palette.danger).toMatchObject({
      colorPalette: 'danger',
    })
  })

  test('should have a text usage variant', () => {
    expect(iconButton.variants?.usage.text).toMatchObject({
      color: 'colorPalette.text.alternate',
      bgColor: 'transparent',
      border: 'none',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        bgColor: 'colorPalette.bg.100.hover',
      },
      _active: {
        bgColor: 'colorPalette.bg.100.active',
        color: 'colorPalette.text.initial',
      },
      _disabled: {
        bgColor: 'transparent',
        _active: {
          color: 'colorPalette.text.alternate',
        },
      },
    })
  })

  test('should have a filled usage variant', () => {
    expect(iconButton.variants?.usage.filled).toMatchObject({
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

  test('should have a circle shape variant', () => {
    expect(iconButton.variants?.shape.circle).toMatchObject({
      pxi: '0',
      rounded: 'full',
    })
  })

  test('should have default variants', () => {
    expect(iconButton.defaultVariants).toMatchObject({
      palette: 'action',
      usage: 'text',
      shape: 'circle',
    })
  })
})
