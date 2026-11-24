import { describe, expect, test } from 'bun:test'
import {
  DIGEST_API_MARKER,
  renderDigest,
  renderLlmsIndex,
  summarize,
} from 'codegen/docs/digest'
import type { ComponentDocSpec } from 'codegen/docs/types'

const spec: ComponentDocSpec = {
  name: 'Thing',
  key: 'thing',
  description: 'A thing. It does stuff.\n\nSecond paragraph.',
  variants: [{ name: 'size', values: ['sm', 'lg'], defaultValue: "'sm'" }],
  parts: [
    {
      name: 'Root',
      exportName: 'Thing.Root',
      kind: 'primitive',
      description: 'The root.',
      dataScope: 'thing',
      dataPart: 'root',
      keyboard: ['Home'],
      dataAttributes: [
        { name: 'data-state', values: ['open', 'closed'] },
        { name: 'data-focus', presence: true },
      ],
      props: [
        {
          name: 'mode',
          type: "'a' | 'b'",
          required: false,
          defaultValue: "'a'",
          description: 'Line one\nline | two',
          deprecated: 'Use `kind`.',
        },
        {
          name: 'render',
          type: '`${string}-x`',
          required: true,
          description: '',
        },
      ],
    },
    {
      name: 'El',
      exportName: 'Thing.El',
      kind: 'abstraction',
      description: 'Default experience.',
      inherits: ['Thing.Root'],
      props: [],
    },
  ],
  a11y: {
    pattern: 'Thing',
    apgUrl: 'https://example.com/apg',
    keyboard: [{ key: 'Home', description: 'Goes home.' }],
  },
}

describe('renderDigest', () => {
  const md = renderDigest(spec)

  test('splits intro from the API section at the marker', () => {
    const [intro, api] = md.split(DIGEST_API_MARKER)
    expect(intro).toContain('# Thing API reference')
    expect(intro).toContain('Second paragraph.')
    expect(api).toContain('## Parts')
    expect(api).not.toContain('Second paragraph.')
  })

  test('escapes pipes and backticks so tables stay intact', () => {
    expect(md).toContain(
      "| `mode` | `'a' \\| 'b'` | No | `'a'` | **Deprecated.** Use `kind`. Line one line \\| two |",
    )
    expect(md).toContain('| `render` | `` `${string}-x` `` | Yes | — |  |')
  })

  test('documents selectors, keys, data attributes, inherits and a11y', () => {
    expect(md).toContain('Selector: `[data-scope="thing"][data-part="root"]`')
    expect(md).toContain('Keyboard: `Home`')
    expect(md).toContain('| `data-state` | `"open"` \\| `"closed"` |')
    expect(md).toContain('| `data-focus` | Present when the state applies |')
    expect(md).toContain('Also accepts all props of `Thing.Root`.')
    expect(md).toContain('[Thing WAI-ARIA pattern](https://example.com/apg)')
  })

  test('is deterministic', () => {
    expect(renderDigest(spec)).toBe(md)
  })
})

test('summarize takes the first sentence of the first paragraph', () => {
  expect(summarize(spec.description)).toBe('A thing.')
  expect(summarize('No period here')).toBe('No period here')
})

test('llms index lists digests by key', () => {
  const other = { ...spec, name: 'Alpha', key: 'alpha' }
  expect(renderLlmsIndex([spec, other])).toContain(
    '- [Alpha](alpha.md): A thing.\n- [Thing](thing.md): A thing.',
  )
})

describe('Context API digest', () => {
  test('lists what exposes it and one row per member', () => {
    const md = renderDigest({
      ...spec,
      contextApi: {
        exposedBy: ['Thing.Context', 'useThing()', 'useThingContext()'],
        members: [
          { name: 'open', type: 'boolean', description: 'Whether it is open.' },
          {
            name: 'setValue',
            type: '(value: string | null) => void',
            description: 'Sets\nthe value.',
          },
        ],
      },
    })
    expect(md).toContain(
      "## Context API\n\n`Thing.Context`, `useThing()` and `useThingContext()` expose the component's state and methods:",
    )
    expect(md).toContain('| `open` | `boolean` | Whether it is open. |')
    expect(md).toContain(
      '| `setValue` | `(value: string \\| null) => void` | Sets the value. |',
    )
    // It comes before Accessibility, after the parts
    expect(md.indexOf('## Context API')).toBeGreaterThan(md.indexOf('## Parts'))
  })
})
