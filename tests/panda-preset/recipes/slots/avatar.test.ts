import { describe, test, expect } from 'bun:test'
import { focusStates, slotRecipes } from '@cerberus/panda-preset'

describe('avatar recipe', () => {
  const { avatar } = slotRecipes

  test('should be exported', () => {
    expect(avatar).toBeDefined()
  })

  test('should have a JSX property', () => {
    expect(avatar.jsx).toMatchObject([
      'AvatarRoot',
      'AvatarImage',
      'AvatarFallback',
      'Avatar',
    ])
  })

  test('should have a base style', () => {
    expect(avatar.base?.root).toMatchObject({
      alignItems: 'center',
      borderRadius: 'var(--avatar-border-radius)',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      fontFamily: 'mono',
      fontSize: 'var(--avatar-font-size)',
      justifyContent: 'center',
      overflow: 'hidden',
      size: 'var(--avatar-size)',
      textTransform: 'uppercase',
      _focusVisible: focusStates._focusVisible,
    })
  })

  test('should have an image style', () => {
    expect(avatar.base?.image).toMatchObject({
      objectFit: 'cover',
    })
  })

  test('should have a fallback style', () => {
    expect(avatar.base?.fallback).toMatchObject({
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 'inherit',
    })
  })

  test('should have a size variant', () => {
    expect(avatar.variants?.size).toMatchObject({
      xs: {
        root: {
          '--avatar-font-size': '0.75rem',
          '--avatar-size': '1.5rem',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': '0.75rem',
          '--avatar-size': '2rem',
        },
      },
      md: {
        root: {
          '--avatar-font-size': '0.875rem',
          '--avatar-size': '2.5rem',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': '1.25rem',
          '--avatar-size': '3rem',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': '1.5rem',
          '--avatar-size': '4rem',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': '2rem',
          '--avatar-size': '7rem',
        },
      },
      '3xl': {
        root: {
          '--avatar-font-size': '2.625rem',
          '--avatar-size': '10rem',
        },
      },
      '4xl': {
        root: {
          '--avatar-font-size': '3.5rem',
          '--avatar-size': '12rem',
        },
      },
    })
  })

  test('should have a shape variant', () => {
    expect(avatar.variants?.shape).toMatchObject({
      circle: {
        root: {
          '--avatar-border-radius': '50%',
        },
      },
      square: {
        root: {
          '--avatar-border-radius': 'var(--cerberus-radii-md)',
        },
      },
    })
  })

  test('should have a defaultVariants property', () => {
    expect(avatar.defaultVariants).toMatchObject({
      gradient: 'none',
      size: 'md',
      shape: 'circle',
    })
  })
})
