import { describe, test, expect, beforeEach, afterEach } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import { Tabs } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Tabs Family & useTabsContext', () => {
  const tabData = [
    { id: 'tab1', label: 'Tab1', content: 'Tab1 content' },
    { id: 'tab2', label: 'Tab2', content: 'Tab2 content' },
    { id: 'tab3', label: 'Tab3', content: 'Tab3 content' },
  ]

  setupStrictMode()

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(cleanup)

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
    expect(screen.getByText(/tab1 content/i)).toBeTruthy()
    expect(
      screen.queryByText(/tab2 content/i)?.getAttribute('data-state'),
    ).toEqual('closed')
  })
})
