import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('datePicker recipe', () => {
  const { datePicker } = slotRecipes

  test('should be exported', () => {
    expect(datePicker).toBeDefined()
  })

  test('should have a base style', () => {
    expect(datePicker.base?.control).toMatchObject({
      alignItems: 'center',
      display: 'flex',
      border: '1px solid',
      borderColor: 'action.border.100',
      gap: 'xs',
      h: '2.5rem',
      position: 'relative',
      paddingInlineStart: 'xs',
      paddingInlineEnd: 'md',
      rounded: 'md',
      w: '9.25rem',
      '&:is([data-range])': {
        _before: {
          bgColor: 'page.border.initial',
          content: '""',
          h: '1.5rem',
          position: 'absolute',
          right: '48%',
          top: '50%',
          transform: 'translate(50%, -50%)',
          w: '1px',
          zIndex: 'decorator',
        },
        w: '17.5rem',
      },
    })
  })

  test('should have an input style', () => {
    expect(datePicker.base?.input).toMatchObject({
      bgColor: 'page.surface.initial',
      bottom: 0,
      left: 0,
      paddingInlineStart: 'xl',
      position: 'absolute',
      right: 0,
      rounded: 'inherit',
      textStyle: 'body-sm',
      textTransform: 'uppercase',
      top: 0,
      w: 'full',
      zIndex: 'base',
    })
  })

  test('should have a trigger style', () => {
    expect(datePicker.base?.trigger).toMatchObject({
      zIndex: '1',
    })
  })

  test('should have a content style', () => {
    expect(datePicker.base?.content).toMatchObject({
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      overflow: 'hidden',
      rounded: 'sm',
      shadow: 'md',
      w: '19.25rem',
    })
  })

  test('should have a content style with animationStyles', () => {
    const content = datePicker.base?.content as { [key: string]: unknown }
    expect(content._open).toMatchObject({
      animationStyle: 'slide-fade-in',
      animationDuration: 'fast',
    })
  })

  test('should have a content style with animationStyles', () => {
    const content = datePicker.base?.content as { [key: string]: unknown }
    expect(content._closed).toMatchObject({
      animationStyle: 'slide-fade-out',
      animationDuration: 'faster',
    })
  })

  test('should have a viewControl style', () => {
    expect(datePicker.base?.viewControl).toMatchObject({
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'page.border.initial',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBlock: 'xs',
      paddingInline: 'xs',
      w: 'full',
    })
  })

  test('should have a table style', () => {
    expect(datePicker.base?.table).toMatchObject({
      minH: '16.13rem',
      w: 'full',
    })
  })

  test('should have a tableHeader style', () => {
    expect(datePicker.base?.tableHeader).toMatchObject({
      borderTopLeftRadius: 'sm',
      borderTopRightRadius: 'sm',
      h: '2.69rem',
      textStyle: 'heading-xs',
    })
  })

  test('should have a tableCell style', () => {
    expect(datePicker.base?.tableCell).toMatchObject({
      _selected: {
        '&:has(> [data-range-start])': {
          bgColor: 'page.bg.100',
          borderTopLeftRadius: 'full',
          borderBottomLeftRadius: 'full',
        },
        '&:has(> [data-range-end])': {
          bgColor: 'page.bg.100',
          borderTopRightRadius: 'full',
          borderBottomRightRadius: 'full',
        },
      },
    })
  })

  test('should have a tableCellTrigger style', () => {
    expect(datePicker.base?.tableCellTrigger).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      flexDirection: 'column',
      h: '2.69rem',
      justifyContent: 'center',
    })
  })

  test('should have a tableCellTrigger style', () => {
    expect(datePicker.base?.tableCellTrigger).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      flexDirection: 'column',
      h: '2.69rem',
      justifyContent: 'center',
      position: 'relative',
      textStyle: 'body-sm',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      rounded: 'full',
      w: 'full',
      zIndex: 1,
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _pastDay: {
        color: 'page.text.100',
        _selected: {
          color: 'action.text.initial',
        },
      },
      _inRange: {
        '&:not([data-selected])': {
          bgColor: 'page.bg.100',
          borderRadius: 0,
          color: 'page.text.initial',
        },
      },
      _today: {
        _after: {
          bgColor: 'page.text.initial',
          bottom: '0.25rem',
          content: '""',
          h: '0.25rem',
          left: '50%',
          position: 'absolute',
          rounded: 'full',
          transform: 'translate(-50%, -50%)',
          w: '0.25rem',
        },
      },
      _hover: {
        '&:not([data-selected], [data-disabled])': {
          bgColor: 'action.bg.hover',
          color: 'action.text.initial',
          _today: {
            _after: {
              bgColor: 'action.text.initial',
            },
          },
        },
      },
    })
  })
})
