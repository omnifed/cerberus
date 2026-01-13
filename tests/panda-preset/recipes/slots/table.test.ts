import { describe, test, expect } from 'bun:test'
import { focusStates, slotRecipes } from '@cerberus/panda-preset'

describe('table recipe', () => {
  const { table } = slotRecipes

  test('should have a jsx property', () => {
    expect(table.jsx).toMatchObject([
      'TableRoot',
      'TableTrigger',
      'Table',
      'Caption',
      'Thead',
      'Th',
      'Tbody',
      'Tr',
      'Td',
      'Tfoot',
    ])
  })

  test('should have a base.root style', () => {
    expect(table.base?.root).toMatchObject({
      border: '1px solid',
      borderColor: 'page.border.200',
      rounded: 'md',
      w: 'full',
      '&:is([data-sticky=true])': {
        border: 'none',
        borderColor: 'initial',
        '& :where(thead > tr)': {
          position: 'sticky',
          top: 0,
          zIndex: 'sticky',
        },
      },
    })
  })

  test('should have a base.table style', () => {
    expect(table.base?.table).toMatchObject({
      borderCollapse: 'collapse',
      borderSpacing: '0',
      textAlign: 'start',
      verticalAlign: 'top',
      width: 'full',
    })
  })

  test('should have a base.caption style', () => {
    expect(table.base?.caption).toMatchObject({
      h: '0',
      lineHeight: '0',
      opacity: '0',
    })
  })

  test('should have a base.thead style', () => {
    expect(table.base?.thead).toMatchObject({
      textAlign: 'start',
      _first: {
        borderTop: 'none',
      },
    })
  })

  test('should have a base.th style', () => {
    expect(table.base?.th).toMatchObject({
      borderColor: 'page.border.200',
      bgColor: 'page.bg.initial',
      fontWeight: '600',
      h: 'var(--table-cell-size, 3rem)',
      paddingInline: 'var(--table-cell-padding-x, 3)',
      textAlign: 'left',
      textStyle: 'label-md',
      transitionProperty: 'background-color',
      transitionDuration: '150ms',
      userSelect: 'none',
      verticalAlign: 'middle',
      _first: {
        borderTopLeftRadius: 'md',
      },
      _last: {
        borderTopRightRadius: 'md',
      },
      '&:has(button)': {
        paddingInline: 'initial',
      },
    })
  })

  test('should have a base.trigger style', () => {
    expect(table.base?.trigger).toMatchObject({
      alignItems: 'center',
      borderRadius: 'inherit',
      display: 'inline-flex',
      h: 'full',
      justifyContent: 'space-between',
      paddingInline: 'var(--table-cell-padding-x, 3)',
      w: 'full',
      _hover: {
        bgColor: 'page.bg.100',
      },
      _active: {
        bgColor: 'action.ghost.active',
      },
      _focusVisible: focusStates._focusVisible,
    })
  })

  test('should have a base.tbody style', () => {
    expect(table.base?.tbody).toMatchObject({
      bgColor: 'page.surface.100',
    })
  })

  test('should have a base.tr style', () => {
    expect(table.base?.tr).toMatchObject({
      bgColor: 'page.surface.100',
      _even: {
        bgColor: 'var(--table-zebra-bg)',
      },
      _last: {
        '& :where(td)': {
          _first: {
            borderBottomLeftRadius: 'md',
          },
          _last: {
            borderBottomRightRadius: 'md',
          },
        },
      },
    })
  })

  test('should have a base.td style', () => {
    expect(table.base?.td).toMatchObject({
      alignItems: 'center',
      borderTop: '1px solid',
      borderColor: 'page.border.200',
      h: 'var(--table-cell-size)',
      pxi: 'var(--table-cell-padding-x)',
      textAlign: 'start',
      textStyle: 'label-md',
      _last: {
        borderRight: 'none',
      },
    })
  })

  test('should have a base.tfoot style', () => {
    expect(table.base?.tfoot).toMatchObject({
      _first: {
        borderTop: 'none',
      },
    })
  })

  test('should have a variants style', () => {
    expect(table.variants).toMatchObject({
      size: {
        sm: {
          root: {
            '--table-cell-size': '2rem',
            '--table-cell-padding-x': '0.75rem',
          },
        },
        md: {
          root: {
            '--table-cell-size': '3rem',
            '--table-cell-padding-x': '0.75rem',
          },
        },
        lg: {
          root: {
            '--table-cell-size': '3.5rem',
            '--table-cell-padding-x': '1rem',
          },
        },
      },
      decoration: {
        default: {
          root: {
            '--table-zebra-bg': '{colors.page.surface.100}',
          },
        },
        zebra: {
          root: {
            '--table-zebra-bg': '{colors.page.surface.initial}',
          },
        },
      },
    })
  })

  test('should have a default variant', () => {
    expect(table.defaultVariants).toMatchObject({
      size: 'md',
      decoration: 'default',
    })
  })
})
