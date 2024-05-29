import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { NavMenuTrigger } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import type { PropsWithChildren } from 'react'

describe('NavMenuTrigger', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a default button element', () => {
    const ariaProps = {
      controls: 'menu',
      expanded: false,
    }
    render(<NavMenuTrigger {...ariaProps}>it works</NavMenuTrigger>)
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
    render(<NavMenuTrigger {...ariaProps}>it works</NavMenuTrigger>)
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
    function Link(props: PropsWithChildren) {
      return <a {...props} />
    }
    render(
      <NavMenuTrigger as={Link} {...ariaProps}>
        it works
      </NavMenuTrigger>,
    )
    expect(screen.getByText(/it works/i).tagName).toBe('A')
    expect(screen.getByText(/it works/i).getAttribute('aria-controls')).toBe(
      'menu',
    )
    expect(screen.getByText(/it works/i).getAttribute('aria-expanded')).toBe(
      'false',
    )
  })
})
