import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemIndicator,
  AccordionItemContent,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Accordion', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render an accordion element', () => {
    render(
      <Accordion>
        <AccordionItem value="one">
          <AccordionItemTrigger>
            Accordion Item 1
            <AccordionItemIndicator />
          </AccordionItemTrigger>
          <AccordionItemContent>Accordion content</AccordionItemContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByText(/Accordion Item 1/i)).toBeTruthy()
    expect(screen.getByText(/Accordion content/i)).toBeTruthy()
  })
})
