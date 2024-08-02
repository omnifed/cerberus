import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  FeatureFlag,
  FeatureFlags,
  useFeatureFlags,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Field & useFieldContext', () => {
  setupStrictMode()
  afterEach(cleanup)

  const flags = {
    featureOne: true,
    featureTwo: false,
  }

  function Test() {
    return (
      <FeatureFlags flags={flags}>
        <FeatureFlag flag="featureOne">Feature one is enabled</FeatureFlag>
        <FeatureFlag flag="featureTwo">Feature two is disabled</FeatureFlag>
      </FeatureFlags>
    )
  }

  test('should export a NavMenu', () => {
    render(<Test />)
    expect(screen.getByText(/feature one is enabled/i)).toBeTruthy()
    expect(screen.queryByText(/feature two is disabled/i)).toBeFalsy()
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useFeatureFlags('test'))).toThrow(
      'useFeatureFlag must be used within a FeatureFlags Provider',
    )
  })
})
