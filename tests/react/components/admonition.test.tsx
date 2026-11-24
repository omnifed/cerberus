import { afterEach, describe, expect, test } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { describeDXContract } from '@/test-utils/dx-harness'
import { render as renderWithProvider } from '@/test-utils/render'
import { Corn } from '@carbon/icons-react'
import { Admonition } from '@cerberus-design/react/admonition'
import { CerberusProvider } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describeDXContract({
  name: 'Admonition',
  // The parts render inside Root; `<Admonition>` would nest them in its <p>
  Root: Admonition.Root,
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
      PartToPatch: Admonition.Heading,
      PartToReplace: Admonition.Indicator,
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

describe('Admonition part overrides', () => {
  afterEach(cleanup)

  test('a Heading child with children renders without the heading prop', () => {
    renderWithProvider(
      <Admonition>
        <Admonition.Heading data-testid="heading">Custom</Admonition.Heading>
        Body
      </Admonition>,
    )
    expect(screen.getByTestId('heading')).toHaveTextContent('Custom')
    expect(screen.getByText('Body')).toHaveAttribute('data-part', 'description')
  })

  test('an Indicator child with children replaces the default avatar', () => {
    renderWithProvider(
      <Admonition heading="Heads up">
        <Admonition.Indicator data-testid="indicator">
          <Corn data-testid="corn" />
        </Admonition.Indicator>
        Body
      </Admonition>,
    )
    const indicator = screen.getByTestId('indicator')
    expect(indicator.tagName).toBe('SPAN')
    expect(indicator).toContainElement(screen.getByTestId('corn'))
    expect(indicator.querySelector('[data-scope="avatar"]')).toBeNull()
  })

  test('the deprecated icon prop still replaces the default avatar', () => {
    renderWithProvider(
      <Admonition heading="Heads up" icon={<Corn data-testid="corn" />}>
        Body
      </Admonition>,
    )
    const corn = screen.getByTestId('corn')
    expect(corn.parentElement).toHaveAttribute('data-part', 'indicator')
  })

  test('a Content child with children replaces the heading and description', () => {
    renderWithProvider(
      <Admonition heading="Hidden heading">
        <Admonition.Content data-testid="content">Only this</Admonition.Content>
        Hidden body
      </Admonition>,
    )
    expect(screen.getByTestId('content')).toHaveTextContent('Only this')
    expect(screen.queryByText('Hidden heading')).toBeNull()
    expect(screen.queryByText('Hidden body')).toBeNull()
  })

  test('the close button uses the action palette for a page admonition', () => {
    renderWithProvider(
      <Admonition palette="page" onClose={() => {}}>
        Body
      </Admonition>,
    )
    const close = screen.getByRole('button', { name: 'Close admonition' })
    expect(close.className).toInclude('palette_action')
    expect(close.className).not.toInclude('palette_page')
  })
})
