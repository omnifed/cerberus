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
})
