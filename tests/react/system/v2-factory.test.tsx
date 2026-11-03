import { Accordion as Ark } from '@ark-ui/react/accordion'
import { cerberus } from '@cerberus-design/react'
import { render, screen } from '@testing-library/react'
import { describe, expect, spyOn, test } from 'bun:test'
import { createRef, type ComponentProps, type ReactNode } from 'react'
import { cva, sva } from 'styled-system/css'
import { createSlotRecipeContext } from 'styled-system/jsx'

/**
 * Contract tests for the Cerberus v2 factory design.
 *
 * Part 1: `cerberus` (callable + property access) wraps anything with Panda
 *         features and Ark's `asChild`.
 * Part 2: Panda's `createSlotRecipeContext` is used directly for compounds.
 *
 * Assertions compare against the recipe's own output (e.g. `accordion({ size })`)
 * instead of hardcoded atomic class names, so the tests survive Panda changes
 * to class naming.
 *
 * Prereqs: `panda codegen` has run (jsxFramework: 'react') so `styled-system/*`
 * exists. Adjust the `cerberus` import path to your layout.
 */

const classesOf = (value: string) => value.split(' ').filter(Boolean)

// -----------------------------------------------------------------------------
// Part 1: cerberus factory
// -----------------------------------------------------------------------------

