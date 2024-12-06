import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

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
      w: '8.75rem',
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
      zIndex: 'decorator',
    })
  })

  test('should have a positioner style', () => {
    expect(datePicker.base?.positioner).toMatchObject({
      '--dp-positioner-z-index': 'zIndex.popover',
      zIndex: 'var(--dp-positioner-z-index)',
    })
  })

  test('should have a content style', () => {
    expect(datePicker.base?.content).toMatchObject({
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      h: '19.75rem',
      overflow: 'hidden',
      rounded: 'sm',
      shadow: 'md',
      w: '19.25rem',
    })
  })

  test('should have a content style with motionStyles', () => {
    const content = datePicker.base?.content as { [key: string]: unknown }
    expect(content._open).toMatchObject({
      '&[data-placement^=top]': {
        animationName: 'slideFromBottom, fadeIn',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slideFromTop, fadeIn',
      },
      '&[data-placement^=left]': {
        animationName: 'slideFromRight, fadeIn',
      },
      '&[data-placement^=right]': {
        animationName: 'slideFromLeft, fadeIn',
      },
    })
  })

  test('should have a content style with motionStyles', () => {
    const content = datePicker.base?.content as { [key: string]: unknown }
    expect(content._closed).toMatchObject({
      '&[data-placement^=top]': {
        animationName: 'slideToBottom, fadeOut',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slideToTop, fadeOut',
      },
      '&[data-placement^=left]': {
        animationName: 'slideToRight, fadeOut',
      },
      '&[data-placement^=right]': {
        animationName: 'slideToLeft, fadeOut',
      },
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
        bgColor: 'action.bg.hover',
        color: 'action.text.initial',
        _today: {
          _after: {
            bgColor: 'action.text.initial',
          },
        },
      },
      _selected: {
        bgColor: 'action.bg.active',
        color: 'action.text.initial',
        fontWeight: '700',
      },
    })
  })
})
