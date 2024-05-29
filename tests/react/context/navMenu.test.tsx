import { describe, test, expect, afterEach, mock, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  NavMenu,
  NavMenuTrigger,
  useNavMenuContext,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('useNavMenuContext', () => {
  setupStrictMode()
  afterEach(cleanup)

  function NavMenuTest() {
    return (
      <NavMenu>
        <NavMenuTrigger controls="todo">Trigger</NavMenuTrigger>
        <ul>
          <li>
            <a href="#">first link</a>
          </li>
        </ul>
      </NavMenu>
    )
  }

  afterEach(cleanup)

  test('should export a theme', () => {
    render(<NavMenuTest />)
    expect(screen.getByText(/trigger/i)).toBeTruthy()
  })

  test('should throw an error if used outside of NavMenu', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    mock.module('react', () => {
      return { useContext: () => null }
    })

    expect(() => renderHook(() => useNavMenuContext())).toThrow(
      'useNavMenuContext must be used within a NavMenu',
    )
    mock.restore()
  })
})
