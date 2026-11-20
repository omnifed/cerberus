import { describe, expect, test } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { describeDXContract } from '@/test-utils/dx-harness'
import { Corn } from '@carbon/icons-react'
import { Admonition } from '@cerberus-design/react/admonition'
import { CerberusProvider } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describeDXContract({
  name: 'Admonition',
  Root: Admonition,
  defaultRootProps: {},

  primitiveTestNode: (
    <Admonition.Root>
      <Admonition.Indicator>
        <Corn />
      </Admonition.Indicator>
      <Admonition.Content data-testid="primitive-content">
        <Admonition.Heading>Standard Heading</Admonition.Heading>
        <Admonition.Description>Description body</Admonition.Description>
      </Admonition.Content>
    </Admonition.Root>
  ),

  abstractions: [
    {
      name: 'Admonition',
      Component: Admonition,
      defaultProps: { heading: 'Standard Heading' },
      children: 'Content body',
      testSlot: 'indicator',
      testSlotProp: 'heading',
    },
  ],
})

describe('Admonition close trigger', () => {
  test('should render a focusable close button when onClose is set', async () => {
    const calls: number[] = []
    render(
      <CerberusProvider config={makeConfig()}>
        <Admonition heading="Heads up" onClose={() => calls.push(1)}>
          Body
        </Admonition>
      </CerberusProvider>,
    )
    const close = screen.getByRole('button', { name: 'Close admonition' })
    expect(close.tagName).toBe('BUTTON')
    expect(close).toHaveAttribute('data-scope', 'icon-button')
    close.click()
    expect(calls).toEqual([1])
  })
})
