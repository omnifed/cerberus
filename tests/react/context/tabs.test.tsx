import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import { Tabs, useTabsContext } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Tabs & useTabsContext', () => {
  setupStrictMode()
  afterEach(cleanup)

  function TestTabs() {
    return <div>test</div>
  }

  test('should export a Tabs component', () => {
    render(
      <Tabs>
        <TestTabs />
      </Tabs>,
    )
    expect(screen.getByText(/test/i)).toBeTruthy()
  })

  test('should throw an error if used outside of Tabs', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useTabsContext())).toThrow(
      'useTabsContext must be used within a Tabs Provider',
    )
  })
})
