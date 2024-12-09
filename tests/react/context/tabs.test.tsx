import { describe, test, expect, beforeEach, afterEach } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import { Tabs, TabsList, Tab, TabPanel } from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'

describe('Tabs Family & useTabsContext', () => {
  const tabData = [
    { id: 'tab1', label: 'Tab1', content: 'Tab1 content' },
    { id: 'tab2', label: 'Tab2', content: 'Tab2 content' },
    { id: 'tab3', label: 'Tab3', content: 'Tab3 content' },
  ]
  const SELECTED = 'aria-selected'
  const ARROW_R = '{arrowright}'
  const ARROW_L = '{arrowleft}'
  const HOME = '{home}'
  const END = '{end}'

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
    // The right panel is showing
    expect(screen.getByText(/tab1 content/i)).toBeTruthy()
    expect(screen.queryByText(/tab2 content/i)).toBeFalsy()

    // The right tab is selected
    expect(
      screen.getByRole('tablist').attributes.getNamedItem('aria-label')
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
      <Tabs>
        <TestTabs />
      </Tabs>,
    )
    expect(window.localStorage.getItem('cerberus-tabs')).toBeNull()
    await user.click(screen.getByRole('tab', { name: /tab2/i }))
    expect(window.localStorage.getItem('cerberus-tabs')).toBe('tab2')
  })

  // test('should throw an error if used outside of Tabs', () => {
  //   // don't clog up the console with errors
  //   spyOn(console, 'error').mockImplementation(() => null)
  //   expect(() => renderHook(() => useTabsContext())).toThrow(
  //     'useTabsContext must be used within a Tabs Provider',
  //   )
  // })

  test('should use keyboard navigation moving right', async () => {
    render(
      <Tabs defaultValue="tab1">
        <TestTabs />
      </Tabs>,
    )
    const tab1 = screen.getByRole('tab', { name: /tab1/i })
    const tab2 = screen.getByRole('tab', { name: /tab2/i })
    const tab3 = screen.getByRole('tab', { name: /tab3/i })

    expect(tab1.attributes.getNamedItem(SELECTED)?.textContent).toEqual('true')
    await user.type(tab1, ARROW_R)
    expect(tab2.focus).toBeTruthy()
    await user.type(tab2, ARROW_R)
    expect(tab3.focus).toBeTruthy()
    await user.type(tab3, ARROW_R)
    expect(tab1.focus).toBeTruthy()
  })

  test('should use keyboard navigation moving left', async () => {
    render(
      <Tabs defaultValue="tab1">
        <TestTabs />
      </Tabs>,
    )
    const tab1 = screen.getByRole('tab', { name: /tab1/i })
    const tab2 = screen.getByRole('tab', { name: /tab2/i })
    const tab3 = screen.getByRole('tab', { name: /tab3/i })

    expect(tab1.attributes.getNamedItem(SELECTED)?.textContent).toEqual('true')
    await user.type(tab1, ARROW_L)
    expect(tab3.focus).toBeTruthy()
    await user.type(tab3, ARROW_L)
    expect(tab2.focus).toBeTruthy()
    await user.type(tab2, ARROW_L)
    expect(tab1.focus).toBeTruthy()
  })

  test('should use keyboard navigation moving to the first tab', async () => {
    render(
      <Tabs defaultValue="tab1">
        <TestTabs />
      </Tabs>,
    )
    const tab1 = screen.getByRole('tab', { name: /tab1/i })
    const tab3 = screen.getByRole('tab', { name: /tab3/i })

    expect(tab1.attributes.getNamedItem(SELECTED)?.textContent).toEqual('true')
    await user.type(tab1, HOME)
    expect(tab3.focus).toBeTruthy()
  })

  test('should use keyboard navigation moving to the last tab', async () => {
    render(
      <Tabs defaultValue="tab1">
        <TestTabs />
      </Tabs>,
    )
    const tab1 = screen.getByRole('tab', { name: /tab1/i })
    const tab3 = screen.getByRole('tab', { name: /tab3/i })

    expect(tab1.attributes.getNamedItem(SELECTED)?.textContent).toEqual('true')
    await user.type(tab1, END)
    expect(tab3.focus).toBeTruthy()
  })

  test('should cache a uuid if provided and id prop', async () => {
    render(
      <Tabs id="unique-id">
        <TestTabs />
      </Tabs>,
    )
    expect(window.localStorage.getItem('cerberus-tabs-unique-id')).toBeNull()
    await user.click(screen.getByRole('tab', { name: /tab2/i }))
    expect(window.localStorage.getItem('cerberus-tabs-unique-id')).toBe('tab2')
  })
})
