import { describe, test, expect } from 'bun:test'
import { noPageSlotPalettes, slotRecipes } from '@cerberus/panda-preset'

describe('Slider Recipe', () => {
  const { slider } = slotRecipes
  const base = slider.base as Record<string, object>
  const variants = slider.variants as Record<string, object>

  test('should be defined', () => {
    expect(slider).toBeDefined()
  })

  test('should have a className', () => {
    expect(slider.className).toEqual('slider')
  })

  test('should have a list of slots', () => {
    expect(slider.slots).toMatchObject([
      'root',
      'label',
      'thumb',
      'valueText',
      'track',
      'range',
      'control',
      'markerGroup',
      'marker',
      'draggingIndicator',
      'markerIndicator',
    ])
  })

  test('should have a jsx list', () => {
    expect(slider.jsx).toMatchObject([
      'SliderRoot',
      'SliderLabel',
      'SliderValueText',
      'SliderControl',
      'SliderTrack',
      'SliderRange',
      'SliderThumb',
      'SliderMarkerGroup',
      'SliderMarker',
      'SliderMarkerIndicator',
      'SliderDraggingIndicator',
      'Slider',
    ])
  })

  test('should have root styles', () => {
    expect(base.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      isolation: 'isolate',
      position: 'relative',
      textStyle: 'body-sm',
      touchAction: 'none',
    })
  })

  test('should have control styles', () => {
    expect(base.control).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      position: 'relative',
    })
  })

  test('should have track styles', () => {
    expect(base.track).toMatchObject({
      bgColor: 'page.surface.300',
      borderRadius: 'full',
      flex: '1',
      overflow: 'hidden',
    })
  })

  test('should have range styles', () => {
    expect(base.range).toMatchObject({
      height: 'inherit',
      width: 'inherit',
    })
  })

  test('should have markerGroup styles', () => {
    expect(base.markerGroup).toMatchObject({
      position: 'absolute!',
      zIndex: '1',
    })
  })

  test('should have marker styles', () => {
    expect(base.marker).toMatchObject({
      '--marker-bg': {
        base: '{colors.page.text.100}',
        _underValue: '{colors.page.surface.initial}',
      },
      alignItems: 'center',
      color: 'page.text.100',
      display: 'flex',
      fontFamily: 'mono',
      gap: 'calc(var(--slider-thumb-size) / 2.5)',
      textStyle: 'label-sm',
    })
  })

  test('should have markerIndicator styles', () => {
    expect(base.markerIndicator).toMatchObject({
      bgColor: 'var(--marker-bg)',
      borderRadius: 'full',
      height: 'calc(var(--slider-track-size) - (var(--slider-marker-size) * 2))',
      width: 'calc(var(--slider-track-size) - (var(--slider-marker-size) * 2))',
    })
  })

  test('should have draggingIndicator styles', () => {
    expect(base.draggingIndicator).toMatchObject({
      bgColor: 'page.surface.inverse',
      color: 'page.text.inverse',
      pointerEvents: 'none',
      px: '3',
      py: 2,
      rounded: 'sm',
      maxH: '6rem',
      shadow: 'sm',
      textAlign: 'center',
      textStyle: 'label-sm',
      textWrap: 'pretty',
      whiteSpace: 'nowrap',
      w: '2.75rem',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'fast',
      },
    })
  })

  test('should have thumb styles', () => {
    expect(base.thumb).toMatchObject({
      alignItems: 'center',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'flex',
      height: 'var(--slider-thumb-size)',
      justifyContent: 'center',
      outline: 0,
      transitionProperty: 'box-shadow, background-color',
      transitionDuration: 'fast',
      width: 'var(--slider-thumb-size)',
      zIndex: '2',
      _focusVisible: {
        ring: '3px',
        ringColor: 'action.border.focus',
      },
    })
  })

  test('should have palette variants', () => {
    expect(variants.palette).toMatchObject(noPageSlotPalettes)
  })

  test('should have size variants', () => {
    expect(variants.size).toMatchObject({
      sm: {
        root: {
          '--slider-thumb-size': '1.5rem',
          '--slider-track-size': '0.5rem',
          '--slider-marker-center': '9px',
          '--slider-marker-size': '0.06rem',
          '--slider-marker-inset': '3px',
          '--slider-dragging-indicator-offset': '-2rem',
          _label: {
            textStyle: 'label-sm',
          },
        },
      },
      md: {
        root: {
          '--slider-thumb-size': '1.75rem',
          '--slider-track-size': '0.75rem',
          '--slider-marker-center': '10px',
          '--slider-marker-size': '0.12rem',
          '--slider-marker-inset': '4px',
          '--slider-dragging-indicator-offset': '-2.25rem',
          _label: {
            textStyle: 'label-sm',
          },
        },
      },
      lg: {
        root: {
          '--slider-thumb-size': '2rem',
          '--slider-track-size': '1rem',
          '--slider-marker-center': '11px',
          '--slider-marker-size': '0.19rem',
          '--slider-marker-inset': '5px',
          '--slider-dragging-indicator-offset': '-2.5rem',
          _label: {
            textStyle: 'label-md',
          },
        },
      },
    })
  })

  test('should have usage variants', () => {
    expect(variants.usage).toMatchObject({
      gradient: {
        range: {
          gradient: 'charon-dark',
          _disabled: {
            bgColor: 'page.bg.300',
            gradient: 'none',
          },
        },
        thumb: {
          bgColor: 'action.ghost.initial',
          borderWidth: '2px',
          borderColor: 'action.border.initial',
          _disabled: {
            bgColor: 'page.bg.initial',
            borderColor: 'page.border.initial',
            cursor: 'not-allowed',
            _hover: {
              bgColor: 'page.bg.initial',
            },
          },
          _hover: {
            bgColor: 'action.ghost.hover',
          },
          _dragging: {
            bgColor: 'action.ghost.active!',
          },
        },
      },
      filled: {
        range: {
          bgColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.300',
          },
        },
        thumb: {
          bgColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.300',
            cursor: 'not-allowed',
          },
        },
      },
      outlined: {
        track: {
          border: '1px solid',
          borderColor: 'colorPalette.bg.initial/50',
          shadow: 'inset',
          _disabled: {
            borderColor: 'page.bg.300',
          },
        },
        range: {
          bgColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.300',
          },
        },
        thumb: {
          bgColor: 'page.surface.initial',
          borderWidth: '2px',
          borderColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.initial',
            borderColor: 'page.border.initial',
            cursor: 'not-allowed',
            _hover: {
              bgColor: 'page.bg.initial',
            },
          },
          _hover: {
            bgColor: 'action.ghost.hover',
          },
          _dragging: {
            bgColor: 'action.ghost.active!',
          },
        },
      },
    })
  })

  test('should have direction variants', () => {
    expect(variants.direction).toMatchObject({
      vertical: {
        root: {
          maxW: 'max-content',
          w: 'initial',
        },
        control: {
          flexDirection: 'column',
          height: '100%',
          minWidth: 'var(--slider-thumb-size)',
        },
        track: {
          h: 'full',
          width: 'var(--slider-track-size)',
        },
        thumb: {
          left: '50%',
          translate: '-50% 0',
        },
        draggingIndicator: {
          right: '2.5rem',
          _after: {
            content: "''",
            border: '6px solid',
            borderColor: 'transparent',
            borderLeftColor: 'page.surface.inverse',
            display: 'inline-block',
            left: '100%',
            pos: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          },
        },
        markerGroup: {
          insetStart: 'var(--slider-marker-center)',
          insetBlock: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'row',
        },
      },
      horizontal: {
        root: {
          w: 'full',
        },
        control: {
          flexDirection: 'row',
          minHeight: 'var(--slider-thumb-size)',
          width: 'full',
        },
        track: {
          height: 'var(--slider-track-size)',
        },
        thumb: {
          top: '50%',
          translate: '0 -50%',
        },
        draggingIndicator: {
          top: 'var(--slider-dragging-indicator-offset)',
          _after: {
            content: "''",
            border: '6px solid',
            borderColor: 'transparent',
            borderTopColor: 'page.surface.inverse',
            display: 'inline-block',
            left: '50%',
            pos: 'absolute',
            top: '100%',
            transform: 'translateX(-50%)',
          },
        },
        markerGroup: {
          insetInline: 'var(--slider-marker-inset)',
          top: 'var(--slider-marker-center)',
        },
        marker: {
          flexDirection: 'column',
        },
      },
    })
  })

  test('should have default variants', () => {
    expect(slider.defaultVariants).toMatchObject({
      palette: 'action',
      size: 'lg',
      direction: 'horizontal',
      usage: 'gradient',
    })
  })
})
