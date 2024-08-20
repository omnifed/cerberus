import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('fileUploader recipe', () => {
  const { fileUploader } = slotRecipes
  const BORDER_COLOR = 'action.border.focus'

  test('should be exported', () => {
    expect(fileUploader).toBeDefined()
  })

  test('should have a base style', () => {
    expect(fileUploader.base?.container).toMatchObject({
      borderColor: 'page.border.100',
      borderStyle: 'dashed',
      borderWidth: '2.5px',
      bgColor: 'page.surface.100',
      justify: 'center',
      minH: '14rem',
      maxW: '36rem',
      py: '6',
      rounded: 'md',
      transitionProperty: 'background-color, border, opacity',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
      _hover: {
        borderColor: BORDER_COLOR,
        borderStyle: 'solid',
        bgColor: 'action.ghost.hover',
      },
      _isOver: {
        borderColor: BORDER_COLOR,
        borderStyle: 'solid',
        bgColor: 'action.ghost.hover',
      },
      _isDropped: {
        opacity: '0.5',
      },
    })
  })

  test('should have a icon style', () => {
    expect(fileUploader.base?.icon).toMatchObject({
      mxi: 'auto',
      p: '2',
    })
  })

  test('should have a heading style', () => {
    expect(fileUploader.base?.heading).toMatchObject({
      pt: '2',
      textStyle: 'h6',
    })
  })

  test('should have a description style', () => {
    expect(fileUploader.base?.description).toMatchObject({
      color: 'action.navigation.initial',
      textDecoration: 'underline',
      textStyle: 'label-sm',
      transitionProperty: 'color',
      transitionDuration: '150ms',
    })
  })

  test('should have a input style', () => {
    expect(fileUploader.base?.input).toMatchObject({
      appearance: 'none',
      bottom: '0',
      cursor: 'pointer',
      left: '0',
      opacity: '0',
      position: 'absolute',
      right: '0',
      top: '0',
      rounded: 'md',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: BORDER_COLOR,
        outlineOffset: '2px',
      },
    })
  })
})
