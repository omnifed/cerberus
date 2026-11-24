import { afterEach, describe, expect, test } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { CerberusProvider } from '@cerberus-design/react'
import { Accordion } from '@cerberus-design/react/accordion'
import { makeConfig } from '@/utils'

// v1's top-level `AccordionItemGroup` is now the `Accordion.ItemGroup` abstraction
describe('Accordion.ItemGroup', () => {
  const config = makeConfig()
  afterEach(cleanup)

  test('should render an accordion element', () => {
    render(
      <CerberusProvider config={config}>
        <Accordion defaultValue={['one']}>
          <Accordion.ItemGroup heading="Accordion Item 1" value="one">
            Accordion content
          </Accordion.ItemGroup>
        </Accordion>
      </CerberusProvider>,
    )
    const trigger = screen.getByRole('button', { name: /Accordion Item 1/i })
    expect(trigger).toHaveAttribute('data-part', 'item-trigger')
    expect(trigger).toHaveAttribute('data-indicator-position', 'end')
    expect(screen.getByText(/Accordion content/i)).toHaveAttribute(
      'data-part',
      'item-content',
    )
  })

  test('should render the indicator before the heading when indicatorPosition is start', () => {
    render(
      <CerberusProvider config={config}>
        <Accordion>
          <Accordion.ItemGroup
            heading="Accordion Item 1"
            value="one"
            indicatorPosition="start"
          >
            Accordion content
          </Accordion.ItemGroup>
        </Accordion>
      </CerberusProvider>,
    )
    const trigger = screen.getByRole('button', { name: /Accordion Item 1/i })
    expect(trigger).toHaveAttribute('data-indicator-position', 'start')
    expect(trigger.firstElementChild).toHaveAttribute(
      'data-part',
      'item-indicator',
    )
  })
})
