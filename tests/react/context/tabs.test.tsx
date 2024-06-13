import { describe, test, expect, beforeEach, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  Tabs,
  TabList,
  Tab,
  useTabsContext,
  TabPanel,
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
        <TabList data-testid="tablist" description="Button details">
          {tabData.map((tab) => (
            <Tab key={tab.id} value={tab.id}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        {tabData.map((tab) => (
          <TabPanel key={tab.id} tab={tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </>
    )
  }

  test('should export a Tabs component', () => {
    render(
      <Tabs active="tab1">
        <TestTabs />
      </Tabs>,
    )
    // The right panel is showing
    expect(screen.getByText(/tab1 content/i)).toBeTruthy()
    expect(screen.queryByText(/tab2 content/i)).toBeFalsy()

    // The right tab is selected
    expect(
      screen.getByTestId('tablist').attributes.getNamedItem('aria-describedby')
        ?.textContent,
    ).toEqual('Button details')
    expect(
      screen
        .getByRole('tab', {
          name: /tab1/i,
        })
        .attributes.getNamedItem(SELECTED)?.textContent,
    ).toEqual('true')
    expect(
      screen
        .getByRole('tab', {
          name: /tab2/i,
        })
        .attributes.getNamedItem(SELECTED)?.textContent,
    ).toEqual('false')
    expect(
      screen
        .getByRole('tab', {
          name: /tab2/i,
        })
        .attributes.getNamedItem('tabindex')?.textContent,
    ).toEqual('-1')
  })

  test('should update the active value when a Tab is clicked', async () => {
    render(
      <Tabs>
        <TestTabs />
      </Tabs>,
    )
    await user.click(screen.getByRole('tab', { name: /tab2/i }))
    expect(
      screen
        .getByRole('tab', { name: /tab2/i })
        .attributes.getNamedItem(SELECTED)?.textContent,
    ).toEqual('true')
    expect(screen.queryByText(/tab1 content/i)).toBeFalsy()
    expect(screen.getByText(/tab2 content/i)).toBeTruthy()
  })

  test('should set an initial active tab', () => {
    render(
      <Tabs active="tab1">
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
    expect(window.localStorage.getItem('cerberus-tabs')).toBe('')
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
})
