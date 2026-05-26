import { slotRecipes } from '@cerberus/panda-preset'
import { SystemStyleObject } from '@pandacss/types'
import { describe, expect, test } from 'bun:test'

describe('marquee recipe', () => {
  const { marquee } = slotRecipes
  const base = marquee.base as Record<string, SystemStyleObject>

  test('should be exported', () => {
    expect(marquee).toBeDefined()
  })

  test('should have a className', () => {
    expect(marquee.className).toEqual('marquee')
  })

  test('should have slots toBeDefined', () => {
    expect(marquee.slots).toEqual(['root', 'viewport', 'content', 'edge', 'item'])
  })

  test('expect jsx aliases to exist', () => {
    expect(marquee.jsx).toEqual([
      // primitives
      'MarqueeRoot',
      'MarqueeViewport',
      'MarqueeContent',
      'MarqueeEdge',
      'MarqueeItem',
      // abstractions
      'Marquee',
    ])
  })

  test('should have base.root styles', () => {
    expect(base.root).toMatchObject({
      '--marquee-edge-color': '{colors.page.surface.initial}',
      '--marquee-edge-size': '20%',
      position: 'relative',
      width: 'full',
      _paused: {
        animationPlayState: 'paused !important',
        '& *': {
          animationPlayState: 'paused !important',
        },
      },
    })
  })

  test('should have base.viewport styles', () => {
    expect(base.viewport).toMatchObject({
      display: 'flex',
      height: 'full',
      overflow: 'hidden',
      width: 'full',
    })
  })

  test('should have base.content styles', () => {
    expect(base.content).toMatchObject({
      animationTimingFunction: 'linear',
      animationFillMode: 'forwards',
      animationDuration: 'var(--marquee-duration)',
      animationDelay: 'var(--marquee-delay)',
      animationIterationCount: 'var(--marquee-loop-count)',
      display: 'flex',
      minWidth: 'max-content',
      _motionReduce: {
        animation: 'none !important',
      },
      "&[data-side='start'], &[data-side='end']": {
        animationName: 'marqueeX',
      },
      "&[data-side='top'], &[data-side='bottom']": {
        animationName: 'marqueeY',
      },
      _reverse: {
        animationDirection: 'reverse',
      },
      _horizontal: {
        flexDirection: 'row',
      },
      _vertical: {
        flexDirection: 'column',
      },
    })
  })

  test('should have base.edge styles', () => {
    expect(base.edge).toMatchObject({
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: '1',

      _sideStart: {
        background:
          'linear-gradient(to right, var(--marquee-edge-color, white), transparent)',
        insetInlineStart: '0',
        insetY: '0',
        width: 'var(--marquee-edge-size)',
        _rtl: {
          background:
            'linear-gradient(to left, var(--marquee-edge-color, white), transparent)',
        },
      },
      _sideEnd: {
        background:
          'linear-gradient(to left, var(--marquee-edge-color, white), transparent)',
        insetY: '0',
        insetInlineEnd: '0',
        width: 'var(--marquee-edge-size)',
        _rtl: {
          background:
            'linear-gradient(to right, var(--marquee-edge-color, white), transparent)',
        },
      },
      _sideTop: {
        background:
          'linear-gradient(to bottom, var(--marquee-edge-color, white), transparent)',
        height: 'var(--marquee-edge-size)',
        insetX: '0',
        top: '0',
      },
      _sideBottom: {
        background:
          'linear-gradient(to top, var(--marquee-edge-color, white), transparent)',
        height: 'var(--marquee-edge-size)',
        insetX: '0',
        bottom: '0',
      },
    })
  })
})
