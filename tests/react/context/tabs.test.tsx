import { describe, test, expect, beforeEach, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import { Tabs, useTabsContext } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Tabs & useTabsContext', () => {
  setupStrictMode()

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(cleanup)

  function TestTabs() {
    const context = useTabsContext()
    return <div>{context.active || 'no active tabs'}</div>
  }

  test('should export a Tabs component', () => {
    render(
      <Tabs>
        <TestTabs />
      </Tabs>,
    )
    screen.debug()
    expect(screen.getByText(/no active tabs/i)).toBeTruthy()
  })

  test('should set an initial active tab', () => {
    render(
      <Tabs active="tab1">
        <TestTabs />
      </Tabs>,
    )
    expect(screen.getByText(/tab1/i)).toBeTruthy()
  })

  test('should cache the active tab state if cache is true', () => {
    render(
      <Tabs cache>
        <TestTabs />
      </Tabs>,
    )
    expect(window.localStorage.getItem('cerberus-tabs')).toBe('')
  })

  test('should throw an error if used outside of Tabs', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useTabsContext())).toThrow(
      'useTabsContext must be used within a Tabs Provider',
    )
  })
})
