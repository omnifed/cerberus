import { describe, test, expect, afterEach } from 'bun:test'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import {
  getPosition,
  NavMenu,
  NavMenuTrigger,
  NavMenuList,
  NavMenuLink,
  type NavMenuListProps,
} from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'
import type { PropsWithChildren } from 'react'

type Attributes = {
  style: {
    value: string
  }
}

describe('NavMenuList & NavMenuLink', () => {
  setupStrictMode()
  afterEach(cleanup)

  function Link(props: PropsWithChildren) {
    return <a {...props} />
  }

  function NavMenuTest(props: NavMenuListProps) {
    return (
      <NavMenu>
        <NavMenuTrigger controls="nav">Trigger</NavMenuTrigger>
        <NavMenuList id={props.id} position={props.position}>
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
    render(<NavMenuTest id="nav" />)
    await user.click(screen.getByText(/trigger/i))
    await waitFor(() => expect(screen.getByText(/custom link/i)).toBeTruthy())
  })

  test('should allow a custom position', async () => {
    render(<NavMenuTest id="nav" position="top" />)
    await user.click(screen.getByText(/trigger/i))
    await waitFor(() => expect(screen.getByText(/custom link/i)).toBeTruthy())
    screen.debug()
    const list = screen.getByRole('list').attributes as unknown as Attributes
    expect(list.style.value).toBe(
      'left: auto; right: auto; top: auto; bottom: 110%;',
    )
  })

  test('should have a way to get the right position value', () => {
    expect(getPosition('right')).toEqual({
      left: '110%',
      right: 'auto',
      top: 'auto',
      bottom: '50%',
    })
  })

  test('should have a way to get the left position value', () => {
    expect(getPosition('left')).toEqual({
      left: 'auto',
      right: '110%',
      top: 'auto',
      bottom: '50%',
    })
  })

  test('should have a way to get the bottom position value', () => {
    expect(getPosition('bottom')).toEqual({
      left: 'auto',
      right: 'auto',
      top: '110%',
      bottom: 'auto',
    })
  })

  test('should have a way to get the top position value', () => {
    expect(getPosition('top')).toEqual({
      left: 'auto',
      right: 'auto',
      top: 'auto',
      bottom: '110%',
    })
  })
})
