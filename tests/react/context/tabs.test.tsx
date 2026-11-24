import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Tabs, useTabs } from '@cerberus-design/react'

describe('Tabs', () => {
  const tabData = [
    { id: 'tab1', label: 'Tab1', content: 'Tab1 content' },
    { id: 'tab2', label: 'Tab2', content: 'Tab2 content' },
    { id: 'tab3', label: 'Tab3', content: 'Tab3 content' },
  ]

  function TestTabs() {
    return (
      <>
        <Tabs.ListGroup data-testid="list">
          {tabData.map((tab) => (
            <Tabs.Trigger key={tab.id} value={tab.id}>
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.ListGroup>
        {tabData.map((tab) => (
          <Tabs.Content key={tab.id} value={tab.id}>
            {tab.content}
          </Tabs.Content>
        ))}
      </>
    )
  }

  test('should export a Tabs component', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <TestTabs />
      </Tabs.Root>,
    )
    expect(screen.getByText(/tab1 content/i)).toBeInTheDocument()
    expect(screen.queryByText(/tab2 content/i)).toHaveAttribute('data-state')
  })

  test('should render the Root as the compound component itself', () => {
    render(
      <Tabs defaultValue="tab2" data-testid="root">
        <TestTabs />
      </Tabs>,
    )
    expect(screen.getByTestId('root')).toHaveAttribute('data-part', 'root')
    expect(screen.getByRole('tab', { name: 'Tab2' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  test('should default to horizontal orientation and indicatorPlacement end', () => {
    render(
      <Tabs.Root defaultValue="tab1" data-testid="root">
        <TestTabs />
      </Tabs.Root>,
    )

    expect(screen.getByTestId('root')).toHaveAttribute(
      'data-orientation',
      'horizontal',
    )
    expect(screen.getByTestId('root').className).toContain('end')
  })

  test('should allow orientation and indicatorPlacement variant props on the Root', () => {
    render(
      <Tabs.Root
        defaultValue="tab1"
        data-testid="root"
        orientation="vertical"
        indicatorPlacement="start"
      >
        <TestTabs />
      </Tabs.Root>,
    )

    expect(screen.getByTestId('root')).toHaveAttribute(
      'data-orientation',
      'vertical',
    )
    expect(screen.getByTestId('root').className).toContain('start')
  })

  test('ListGroup should render the indicator after the triggers', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <TestTabs />
      </Tabs.Root>,
    )

    const list = screen.getByTestId('list')
    expect(list).toHaveAttribute('data-part', 'list')
    expect(screen.getAllByRole('tab')).toHaveLength(3)
    expect(list.lastElementChild).toHaveAttribute('data-part', 'indicator')
    expect(list.querySelectorAll('[data-part=indicator]')).toHaveLength(1)
  })

  test('ListGroup should take a direct Tabs.Indicator child as a prop override', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.ListGroup data-testid="list">
          <Tabs.Trigger value="tab1">Tab1</Tabs.Trigger>
          <Tabs.Indicator data-testid="indicator" />
        </Tabs.ListGroup>
      </Tabs.Root>,
    )

    const list = screen.getByTestId('list')
    expect(list.querySelectorAll('[data-part=indicator]')).toHaveLength(1)
    expect(list.lastElementChild).toBe(screen.getByTestId('indicator'))
  })

  test('List primitive should not render an indicator', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List data-testid="list">
          <Tabs.Trigger value="tab1">Tab1</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>,
    )

    expect(
      screen.getByTestId('list').querySelector('[data-part=indicator]'),
    ).toBeNull()
  })

  test('Context should expose the tabs state to a render function', () => {
    render(
      <Tabs.Root defaultValue="tab3">
        <TestTabs />
        <Tabs.Context>
          {(tabs) => <p data-testid="value">{tabs.value}</p>}
        </Tabs.Context>
      </Tabs.Root>,
    )

    expect(screen.getByTestId('value')).toHaveTextContent('tab3')
  })

  test('RootProvider should be styled like Root and driven by useTabs', () => {
    function ProvidedTabs() {
      const tabs = useTabs({ defaultValue: 'tab2' })
      return (
        <Tabs.RootProvider value={tabs} data-testid="root">
          <TestTabs />
        </Tabs.RootProvider>
      )
    }
    render(<ProvidedTabs />)

    expect(screen.getByTestId('root').className).toContain('end')
    expect(screen.getByRole('tab', { name: 'Tab2' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })
})
