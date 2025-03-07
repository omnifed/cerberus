import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Accordion,
  AccordionItemGroup,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('AccordionItemGroup', () => {
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
    expect(screen.getByText(/Accordion Item 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Accordion content/i)).toBeInTheDocument()
  })
})
