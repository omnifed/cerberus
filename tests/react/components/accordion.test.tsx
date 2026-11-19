import { describe, expect, test } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { useAccordion } from '@cerberus-design/react'
import { Accordion } from '@cerberus-design/react/accordion'
import { describeDXContract } from '../../test-utils/dx-harness'

describeDXContract({
  name: 'Accordion',
  Root: Accordion.Root,
  defaultRootProps: { defaultValue: ['item-1'] },

  primitiveTestNode: (
    <Accordion.Item value="item-1">
      <Accordion.ItemTrigger>Standard Heading</Accordion.ItemTrigger>
      <Accordion.ItemContent data-testid="primitive-content">
        Content body
      </Accordion.ItemContent>
    </Accordion.Item>
  ),

  abstractions: [
    {
      name: 'ItemGroup',
      Component: Accordion.ItemGroup,
      defaultProps: { value: 'item-1', heading: 'Standard Heading' },
      children: 'Content body',
      PartToPatch: Accordion.ItemTrigger,
      PartToReplace: Accordion.ItemIndicator,
    },
  ],
})

describe('Accordion.RootProvider', () => {
  // The raw Ark AccordionRootProvider is no longer exported: parts need the Cerberus
  // recipe context, which only the styled RootProvider provides
  test('provides the recipe to parts driven by useAccordion()', () => {
    function Controlled() {
      const accordion = useAccordion({ defaultValue: ['item-1'] })
      return (
        <Accordion.RootProvider value={accordion} size="sm">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Heading</Accordion.ItemTrigger>
            <Accordion.ItemContent data-testid="content">
              Body
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.RootProvider>
      )
    }
    render(<Controlled />)
    expect(screen.getByTestId('content').className).toContain('size_sm')
    expect(screen.getByText('Body')).toBeVisible()
  })
})
