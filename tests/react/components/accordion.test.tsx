import { render } from '@/test-utils/render'
import { Accordion } from '@cerberus-design/react'
import { cleanup, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

describe('Accordion v2 DX Contract', () => {
  afterEach(cleanup)

  test('renders the abstraction out of the box', () => {
    render(
      <Accordion defaultValue={['item-1']}>
        <Accordion.ItemGroup value="item-1" heading="Standard Heading">
          Content body
        </Accordion.ItemGroup>
      </Accordion>,
    )

    expect(screen.getByText('Standard Heading')).toBeDefined()
    expect(screen.getByText('Content body')).toBeDefined()
  })

  test('renders the primitives out of the box', () => {
    render(
      <Accordion.Root defaultValue={['item-1']}>
        <Accordion.Item value="item-1">
          <Accordion.ItemTrigger>Standard Heading</Accordion.ItemTrigger>
          <Accordion.ItemContent>Content body</Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(screen.getByText('Standard Heading')).toBeDefined()
    expect(screen.getByText('Content body')).toBeDefined()
  })

  test('slotProps injects DOM attributes without rewriting the tree', () => {
    render(
      <Accordion>
        <Accordion.ItemGroup
          value="item-1"
          heading="Props Test"
          slotProps={{
            itemTrigger: {
              'data-testid': 'qa-trigger-1',
              'aria-describedby': 'custom-desc',
            },
          }}
        >
          Content body
        </Accordion.ItemGroup>
      </Accordion>,
    )

    const trigger = screen.getByTestId('qa-trigger-1')
    expect(trigger).toBeDefined()
    expect(trigger.getAttribute('aria-describedby')).toBe('custom-desc')
  })

  test('slots replace internal nodes while retaining Ark accessibility via asChild', () => {
    render(
      <Accordion>
        <Accordion.ItemGroup
          value="item-1"
          heading="Slot Test"
          slots={{
            itemIndicator: <svg data-testid="custom-svg-icon" />,
          }}
        >
          Content body
        </Accordion.ItemGroup>
      </Accordion>,
    )

    const customIcon = screen.getByTestId('custom-svg-icon')
    expect(customIcon).toBeDefined()

    // Verified: Ark's data-state attribute is correctly forwarded to the user's custom SVG
    // because the factory uses Test<Accordion.ItemIndicator asChild unstyled>
    expect(customIcon.hasAttribute('data-state')).toBe(true)
  })

  test('unstyled on the root cascades and strips Cerberus classes', () => {
    render(
      <Accordion unstyled data-testid="root">
        <Accordion.ItemGroup value="item-1" heading="Unstyled Test">
          Content body
        </Accordion.ItemGroup>
      </Accordion>,
    )

    const root = screen.getByTestId('root')
    // Inferred: The className will only contain Ark's default classes (if any) or user classes,
    // but Panda's recipe classes will be stripped by the context provider.
    expect(root.className).not.toInclude('cerberus-accordion')
  })
})
