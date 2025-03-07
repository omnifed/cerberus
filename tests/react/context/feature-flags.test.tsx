import { describe, test, expect, spyOn } from 'bun:test'
import { render, screen, renderHook } from '@testing-library/react'
import {
  FeatureFlag,
  FeatureFlags,
  useFeatureFlags,
} from '@cerberus-design/react'

describe('Field & useFieldContext', () => {
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
    expect(screen.getByText(/feature one is enabled/i)).toBeInTheDocument()
    expect(
      screen.queryByText(/feature two is disabled/i),
    ).not.toBeInTheDocument()
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useFeatureFlags('test'))).toThrow(
      'useFeatureFlag must be used within a FeatureFlags Provider',
    )
  })
})
