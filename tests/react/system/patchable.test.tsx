import { describe, expect, test } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { makeConfig } from '@/utils'
import {
  Accordion,
  CerberusProvider,
  Marquee,
  PinInput,
  type MarqueeEdgeProps,
  type PinInputInputProps,
} from '@cerberus-design/react'

/**
 * `patchable` parts accept a patch child without the props their abstraction
 * supplies (checked by `tsc` over this file), while their `*Props` types stay
 * strict for direct use.
 */
describe('patchable parts', () => {
  test('patch children omit the props the abstraction supplies', () => {
    render(
      <CerberusProvider config={makeConfig()}>
        <Marquee edges={['both']}>
          <Marquee.Edge data-testid="edge" />
          <Marquee.Content data-testid="content" />
          <Marquee.Item>Item</Marquee.Item>
        </Marquee>
        <PinInput>
          <PinInput.Input data-testid="pin" />
        </PinInput>
        <Accordion>
          <Accordion.ItemGroup heading="Heading" value="one">
            <Accordion.Item data-testid="item" />
            Content
          </Accordion.ItemGroup>
        </Accordion>
      </CerberusProvider>,
    )
    const edges = screen.getAllByTestId('edge')
    expect(edges.map((edge) => edge.getAttribute('data-side'))).toEqual([
      'start',
      'end',
    ])
    expect(screen.getAllByTestId('pin')).toHaveLength(3)
    expect(screen.getByTestId('item')).toHaveAttribute('data-state', 'closed')
  })

  test('the generated *Props types stay strict', () => {
    // @ts-expect-error `side` is required on Marquee.Edge's own props
    const edge: MarqueeEdgeProps = {}
    // @ts-expect-error `index` is required on PinInput.Input's own props
    const input: PinInputInputProps = {}
    // Other props keep their types in a patch child too
    // @ts-expect-error `side` only takes Ark's side values
    const patch = <Marquee.Edge side="nowhere" />
    expect([edge, input, patch]).toHaveLength(3)
  })
})
