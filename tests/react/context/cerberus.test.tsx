import { describe, test, expect, spyOn } from 'bun:test'
import { render, screen, renderHook } from '@testing-library/react'
import { CerberusProvider, useCerberusContext } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('CerberusProvider & useCerberusContext', () => {
  const config = makeConfig()

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
    expect(screen.getByText(JSON.stringify(config))).toBeInTheDocument()
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
    ).toBeInTheDocument()
  })

  test('should throw an error if used outside of CerberusProvider', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useCerberusContext())).toThrow(
      'useCerberus must be used within a CerberusProvider',
    )
  })
})
