/**
 * THROWAWAY PROBES (runtime).
 *
 * Run:  bun test probes.test.tsx
 *
 * - `expect(...)` lines assert what your decisions say should be true.
 * - `report(...)` lines print observations I could not predict.
 *   Paste every `[PROBE]` line back to me.
 *
 * Adjust the `cerberus` import path to match v2-factory_test.tsx.
 */
import { Accordion as Ark } from '@ark-ui/react/accordion'
import { cerberus } from '@cerberus-design/react'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'bun:test'
import { sva } from 'styled-system/css'
import { createSlotRecipeContext } from 'styled-system/jsx'

const classesOf = (value: string) => value.split(' ').filter(Boolean)
const report = (label: string, value: unknown) =>
  console.log(`[PROBE] ${label} => ${JSON.stringify(value)}`)

// -----------------------------------------------------------------------------
// P1. Decision 4: unknown keys return undefined.
// The existing test only probes `notAnElement`, which has capital letters and
// is rejected by the regex. These keys are all-lowercase and are not elements.
// -----------------------------------------------------------------------------

describe('P1 proxy: decision 4', () => {
  const probe = cerberus as unknown as Record<string, unknown>

  for (const key of ['foo', 'default', 'key', 'notanelement', 'x1']) {
    test(`cerberus.${key} is undefined`, () => {
      expect(probe[key]).toBeUndefined()
    })
  }

  for (const key of ['div', 'button', 'h1', 'svg']) {
    test(`cerberus.${key} is defined`, () => {
      expect(probe[key]).toBeDefined()
    })
  }
})

// -----------------------------------------------------------------------------
// Shared fixtures
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
const Root = withProvider(Ark.Root, 'root')
const Item = withContext(Ark.Item, 'item')
const Trigger = withContext(Ark.ItemTrigger, 'itemTrigger')
const Content = withContext(Ark.ItemContent, 'itemContent')

function view(opts: { root?: object; item?: object; trigger?: object } = {}) {
  return render(
    <Root defaultValue={['a']} data-testid="root" {...opts.root}>
      <Item value="a" data-testid="item" {...opts.item}>
        <Trigger data-testid="trigger" {...opts.trigger}>
          T
        </Trigger>
        <Content data-testid="content">B</Content>
      </Item>
    </Root>,
  )
}

const hasAll = (testId: string, expected: string) =>
  classesOf(expected).every((c) => screen.getByTestId(testId).classList.contains(c))

// -----------------------------------------------------------------------------
// P2. Which data-* attributes does one part carry?
// Your docs list data-scope / data-part. Panda adds its own attribute.
// -----------------------------------------------------------------------------

test('P2 report: data-* attributes on ItemTrigger', () => {
  view()
  const el = screen.getByTestId('trigger')
  const data = Object.fromEntries(
    [...el.attributes]
      .filter((a) => a.name.startsWith('data-') && a.name !== 'data-testid')
      .map((a) => [a.name, a.value]),
  )
  report('data attributes on ItemTrigger', data)
})

// -----------------------------------------------------------------------------
// P3. Decision 5 says parts take no variant props. `size` is also a Panda
// style prop (width + height). What happens if a user passes size="sm" to a part?
// -----------------------------------------------------------------------------

test('P3 report: ItemTrigger given size="sm"', () => {
  const plainView = view()
  const plain = classesOf(screen.getByTestId('trigger').className)
  plainView.unmount()

  view({ trigger: { size: 'sm' } })
  const trigger = screen.getByTestId('trigger')
  const withSize = classesOf(trigger.className)

  report(
    'classes added by size="sm" on a part',
    withSize.filter((c) => !plain.includes(c)),
  )
  report('size attribute reaches the DOM', trigger.hasAttribute('size'))
})

// -----------------------------------------------------------------------------
// P4. Does `unstyled` on Root disable only Root, or also variant propagation?
// -----------------------------------------------------------------------------

test('P4 report: Root unstyled + size="sm"', () => {
  view({ root: { unstyled: true, size: 'sm' } })
  const expected = accordion({ size: 'sm' })
  report('root keeps its own slot classes', hasAll('root', expected.root))
  report('item still gets sm variant classes', hasAll('item', expected.item))
  report(
    'trigger still gets sm variant classes',
    hasAll('trigger', expected.itemTrigger),
  )
})

// -----------------------------------------------------------------------------
// P5. forwardProps on withProvider: does the prop reach the DOM AND the recipe?
// Panda's docs are ambiguous (your unverified assumption 6).
// -----------------------------------------------------------------------------

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

test('P5 report: withProvider with forwardProps ["size"]', () => {
  const ctx = createSlotRecipeContext(card)
  const CardRoot = ctx.withProvider('div', 'root', { forwardProps: ['size'] })
  const CardTitle = ctx.withContext('h2', 'title')

  render(
    <CardRoot size="sm" data-testid="r">
      <CardTitle data-testid="t">x</CardTitle>
    </CardRoot>,
  )

  report('size attribute on root', screen.getByTestId('r').getAttribute('size'))
  report(
    'title still gets sm classes (forwarded prop also fed the recipe)',
    hasAll('t', card({ size: 'sm' }).title),
  )
})
