import { describe, test, expect, afterEach } from 'bun:test'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import {
  NavMenu,
  NavMenuTrigger,
  NavMenuList,
  NavMenuLink,
} from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'
import type { PropsWithChildren } from 'react'

describe('NavMenuList & NavMenuLink', () => {
  setupStrictMode()
  afterEach(cleanup)

  function Link(props: PropsWithChildren) {
    return <a {...props} />
  }

  function NavMenuTest() {
    return (
      <NavMenu>
        <NavMenuTrigger controls="todo">Trigger</NavMenuTrigger>
        <NavMenuList>
          <NavMenuLink as={Link} href="#">
            custom link
          </NavMenuLink>
        </NavMenuList>
      </NavMenu>
    )
  }

  afterEach(cleanup)

  // navMenu.test.tsx covers majority of use cases. This only tests fine tuning

  test('should allow a custom Link component', async () => {
    render(<NavMenuTest />)
    await user.click(screen.getByText(/trigger/i))
    await waitFor(() => expect(screen.getByText(/custom link/i)).toBeTruthy())
  })
})
