import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Accordion,
  AccordionItemGroup,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('AccordionItemGroup', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render an accordion element', () => {
    render(
      <CerberusProvider config={config}>
        <Accordion>
          <AccordionItemGroup heading="Accordion Item 1" value="one">
            Accordion content
          </AccordionItemGroup>
        </Accordion>
      </CerberusProvider>,
    )
    expect(screen.getByText(/Accordion Item 1/i)).toBeTruthy()
    expect(screen.getByText(/Accordion content/i)).toBeTruthy()
  })

  test('should apply specific styles based on the indicator position', () => {
    render(
      <CerberusProvider config={config}>
        <Accordion>
          <AccordionItemGroup
            heading="Accordion Item 1"
            value="one"
            indicatorPosition="start"
          >
            Accordion content
          </AccordionItemGroup>
        </Accordion>
      </CerberusProvider>,
    )
    expect(screen.getByRole('button').classList).toContain(
      'cerberus-jc_flex-start',
    )
  })
})
