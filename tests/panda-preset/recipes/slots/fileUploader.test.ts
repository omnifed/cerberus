import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('fileUploader recipe', () => {
  const { fileUploader } = slotRecipes

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
      transitionProperty: 'background-color, border',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
      _hover: {
        borderColor: 'action.border.focus',
        bgColor: 'action.ghost.hover',
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
      bottom: '0',
      cursor: 'pointer',
      left: '0',
      opacity: '0',
      position: 'absolute',
      right: '0',
      top: '0',
    })
  })
})
