/**
 * THROWAWAY PROBE (replaces P5 in probes.test.tsx).
 *
 * Run:  bun test probes.forwardprops.test.tsx
 *
 * Why: P5 used `size`. React DOM drops a non-numeric `size` attribute
 * (inferred), so "size attribute => null" could not tell us whether Panda
 * forwarded it. `tone` is not a Panda style property and React passes unknown
 * string attributes through, so there is no confound.
 *
 * Three cases:
 *   A. withProvider + forwardProps ['tone']
 *   B. withProvider, no forwardProps (baseline)
 *   C. cerberus(div, cva recipe, { forwardProps: ['tone'] })
 *
 * Paste every `[PROBE]` line back to me.
 * Adjust the `cerberus` import path as before.
 */
import { cerberus } from '@cerberus-design/react'
import { render, screen } from '@testing-library/react'
import { test } from 'bun:test'
import { cva, sva } from 'styled-system/css'
import { createSlotRecipeContext } from 'styled-system/jsx'

const classesOf = (value: string) => value.split(' ').filter(Boolean)
const report = (label: string, value: unknown) =>
  console.log(`[PROBE] ${label} => ${JSON.stringify(value)}`)

const hasAll = (testId: string, expected: string) =>
  classesOf(expected).every((c) => screen.getByTestId(testId).classList.contains(c))

const card = sva({
  slots: ['root', 'title'],
  base: { root: { p: '2' }, title: { fontWeight: 'bold' } },
  variants: {
    tone: {
      info: { title: { color: 'blue' } },
      danger: { title: { color: 'red' } },
    },
  },
})

const ctx = createSlotRecipeContext(card)
const Title = ctx.withContext('h2', 'title')
const Forwarding = ctx.withProvider('div', 'root', { forwardProps: ['tone'] })
const Plain = ctx.withProvider('div', 'root')

test('P5b-A report: withProvider WITH forwardProps ["tone"]', () => {
  render(
    <Forwarding tone="danger" data-testid="root">
      <Title data-testid="title">x</Title>
    </Forwarding>,
  )
  report('A: tone attribute on root', screen.getByTestId('root').getAttribute('tone'))
  report('A: title has danger classes', hasAll('title', card({ tone: 'danger' }).title))
})

test('P5b-B report: withProvider WITHOUT forwardProps (baseline)', () => {
  render(
    <Plain tone="danger" data-testid="root">
      <Title data-testid="title">x</Title>
    </Plain>,
  )
  report('B: tone attribute on root', screen.getByTestId('root').getAttribute('tone'))
  report('B: title has danger classes', hasAll('title', card({ tone: 'danger' }).title))
})

const badge = cva({
  base: { px: '2' },
  variants: { tone: { info: { color: 'blue' }, danger: { color: 'red' } } },
})
const ForwardingBadge = cerberus('div', badge, { forwardProps: ['tone'] })
const PlainBadge = cerberus('div', badge)

test('P5b-C report: cerberus() with and without forwardProps ["tone"]', () => {
  const first = render(<ForwardingBadge tone="danger" data-testid="el" />)
  report('C forwarding: tone attribute', screen.getByTestId('el').getAttribute('tone'))
  report(
    'C forwarding: has danger recipe classes',
    hasAll('el', badge({ tone: 'danger' })),
  )
  first.unmount()

  render(<PlainBadge tone="danger" data-testid="el" />)
  report('C plain: tone attribute', screen.getByTestId('el').getAttribute('tone'))
  report('C plain: has danger recipe classes', hasAll('el', badge({ tone: 'danger' })))
})
