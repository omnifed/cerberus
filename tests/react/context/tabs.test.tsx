import { describe, test, expect, beforeEach, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  Tabs,
  TabsList,
  Tab,
  TabPanel,
  useTabsContext,
} from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'

describe('Tabs Family & useTabsContext', () => {
  const tabData = [
    { id: 'tab1', label: 'Tab1', content: 'Tab1 content' },
    { id: 'tab2', label: 'Tab2', content: 'Tab2 content' },
    { id: 'tab3', label: 'Tab3', content: 'Tab3 content' },
  ]
  const SELECTED = 'aria-selected'

  setupStrictMode()

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(cleanup)

  function TestTabs() {
    return (
      <>
        <TabsList>
          {tabData.map((tab) => (
            <Tab key={tab.id} value={tab.id}>
              {tab.label}
            </Tab>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabPanel key={tab.id} value={tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </>
    )
  }

  test('should export a Tabs component', () => {
    render(
      <Tabs defaultValue="tab1">
        <TestTabs />
      </Tabs>,
    )
    expect(screen.getByText(/tab1 content/i)).toBeTruthy()
    expect(
      screen.queryByText(/tab2 content/i)?.getAttribute('data-state'),
    ).toEqual('closed')
  })

  test('should set an initial active tab', () => {
    render(
      <Tabs defaultValue="tab1">
        <TestTabs />
      </Tabs>,
    )
    expect(
      screen
        .getByRole('tab', {
          name: /tab1/i,
        })
        .attributes.getNamedItem(SELECTED)?.textContent,
    ).toEqual('true')
  })

  test('should cache the active tab state if cache is true', async () => {
    render(
      <Tabs cache>
        <TestTabs />
      </Tabs>,
    )
    expect(window.localStorage.getItem('cerberus-tabs')).toBeNull()
    await user.click(screen.getByRole('tab', { name: /tab2/i }))
    expect(window.localStorage.getItem('cerberus-tabs')).toBe('tab2')
  })

  test('should throw an error if used outside of Tabs', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useTabsContext())).toThrow(
      'useTabsContext must be used within a Tabs Provider',
    )
  })

  test('should cache a uuid if provided and id prop', async () => {
    render(
      <Tabs cache uuid="unique-id">
        <TestTabs />
      </Tabs>,
    )
    expect(window.localStorage.getItem('cerberus-tabs-unique-id')).toBeNull()
    await user.click(screen.getByRole('tab', { name: /tab2/i }))
    expect(window.localStorage.getItem('cerberus-tabs-unique-id')).toBe('tab2')
  })
})
