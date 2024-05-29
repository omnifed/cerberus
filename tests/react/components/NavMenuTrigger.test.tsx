import { describe, test, expect, afterEach, jest } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { NavMenu, NavMenuTrigger } from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'
import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react'

describe('NavMenuTrigger', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a default button element', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    render(<NavMenuTrigger {...ariaProps}>it works</NavMenuTrigger>, {
      wrapper: NavMenu,
    })
    expect(screen.getByText(/it works/i)).toBeTruthy()
    expect(screen.getByText(/it works/i).getAttribute('aria-controls')).toBe(
      'menu',
    )
    expect(screen.getByText(/it works/i).getAttribute('aria-expanded')).toBe(
      'false',
    )
  })

  test('should render a action button', () => {
    const ariaProps = {
      controls: 'menu-1',
      expanded: true,
    }
    render(<NavMenuTrigger {...ariaProps}>it works</NavMenuTrigger>, {
      wrapper: NavMenu,
    })
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--palette_action'),
    ).toBeTrue()
  })

  test('should render a danger button', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    render(
      <NavMenuTrigger palette="danger" {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--palette_danger'),
    ).toBeTrue()
  })

  test('should render a text button', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    render(
      <NavMenuTrigger usage="text" {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_text'),
    ).toBeTrue()
  })

  test('should render an outline button', () => {
    const ariaProps = {
      controls: 'menu-3',
      expanded: true,
    }
    render(
      <NavMenuTrigger usage="outline" {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_outline'),
    ).toBeTrue()
  })

  test('should render a filled button', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    render(
      <NavMenuTrigger usage="filled" {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_filled'),
    ).toBeTrue()
  })

  test('should render a sharp button', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    render(
      <NavMenuTrigger shape="sharp" {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--shape_sharp'),
    ).toBeTrue()
  })

  test('should render a rounded button', () => {
    const ariaProps = {
      controls: 'menu-4',
      expanded: true,
    }
    render(
      <NavMenuTrigger shape="rounded" {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--shape_rounded'),
    ).toBeTrue()
  })

  test('should render an alternate button', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    function LinkEL(
      props: PropsWithChildren,
      ref: ForwardedRef<HTMLAnchorElement>,
    ) {
      return <a {...props} ref={ref} />
    }
    const Link = forwardRef(LinkEL)
    render(
      <NavMenuTrigger as={Link} {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    expect(screen.getByText(/it works/i).tagName).toBe('A')
    expect(screen.getByText(/it works/i).getAttribute('aria-controls')).toBe(
      'menu',
    )
    expect(screen.getByText(/it works/i).getAttribute('aria-expanded')).toBe(
      'false',
    )
  })

  test('should accept a custom onClick event', async () => {
    const handleClick = jest.fn()
    const ariaProps = {
      controls: 'menu',
    }
    render(
      <NavMenuTrigger onClick={handleClick} {...ariaProps}>
        it works
      </NavMenuTrigger>,
      {
        wrapper: NavMenu,
      },
    )
    await user.click(screen.getByText(/it works/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
