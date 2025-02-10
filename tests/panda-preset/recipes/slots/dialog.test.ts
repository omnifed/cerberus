import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('dialog recipe', () => {
  const { dialog } = slotRecipes
  const modalMinH = '18rem'

  test('should create JSX aliases', () => {
    expect(dialog.jsx).toEqual([
      'DialogRoot',
      'DialogTrigger',
      'DialogBackdrop',
      'DialogPositioner',
      'DialogContent',
      'DialogHeading',
      'DialogDescription',
      'DialogCloseTrigger',
      'DialogProvider',
      'Dialog',
      'DialogCloseIconTrigger',
      'ConfirmModal',
      'PromptModal',
      'CTAModal',
    ])
  })

  test('should have base styles', () => {
    expect(dialog).toHaveProperty('base', {
      backdrop: {
        animationFillMode: 'forwards',
        bgColor: 'page.backdrop.initial',
        backdropFilter: 'blur(2px)',
        backdropBlur: 'sm',
        h: '100vh',
        left: '0',
        opacity: '0',
        position: 'fixed',
        top: '0',
        w: '100vw',
        zIndex: 'overlay',
        _open: {
          animationStyle: 'emphasized-fade-in',
        },
        _closed: {
          animationStyle: 'emphasized-fade-out',
        },
      },
      positioner: {
        alignItems: 'center',
        display: 'flex',
        h: '100dvh',
        justifyContent: 'center',
        left: '0',
        position: 'fixed',
        top: '0',
        w: '100vw',
        zIndex: 'modal',
      },
      content: {
        animationFillMode: 'forwards',
        bgColor: 'page.surface.100',
        minH: 'var(--dialog-content-min-h)',
        padding: 'xl',
        opacity: 0,
        position: 'relative',
        rounded: 'md',
        shadow: 'lg',
        w: 'var(--dialog-content-w)',
        _focusVisible: {
          outline: 'none',
        },
        _open: {
          animationStyle: 'emphasized-slide-in',
        },
        _closed: {
          animationStyle: 'emphasized-slide-out',
        },
      },
      title: {
        color: 'page.text.initial',
        textStyle: 'heading-lg',
      },
      description: {
        color: 'page.text.initial',
        textStyle: 'body-md',
      },
      closeTrigger: {
        position: 'absolute',
        right: 'md',
        top: 'md',
        zIndex: 'decorator',
      },
    })
  })

  test('should have variants', () => {
    expect(dialog).toHaveProperty('variants', {
      size: {
        xs: {
          content: {
            '--dialog-content-min-h': modalMinH,
            '--dialog-content-w': '26rem',
          },
        },
        sm: {
          content: {
            '--dialog-content-min-h': modalMinH,
            '--dialog-content-w': '35rem',
          },
        },
        md: {
          content: {
            '--dialog-content-min-h': modalMinH,
            '--dialog-content-w': '40rem',
          },
        },
        lg: {
          content: {
            '--dialog-content-min-h': modalMinH,
            '--dialog-content-w': '54rem',
          },
        },
        full: {
          content: {
            '--dialog-content-min-h': '40rem',
            '--dialog-content-w': '90dvw',
          },
        },
      },
    })
  })

  test('should have default variants', () => {
    expect(dialog).toHaveProperty('defaultVariants', {
      size: 'md',
    })
  })
})