describe('cerberus.<el> (property access)', () => {
  test('renders the element with children', () => {
    render(<cerberus.button>Save</cerberus.button>)
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  test('is referentially stable across accesses', () => {
    expect(cerberus.button).toBe(cerberus.button)
  })

  test('applies the css prop as a class and does not leak it to the DOM', () => {
    render(<cerberus.div data-testid="el" css={{ color: 'red' }} />)
    const el = screen.getByTestId('el')
    expect(el.className).toMatch(/\S/)
    expect(el).not.toHaveAttribute('css')
  })

  test('applies style props as classes and does not leak them to the DOM', () => {
    render(<cerberus.div data-testid="el" p="4" />)
    const el = screen.getByTestId('el')
    expect(el.className).toMatch(/\S/)
    expect(el).not.toHaveAttribute('p')
  })

  test('forwards ref as a normal prop (React 19, no forwardRef)', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<cerberus.button ref={ref}>Ref</cerberus.button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  test('asChild renders the child element and merges Cerberus classes onto it', () => {
    render(
      <cerberus.button asChild css={{ color: 'red' }}>
        <a href="/x">Go</a>
      </cerberus.button>,
    )
    const link = screen.getByRole('link', { name: 'Go' })
    expect(link).toHaveAttribute('href', '/x')
    expect(link.className).toMatch(/\S/)
    // no wrapper <button> left behind
    expect(screen.queryByRole('button')).toBeNull()
  })

  test('asChild merges a child className instead of replacing it', () => {
    render(
      <cerberus.div asChild css={{ color: 'red' }}>
        <section className="mine" data-testid="el" />
      </cerberus.div>,
    )
    const el = screen.getByTestId('el')
    expect(el.tagName).toBe('SECTION')
    expect(el).toHaveClass('mine')
    expect(classesOf(el.className).length).toBeGreaterThan(1)
  })
})

describe('cerberus(Component, recipe?, options?) (call form)', () => {
  function Card({ title, ...rest }: { title?: string } & ComponentProps<'div'>) {
    return <div data-testid="card" data-title={title} {...rest} />
  }

  test('wraps a custom component with no recipe', () => {
    const Wrapped = cerberus(Card)
    render(<Wrapped title="Hello" css={{ p: '4' }} />)
    const el = screen.getByTestId('card')
    expect(el).toHaveAttribute('data-title', 'Hello')
    expect(el.className).toMatch(/\S/)
  })

  test('wraps an element name', () => {
    const Wrapped = cerberus('span')
    render(<Wrapped data-testid="el">hi</Wrapped>)
    expect(screen.getByTestId('el').tagName).toBe('SPAN')
  })

  test('supports asChild on a wrapped custom component', () => {
    const Wrapped = cerberus(Card)
    render(
      <Wrapped asChild css={{ p: '4' }}>
        <article data-testid="child" />
      </Wrapped>,
    )
    const el = screen.getByTestId('child')
    expect(el.tagName).toBe('ARTICLE')
    expect(el.className).toMatch(/\S/)
  })

  describe('options.defaultProps', () => {
    const Wrapped = cerberus(Card, undefined, {
      defaultProps: { 'data-kind': 'card' },
    })

    test('applies static attributes', () => {
      render(<Wrapped />)
      expect(screen.getByTestId('card')).toHaveAttribute('data-kind', 'card')
    })

    test('lets the caller override them', () => {
      render(<Wrapped data-kind="other" />)
      expect(screen.getByTestId('card')).toHaveAttribute('data-kind', 'other')
    })
  })

  describe('options.forwardProps', () => {
    test('without forwardProps, a name that collides with a style prop is consumed', () => {
      const Input = cerberus('input')
      render(<Input data-testid="i" size={4} />)
      expect(screen.getByTestId('i')).not.toHaveAttribute('size')
    })

    test('with forwardProps, the prop reaches the element', () => {
      const Input = cerberus('input', undefined, { forwardProps: ['size'] })
      render(<Input data-testid="i" size={4} />)
      expect(screen.getByTestId('i')).toHaveAttribute('size', '4')
    })
  })

  describe('with a single (non-slot) recipe', () => {
    const badge = cva({
      base: { px: '2' },
      variants: {
        tone: { info: { color: 'blue' }, danger: { color: 'red' } },
      },
    })
    const Badge = cerberus('span', badge)

    test('applies base and variant classes from the recipe', () => {
      render(<Badge data-testid="el" tone="info" />)
      expect(screen.getByTestId('el')).toHaveClass(
        ...classesOf(badge({ tone: 'info' })),
      )
    })

    test('different variants produce different classes', () => {
      const { unmount } = render(<Badge data-testid="el" tone="info" />)
      const info = screen.getByTestId('el').className
      unmount()
      render(<Badge data-testid="el" tone="danger" />)
      expect(screen.getByTestId('el').className).not.toBe(info)
    })

    test('variant props are consumed and not leaked to the DOM', () => {
      render(<Badge data-testid="el" tone="info" />)
      expect(screen.getByTestId('el')).not.toHaveAttribute('tone')
    })

    test('keeps a caller className alongside recipe classes', () => {
      render(<Badge data-testid="el" tone="info" className="mine" />)
      const el = screen.getByTestId('el')
      expect(el).toHaveClass('mine')
      expect(el).toHaveClass(...classesOf(badge({ tone: 'info' })))
    })
  })
})

describe('cerberus proxy safety', () => {
  test('is callable and has properties', () => {
    expect(typeof cerberus).toBe('function')
    expect(typeof cerberus.button).not.toBe('undefined')
  })

  test('returns undefined (does not throw) for unknown keys', () => {
    const probe = cerberus as unknown as Record<string | symbol, unknown>
    expect(() => probe.notAnElement).not.toThrow()
    expect(probe.notAnElement).toBeUndefined()
  })

  test('is safe against bundler/devtool probing (then, symbols)', () => {
    const probe = cerberus as unknown as Record<string | symbol, unknown>
    expect(probe.then).toBeUndefined() // would break `await import()` / Promise.resolve
    expect(probe[Symbol.toPrimitive]).toBeUndefined()
    expect(probe[Symbol.iterator]).toBeUndefined()
  })
})

// -----------------------------------------------------------------------------
// Part 2: compound components via createSlotRecipeContext
// -----------------------------------------------------------------------------

const accordion = sva({
  slots: ['root', 'item', 'itemTrigger', 'itemContent'],
  base: {
    root: { display: 'flex' },
    item: { borderWidth: '1px' },
    itemTrigger: { cursor: 'pointer' },
    itemContent: { overflow: 'hidden' },
  },
  variants: {
    size: {
      sm: { item: { p: '1' }, itemTrigger: { fontSize: 'sm' } },
      lg: { item: { p: '4' }, itemTrigger: { fontSize: 'lg' } },
    },
  },
  defaultVariants: { size: 'lg' },
})

const { withProvider, withContext } = createSlotRecipeContext(accordion)

const Accordion = {
  Root: withProvider(Ark.Root, 'root'),
  Item: withContext(Ark.Item, 'item'),
  ItemTrigger: withContext(Ark.ItemTrigger, 'itemTrigger'),
  ItemContent: withContext(Ark.ItemContent, 'itemContent'),
}

function renderAccordion(rootProps: ComponentProps<typeof Accordion.Root> = {}) {
  return render(
    <Accordion.Root defaultValue={['a']} data-testid="root" {...rootProps}>
      <Accordion.Item value="a" data-testid="item">
        <Accordion.ItemTrigger data-testid="trigger">Title</Accordion.ItemTrigger>
        <Accordion.ItemContent data-testid="content">Body</Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>,
  )
}

describe('compound: withProvider / withContext on Ark', () => {
  test('renders a working Ark accordion', () => {
    renderAccordion()
    expect(screen.getByRole('button', { name: 'Title' })).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  test('sets data-slot to the slot name on every part', () => {
    renderAccordion()
    expect(screen.getByTestId('root')).toHaveAttribute('data-slot', 'root')
    expect(screen.getByTestId('item')).toHaveAttribute('data-slot', 'item')
    expect(screen.getByTestId('trigger')).toHaveAttribute('data-slot', 'itemTrigger')
    expect(screen.getByTestId('content')).toHaveAttribute('data-slot', 'itemContent')
  })

  test('every part receives its own slot classes', () => {
    renderAccordion()
    const expected = accordion()
    expect(screen.getByTestId('root')).toHaveClass(...classesOf(expected.root))
    expect(screen.getByTestId('item')).toHaveClass(...classesOf(expected.item))
    expect(screen.getByTestId('trigger')).toHaveClass(
      ...classesOf(expected.itemTrigger),
    )
    expect(screen.getByTestId('content')).toHaveClass(
      ...classesOf(expected.itemContent),
    )
  })

  test('a variant set once on Root reaches every part via context', () => {
    renderAccordion({ size: 'sm' })
    const expected = accordion({ size: 'sm' })
    expect(screen.getByTestId('item')).toHaveClass(...classesOf(expected.item))
    expect(screen.getByTestId('trigger')).toHaveClass(
      ...classesOf(expected.itemTrigger),
    )
  })

  test('changing the Root variant changes part classes', () => {
    const sm = renderAccordion({ size: 'sm' })
    const smTrigger = screen.getByTestId('trigger').className
    sm.unmount()
    renderAccordion({ size: 'lg' })
    expect(screen.getByTestId('trigger').className).not.toBe(smTrigger)
  })

  test('recipe defaultVariants apply when no variant is passed', () => {
    renderAccordion()
    expect(screen.getByTestId('item')).toHaveClass(...classesOf(accordion().item))
    expect(screen.getByTestId('item')).toHaveClass(
      ...classesOf(accordion({ size: 'lg' }).item),
    )
  })

  test('variant props are consumed by the provider and not leaked to the DOM', () => {
    renderAccordion({ size: 'sm' })
    expect(screen.getByTestId('root')).not.toHaveAttribute('size')
    expect(screen.getByTestId('root')).not.toHaveAttribute('data-size')
  })

  test('asChild works on a withContext-wrapped Ark part', () => {
    render(
      <Accordion.Root defaultValue={['a']}>
        <Accordion.Item value="a" asChild data-testid="item">
          <section />
        </Accordion.Item>
      </Accordion.Root>,
    )
    const item = screen.getByTestId('item')
    expect(item.tagName).toBe('SECTION')
    expect(item).toHaveClass(...classesOf(accordion().item))
  })

  test('asChild works on the withProvider-wrapped Root', () => {
    render(
      <Accordion.Root asChild data-testid="root">
        <section />
      </Accordion.Root>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveClass(...classesOf(accordion().root))
  })

  test('unstyled skips ONLY that element’s slot styles', () => {
    render(
      <Accordion.Root defaultValue={['a']} data-testid="root">
        <Accordion.Item value="a" data-testid="item">
          <Accordion.ItemTrigger unstyled data-testid="trigger">
            Plain
          </Accordion.ItemTrigger>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const expected = accordion()
    expect(screen.getByTestId('trigger')).not.toHaveClass(
      ...classesOf(expected.itemTrigger),
    )
    // siblings and ancestors keep their styles
    expect(screen.getByTestId('item')).toHaveClass(...classesOf(expected.item))
    expect(screen.getByTestId('root')).toHaveClass(...classesOf(expected.root))
  })

  test('css prop and className still apply on top of slot styles', () => {
    render(
      <Accordion.Root defaultValue={['a']}>
        <Accordion.Item value="a">
          <Accordion.ItemTrigger
            data-testid="trigger"
            className="mine"
            css={{ color: 'red' }}
          >
            T
          </Accordion.ItemTrigger>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const trigger = screen.getByTestId('trigger')
    expect(trigger).toHaveClass('mine')
    expect(trigger).toHaveClass(...classesOf(accordion().itemTrigger))
    expect(classesOf(trigger.className).length).toBeGreaterThan(
      classesOf(accordion().itemTrigger).length + 1,
    )
  })
})

// Plain-element compound: isolates Panda behavior from Ark's own context errors.
const card = sva({
  slots: ['root', 'title'],
  base: { root: { p: '2' }, title: { fontWeight: 'bold' } },
  variants: {
    size: {
      sm: { title: { fontSize: 'sm' } },
      lg: { title: { fontSize: 'lg' } },
    },
  },
})

describe('compound: context contract (plain elements)', () => {
  const { withProvider, withContext, withRootProvider } = createSlotRecipeContext(card)

  test('a part throws when rendered outside its provider', () => {
    const CardTitle = withContext('h2', 'title')
    const spy = spyOn(console, 'error').mockImplementation(() => {})
    try {
      expect(() => render(<CardTitle>Orphan</CardTitle>)).toThrow()
    } finally {
      spy.mockRestore()
    }
  })

  test('withContext options.defaultProps apply static attributes', () => {
    const CardRoot = withProvider('div', 'root')
    const CardTitle = withContext('h2', 'title', {
      defaultProps: { 'data-foo': 'bar' },
    })
    render(
      <CardRoot>
        <CardTitle data-testid="t">x</CardTitle>
      </CardRoot>,
    )
    expect(screen.getByTestId('t')).toHaveAttribute('data-foo', 'bar')
  })

  test('withContext options.forwardProps keeps a style-colliding prop as an attribute', () => {
    const CardRoot = withProvider('div', 'root')
    const CardInput = withContext('input', 'title', { forwardProps: ['size'] })
    render(
      <CardRoot>
        <CardInput data-testid="i" size={4} />
      </CardRoot>,
    )
    expect(screen.getByTestId('i')).toHaveAttribute('size', '4')
  })

  test('withRootProvider (context-only root) still feeds variants to parts', () => {
    function Rootless({ children }: { children?: ReactNode }) {
      return <>{children}</>
    }
    const CardRootless = withRootProvider(Rootless)
    const CardTitle = withContext('h2', 'title')

    render(
      <CardRootless size="sm">
        <CardTitle data-testid="t">x</CardTitle>
      </CardRootless>,
    )
    expect(screen.getByTestId('t')).toHaveClass(
      ...classesOf(card({ size: 'sm' }).title),
    )
  })
})
