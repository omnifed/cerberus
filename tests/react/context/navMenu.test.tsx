import { describe, test, expect, afterEach, spyOn } from 'bun:test'
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

  test('should export a NavMenu', () => {
    render(
      <NavMenu>
        <NavMenuTrigger controls="nav">Open</NavMenuTrigger>
        <NavMenuList id="nav">
          <NavMenuLink href="#">first link</NavMenuLink>
        </NavMenuList>
      </NavMenu>,
    )
    expect(screen.getByText(/open/i)).toBeTruthy()
    expect(screen.queryByText(/first link/i)).toBeNull()
  })

  test('should render a NavMenuList if expanded', async () => {
    render(
      <NavMenu>
        <NavMenuTrigger controls="nav-1">View</NavMenuTrigger>
        <NavMenuList id="nav-1">
          <NavMenuLink href="#">first link</NavMenuLink>
        </NavMenuList>
      </NavMenu>,
    )
    expect(screen.queryByText(/first link/i)).toBeNull()
    await user.click(screen.getByText(/view/i))
    await waitFor(() => expect(screen.getByText(/first link/i)).toBeTruthy())
  })

  test('should throw an error if used outside of NavMenu', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useNavMenuContext())).toThrow(
      'useNavMenuContext must be used within a NavMenu',
    )
  })
})
