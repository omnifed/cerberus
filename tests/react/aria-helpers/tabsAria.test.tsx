import { describe, test, expect } from 'bun:test'
import { useTabsKeyboardNavigation } from '@cerberus-design/react'
import { renderHook } from '@testing-library/react'

// This is mostly tested in tabs.test.tsx

describe('tabs aria helpers', () => {
  test('should export a hook', () => {
    expect(useTabsKeyboardNavigation).toBeFunction()
  })

  test('should return a ref', () => {
    expect(() => renderHook(() => useTabsKeyboardNavigation())).toEqual(
      expect.any(Function),
    )
  })
})
