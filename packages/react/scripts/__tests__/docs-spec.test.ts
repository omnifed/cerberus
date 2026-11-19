import { describe, expect, test } from 'bun:test'
import { config } from '../configs'
import {
  buildComponentDocSpec,
  createSpecBuilderContext,
} from '../docs/spec-builder'
import type { ComponentDocSpec } from '../docs/types'

/**
 * Integration tests against the real installed Ark UI / Zag.js / Panda sources.
 * The snapshot records every part's prop names, so any change to what the generator
 * resolves shows up as a reviewable snapshot diff (`bun test scripts -u` to accept).
 */

const ctx = createSpecBuilderContext()
const { diagnostics } = ctx
const specs = new Map<string, ComponentDocSpec>(
  config.map((c) => [c.key, buildComponentDocSpec(c, ctx)]),
)

function part(key: string, exportName: string) {
  const found = specs.get(key)?.parts.find((p) => p.exportName === exportName)
  if (!found) throw new Error(`${exportName} not generated`)
  return found
}

test('every expected type resolves (no generator errors)', () => {
  const errors = diagnostics.items.filter((d) => d.severity === 'error')
  expect(errors).toEqual([])
})

describe('baseline prop counts never regress', () => {
  test.each([
    ['accordion', 'Accordion.Root', 16],
    ['accordion', 'Accordion.Item', 5],
    ['carousel', 'Carousel.Root', 23],
  ])('%s › %s has at least %i props', (key, exportName, min) => {
    expect(part(key, exportName).props.length).toBeGreaterThanOrEqual(min)
  })

  test('Accordion.Root resolves Zag props with JSDoc and defaults', () => {
    const props = part('accordion', 'Accordion.Root').props
    const multiple = props.find((p) => p.name === 'multiple')
    expect(multiple?.defaultValue).toBe('false')
    expect(multiple?.description.length).toBeGreaterThan(0)
  })
})

test('every part resolves to the same prop names as last time', () => {
  const summary = Object.fromEntries(
    [...specs.values()].map((spec) => [
      spec.key,
      {
        variants: spec.variants.map((v) => v.name),
        parts: Object.fromEntries(
          spec.parts.map((p) => [p.exportName, p.props.map((x) => x.name)]),
        ),
      },
    ]),
  )
  expect(summary).toMatchSnapshot()
})

test('no props lose their description compared with last time', () => {
  const described = Object.fromEntries(
    [...specs.values()].flatMap((spec) =>
      spec.parts.map((p) => [
        p.exportName,
        p.props.filter((x) => x.description).map((x) => x.name),
      ]),
    ),
  )
  expect(described).toMatchSnapshot()
})
