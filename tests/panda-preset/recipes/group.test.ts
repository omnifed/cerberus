import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus/panda-preset'

describe('group recipe', () => {
  const { group } = recipes

  test('should be exported', () => {
    expect(group).toBeDefined()
  })

  test('should have metadata', () => {
    expect(group.className).toEqual('group')
    expect(group.description).toEqual('The styles for the Group component')
    expect(group.jsx).toEqual(['Group', 'ButtonGroup'])
  })

  test('should have base styles', () => {
    expect(group.base).toMatchObject({
      isolation: 'isolate',
      position: 'relative',
      '& [data-group-item]': {
        _focusVisible: {
          zIndex: 1,
        },
      },
    })
  })

  test('should have variants', () => {
    expect(group.variants).toMatchObject({
      orientation: {
        horizontal: {
          flexDirection: 'row',
        },
        vertical: {
          flexDirection: 'column',
        },
      },
      layout: {
        default: {
          display: 'inline-flex',
          gap: '2',
        },
        attached: {
          display: 'inline-flex',
          gap: '0',
        },
        grow: {
          display: 'flex',
          gap: '2',
          '& > *': {
            flex: 1,
          },
        },
      },
    })
  })

  test('should have compound variants', () => {
    expect(group.compoundVariants).toMatchObject([
      {
        orientation: 'horizontal',
        layout: 'attached',
        css: {
          '& > *:first-child': {
            borderEndRadius: '0',
            marginEnd: '-1px',
          },
          '& > *:not(:first-child):not(:last-child)': {
            borderRadius: '0',
            marginEnd: '-1px',
          },
          '& > *:last-child': {
            borderStartRadius: '0',
          },
        },
      },
      {
        orientation: 'vertical',
        layout: 'attached',
        css: {
          '& > *:first-child': {
            borderBottomRadius: '0!',
            marginBottom: '-1px',
          },
          '& > *:not(:first-child):not(:last-child)': {
            borderRadius: '0!',
            marginBottom: '-1px',
          },
          '& > *:last-child': {
            borderTopRadius: '0!',
          },
        },
      },
    ])
  })

  test('should have default variants', () => {
    expect(group.defaultVariants).toMatchObject({
      orientation: 'horizontal',
      layout: 'default',
    })
  })
})
