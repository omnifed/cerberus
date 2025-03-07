import { describe, test, expect, beforeEach } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Tabs } from '@cerberus-design/react'

describe('Tabs Family & useTabsContext', () => {
  const tabData = [
    { id: 'tab1', label: 'Tab1', content: 'Tab1 content' },
    { id: 'tab2', label: 'Tab2', content: 'Tab2 content' },
    { id: 'tab3', label: 'Tab3', content: 'Tab3 content' },
  ]

  beforeEach(() => {
    localStorage.clear()
  })

  function TestTabs() {
    return (
      <>
        <Tabs.List>
          {tabData.map((tab) => (
            <Tabs.Tab key={tab.id} value={tab.id}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabData.map((tab) => (
          <Tabs.Panel key={tab.id} value={tab.id}>
            {tab.content}
          </Tabs.Panel>
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
})
