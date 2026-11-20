import { afterEach, describe, test, expect, jest } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  CerberusProvider,
  Tag,
  FilledTag,
  GradientTag,
  ClosableTag,
  ClosableTagRoot,
  type TagProps,
  type FilledTagProps,
  type GradientTagProps,
  type ClosableTagProps,
  type TagRootProps,
  type TagGradientProps,
  type TagClosableRootProps,
} from '@cerberus-design/react'
import * as CerberusReact from '@cerberus-design/react'
import { Tag as TagSubpath } from '@cerberus-design/react/tag'
import { makeConfig, user } from '@/utils'

describe('Tag', () => {
  afterEach(cleanup)

  const config = makeConfig()

  function renderTag(props: TagProps) {
    render(
      <CerberusProvider config={config}>
        <Tag data-testid="tag" {...props}>
          it works
        </Tag>
      </CerberusProvider>,
    )
    return screen.getByTestId('tag')
  }

  function expectTagAttributes(el: HTMLElement) {
    expect(el.tagName).toBe('SPAN')
    expect(el).toHaveAttribute('data-scope', 'tag')
    expect(el).toHaveAttribute('data-part', 'root')
  }

  describe('filled (default)', () => {
    test('renders a span with the tag recipe defaults and a page palette', () => {
      const tag = renderTag({})
      expectTagAttributes(tag)
      expect(tag).toHaveAttribute('data-palette', 'page')
      expect(tag.className).toBe(
        'cerberus-tag cerberus-tag--palette_page cerberus-tag--shape_pill cerberus-tag--usage_filled',
      )
      expect(tag).toHaveTextContent('it works')
    })

    test('does not render an action palette', () => {
      expect(renderTag({})).not.toHaveClass('cerberus-tag--palette_action')
    })

    test('renders a palette as a class and data-palette', () => {
      const tag = renderTag({ palette: 'danger' })
      expect(tag).toHaveClass('cerberus-tag--palette_danger')
      expect(tag).toHaveAttribute('data-palette', 'danger')
    })

    test('lets an explicit data-palette win over the palette', () => {
      const tag = renderTag({
        palette: 'success',
        'data-palette': 'info',
      } as TagProps)
      expect(tag).toHaveAttribute('data-palette', 'info')
      expect(tag).toHaveClass('cerberus-tag--palette_success')
    })

    test.each<[string, FilledTagProps]>([
      ['usage_outlined', { usage: 'outlined' }],
      ['usage_filled', { usage: 'filled' }],
      ['shape_pill', { shape: 'pill' }],
      ['shape_square', { shape: 'square' }],
    ])('renders the %s variant', (variant, props) => {
      expect(renderTag(props)).toHaveClass(`cerberus-tag--${variant}`)
    })

    test('renders filled when onClick is undefined', () => {
      const tag = renderTag({ onClick: undefined })
      expect(tag).toHaveClass('cerberus-tag')
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    test('allows factory style props', () => {
      render(
        <Tag data-testid="tag" bgColor="black" css={{ mb: 0 }}>
          it works
        </Tag>,
      )
      expect(screen.getByTestId('tag')).toHaveClass('cerberus-bg-c_black')
      expect(screen.getByTestId('tag')).toHaveClass('cerberus-mb_0')
    })

    test('allows factory asChild props', () => {
      render(
        <Tag asChild>
          <button>test</button>
        </Tag>,
      )
      expect(screen.getByRole('button', { name: 'test' })).toHaveClass(
        'cerberus-tag',
      )
    })
  })

  describe('gradient', () => {
    test('renders a span with the gradientTag recipe and no data-palette', () => {
      const tag = renderTag({ gradient: 'nyx-light' })
      expectTagAttributes(tag)
      expect(tag).not.toHaveAttribute('data-palette')
      expect(tag.className).toBe(
        'cerberus-grad-tag cerberus-grad-tag--gradient_nyx-light cerberus-grad-tag--shape_pill',
      )
    })

    test('renders the outlined compound variant', () => {
      const tag = renderTag({ gradient: 'nyx-dark', usage: 'outlined' })
      expect(tag).toHaveClass(
        'cerberus-grad-tag--usage_outlined',
        'cerberus-grad-tag--compound__gradient_nyx-dark__usage_outlined',
      )
    })
  })

  describe('closable', () => {
    test('renders a span with the closableTag recipe when onClick is set', () => {
      const tag = renderTag({ onClick: jest.fn() })
      expectTagAttributes(tag)
      expect(tag).not.toHaveAttribute('data-palette')
      expect(tag.className).toBe(
        'cerberus-closable-tag cerberus-closable-tag--palette_secondaryAction cerberus-closable-tag--usage_filled',
      )
    })

    test('renders a labelled close button that calls onClick', async () => {
      const onClick = jest.fn()
      renderTag({ onClick })
      const close = screen.getByRole('button', { name: 'Close tag' })
      expect(close.tagName).toBe('BUTTON')
      expect(close).toHaveAttribute('data-scope', 'icon-button')
      expect(close).toHaveAttribute('data-part', 'root')
      expect(close).toHaveClass(
        'cerberus-icon-btn',
        'cerberus-icon-btn--palette_action',
        'cerberus-icon-btn--size_xs',
        'cerberus-icon-btn--usage_filled',
      )
      expect(close).toBeEnabled()
      await user.click(close)
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('passes the palette to the root and the close button', () => {
      const tag = renderTag({ onClick: jest.fn(), palette: 'danger' })
      expect(tag).toHaveAttribute('data-palette', 'danger')
      expect(tag).toHaveClass('cerberus-closable-tag--palette_danger')
      expect(screen.getByRole('button', { name: 'Close tag' })).toHaveClass(
        'cerberus-icon-btn--palette_danger',
      )
    })

    test('pending disables the close button and marks the content busy', async () => {
      const onClick = jest.fn()
      renderTag({ onClick, pending: true })
      const close = screen.getByRole('button', { name: 'Close tag' })
      expect(close).toBeDisabled()
      await user.click(close)
      expect(onClick).not.toHaveBeenCalled()
      expect(screen.getByText('it works')).toHaveAttribute('aria-busy', 'true')
    })

    test('Tag.Closable renders the same as Tag with onClick', () => {
      render(
        <CerberusProvider config={config}>
          <Tag.Closable data-testid="closable" onClick={jest.fn()}>
            it works
          </Tag.Closable>
        </CerberusProvider>,
      )
      const tag = screen.getByTestId('closable')
      expectTagAttributes(tag)
      expect(tag).toHaveClass('cerberus-closable-tag')
      expect(
        screen.getByRole('button', { name: 'Close tag' }),
      ).toBeInTheDocument()
    })
  })

  describe('parts', () => {
    test('Tag.Root renders the tag recipe', () => {
      render(<Tag.Root data-testid="root" palette="info" />)
      const root = screen.getByTestId('root')
      expectTagAttributes(root)
      // The part itself sets no data-palette; <Tag> does
      expect(root).not.toHaveAttribute('data-palette')
      expect(root.className).toBe(
        'cerberus-tag cerberus-tag--palette_info cerberus-tag--shape_pill cerberus-tag--usage_filled',
      )
    })

    test('Tag.Gradient renders the gradientTag recipe', () => {
      render(<Tag.Gradient data-testid="gradient" gradient="styx-light" />)
      const gradient = screen.getByTestId('gradient')
      expectTagAttributes(gradient)
      expect(gradient.className).toBe(
        'cerberus-grad-tag cerberus-grad-tag--gradient_styx-light cerberus-grad-tag--shape_pill',
      )
    })

    test('Tag.ClosableRoot renders the closableTag recipe without a button', () => {
      render(<Tag.ClosableRoot data-testid="closable" palette="danger" />)
      const closable = screen.getByTestId('closable')
      expectTagAttributes(closable)
      expect(closable.className).toBe(
        'cerberus-closable-tag cerberus-closable-tag--palette_danger cerberus-closable-tag--usage_filled',
      )
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    test('the compound exposes every part and abstraction', () => {
      expect(Tag.El).toBe(Tag)
      expect(Object.keys(Tag).sort()).toEqual(
        ['Closable', 'ClosableRoot', 'El', 'Gradient', 'Root'].sort(),
      )
    })
  })

  describe('exports', () => {
    test('v1 names alias the parts and abstractions', () => {
      expect(FilledTag).toBe(Tag.Root)
      expect(GradientTag).toBe(Tag.Gradient)
      expect(ClosableTagRoot).toBe(Tag.ClosableRoot)
      expect(ClosableTag).toBe(Tag.Closable)
    })

    test('the subpath exports the same compound', () => {
      expect(TagSubpath).toBe(Tag)
    })

    test('the accidental defaultProps export is gone', () => {
      expect('defaultProps' in CerberusReact).toBe(false)
    })

    test('props types stay assignable', () => {
      const filled: FilledTagProps = { palette: 'danger', usage: 'outlined' }
      const gradient: GradientTagProps = { gradient: 'nyx-light' }
      const closable: ClosableTagProps = { onClick: () => {}, pending: true }
      const parts: [TagRootProps, TagGradientProps, TagClosableRootProps] = [
        { palette: 'info' },
        { gradient: 'styx-dark' },
        { palette: 'danger' },
      ]
      const all: TagProps[] = [filled, gradient, closable]
      expect(all).toHaveLength(3)
      expect(parts).toHaveLength(3)
    })
  })
})
