import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('avatar recipe', () => {
  const { avatar } = recipes

  test('should be exported', () => {
    expect(avatar).toBeDefined()
  })

  test('should have a base style', () => {
    expect(avatar.base).toMatchObject({
      fontFamily: 'mono',
      textTransform: 'uppercase',
    })
  })

  test('should have a gradient variant', () => {
    expect(avatar.variants?.gradient).toMatchObject({
      'charon-light': {
        gradient: 'charon-light',
      },
      'charon-dark': {
        gradient: 'charon-dark',
      },
      'nyx-light': {
        gradient: 'nyx-light',
      },
      'nyx-dark': {
        gradient: 'nyx-dark',
      },
      'amphiaraus-light': {
        gradient: 'amphiaraus-light',
      },
      'amphiaraus-dark': {
        gradient: 'amphiaraus-dark',
      },
      'styx-light': {
        gradient: 'styx-light',
      },
      'styx-dark': {
        gradient: 'styx-dark',
      },
      'thanatos-light': {
        gradient: 'thanatos-light',
      },
      'thanatos-dark': {
        gradient: 'thanatos-dark',
      },
      'hades-light': {
        gradient: 'hades-light',
      },
      'hades-dark': {
        gradient: 'hades-dark',
      },
      'asphodel-light': {
        gradient: 'asphodel-light',
      },
      'asphodel-dark': {
        gradient: 'asphodel-dark',
      },
      none: {},
    })
  })

  test('should have a size variant', () => {
    expect(avatar.variants?.size).toMatchObject({
      xs: {
        fontSize: 'xs',
        h: '1.5rem',
        w: '1.5rem',
      },
      sm: {
        fontSize: 'xs',
        h: '2rem',
        w: '2rem',
      },
      md: {
        fontSize: 'sm',
        h: '2.5rem',
        w: '2.5rem',
      },
      lg: {
        fontSize: 'xl',
        h: '3rem',
        w: '3rem',
      },
      xl: {
        fontSize: '2xl',
        h: '4rem',
        w: '4rem',
      },
      '2xl': {
        fontSize: '2rem',
        h: '7rem',
        w: '7rem',
      },
      '3xl': {
        fontSize: '2.625rem',
        h: '10rem',
        w: '10rem',
      },
      '4xl': {
        fontSize: '3.5rem',
      },
    })
  })

  test('should have default variants', () => {
    expect(avatar.defaultVariants).toMatchObject({
      gradient: 'charon-light',
      size: 'lg',
    })
  })
})
