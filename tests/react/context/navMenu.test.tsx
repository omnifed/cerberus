import { describe, test, expect, afterEach, mock, spyOn } from 'bun:test'
import {
  render,
  screen,
  cleanup,
  renderHook,
  waitFor,
} from '@testing-library/react'
import {
  NavMenu,
  NavMenuTrigger,
  NavMenuList,
  useNavMenuContext,
  NavMenuLink,
} from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'

describe('navMenu & useNavMenuContext', () => {
  setupStrictMode()
  afterEach(cleanup)

  function NavMenuTest() {
    return (
      <NavMenu>
        <NavMenuTrigger controls="nav">Trigger</NavMenuTrigger>
        <NavMenuList id="nav">
          <NavMenuLink href="#">first link</NavMenuLink>
        </NavMenuList>
      </NavMenu>
    )
  }

  afterEach(cleanup)

  test('should export a NavMenu', () => {
    render(<NavMenuTest />)
    expect(screen.getByText(/trigger/i)).toBeTruthy()
    expect(screen.queryByText(/first link/i)).toBeNull()
  })

  test('should render a NavMenuList if expanded', async () => {
    render(<NavMenuTest />)
    expect(screen.queryByText(/first link/i)).toBeNull()
    await user.click(screen.getByText(/trigger/i))
    await waitFor(() => expect(screen.getByText(/first link/i)).toBeTruthy())
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
