import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  CerberusProvider,
  defineIcons,
  makeSystemConfig,
  useCerberusContext,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import { cerberusIcons } from '@cerberus-design/icons'

describe('CerberusProvider & useCerberusContext', () => {
  setupStrictMode()
  afterEach(cleanup)

  const icons = defineIcons(cerberusIcons)
  const config = makeSystemConfig({ icons })

  function TestEl() {
    const context = useCerberusContext()
    return <div>{JSON.stringify(context)}</div>
  }

  function TestIcon() {
    const { icons } = useCerberusContext()
    const { checkbox: CheckboxIcon } = icons

    if (!CheckboxIcon) {
      return null
    }

    return <CheckboxIcon role="img" />
  }

  function Test() {
    return (
      <CerberusProvider config={config}>
        <TestEl />
      </CerberusProvider>
    )
  }

  test('should provide the Cerberus configuration', () => {
    render(<Test />)
    expect(screen.getByText(JSON.stringify(config))).toBeTruthy()
  })

  test('should have access to the icons', () => {
    render(
      <CerberusProvider config={config}>
        <TestIcon />
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeTruthy()
  })

  test('should throw an error if used outside of CerberusProvider', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useCerberusContext())).toThrow(
      'useCerberus must be used within a CerberusProvider',
    )
  })
})
