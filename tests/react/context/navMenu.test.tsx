import { describe, test, expect, afterEach, mock, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  NavMenuProvider,
  NavMenuTrigger,
  useNavMenuContext,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('useNavMenuContext', () => {
  setupStrictMode()

  function NavMenuTest() {
    const state = useNavMenuContext()

    return (
      <nav>
        <NavMenuTrigger controls="todo" expanded={false} ref={state.triggerRef}>
          Trigger
        </NavMenuTrigger>
        <ul ref={state.menuRef}>
          <li>
            <a href="#">first link</a>
          </li>
        </ul>
      </nav>
    )
  }

  afterEach(cleanup)

  test('should export a theme', () => {
    render(<NavMenuTest />, { wrapper: NavMenuProvider })
    expect(screen.getByText(/trigger/i)).toBeTruthy()
  })

  test('should throw an error if used outside of NavMenuProvider', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    mock.module('react', () => {
      return { useContext: () => null }
    })

    expect(() => renderHook(() => useNavMenuContext())).toThrow(
      'useNavMenuContext must be used within a NavMenuProvider',
    )
    mock.restore()
  })
})
