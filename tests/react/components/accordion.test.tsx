import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemIndicator,
  AccordionItemContent,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Accordion', () => {
  const config = makeConfig()

  test('should render an accordion element', () => {
    render(
      <CerberusProvider config={config}>
        <Accordion>
          <AccordionItem value="one">
            <AccordionItemTrigger>
              Accordion Item 1
              <AccordionItemIndicator />
            </AccordionItemTrigger>
            <AccordionItemContent>Accordion content</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </CerberusProvider>,
    )
    expect(screen.getByText(/Accordion Item 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Accordion content/i)).toBeInTheDocument()
  })
})
