import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Collapsible } from '@cerberus-design/react'
import { ChevronDown } from '@carbon/icons-react'

describe('Collapsible', () => {
  test('should render a collapsible element', async () => {
    render(
      <Collapsible.Root>
        <Collapsible.Trigger>
          Trigger
          <Collapsible.Indicator>
            <ChevronDown />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content>content</Collapsible.Content>
      </Collapsible.Root>,
    )
    expect(screen.getByText(/trigger/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).not.toBeVisible()
  })

  test('should allow variant props on the Root', () => {
    render(
      <Collapsible.Root effect="fade" defaultOpen>
        <Collapsible.Trigger>
          Trigger
          <Collapsible.Indicator>
            <ChevronDown />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content>content</Collapsible.Content>
      </Collapsible.Root>,
    )
    expect(screen.getByText(/content/i)).toBeVisible()
  })

  test('should allow passing Cerberus factory props to all parts', () => {
    render(
      <Collapsible.Root
        data-testid="root"
        effect="fade"
        defaultOpen
        marginTop="large"
      >
        <Collapsible.Trigger data-testid="trigger" padding="medium">
          Trigger
          <Collapsible.Indicator data-testid="indicator" color="action.bg.200">
            <ChevronDown />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content
          data-testid="content"
          padding="large"
          css={{ bgColor: 'black' }}
        >
          content
        </Collapsible.Content>
      </Collapsible.Root>,
    )
    expect(screen.getByTestId('root')).toHaveClass('cerberus-mt_large')
    expect(screen.getByTestId('trigger')).toHaveClass('cerberus-p_medium')
    expect(screen.getByTestId('indicator')).toHaveClass(
      'cerberus-c_action.bg.200',
    )
    expect(screen.getByTestId('content')).toHaveClass(
      'cerberus-p_large',
      'cerberus-bg-c_black',
    )
  })
})
