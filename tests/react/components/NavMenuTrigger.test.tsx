import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { NavMenuTrigger } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import type { PropsWithChildren } from 'react'

describe('NavMenuTrigger', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a default button element', () => {
    render(<NavMenuTrigger>it works</NavMenuTrigger>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should render a action button', () => {
    render(<NavMenuTrigger>it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--palette_action'),
    ).toBeTrue()
  })

  test('should render a danger button', () => {
    render(<NavMenuTrigger palette="danger">it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--palette_danger'),
    ).toBeTrue()
  })

  test('should render a text button', () => {
    render(<NavMenuTrigger usage="text">it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_text'),
    ).toBeTrue()
  })

  test('should render an outline button', () => {
    render(<NavMenuTrigger usage="outline">it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_outline'),
    ).toBeTrue()
  })

  test('should render a filled button', () => {
    render(<NavMenuTrigger usage="filled">it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_filled'),
    ).toBeTrue()
  })

  test('should render a sharp button', () => {
    render(<NavMenuTrigger shape="sharp">it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--shape_sharp'),
    ).toBeTrue()
  })

  test('should render a rounded button', () => {
    render(<NavMenuTrigger shape="rounded">it works</NavMenuTrigger>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--shape_rounded'),
    ).toBeTrue()
  })

  test('should render an alternate button', () => {
    function Link(props: PropsWithChildren) {
      return <a>{props.children}</a>
    }
    render(<NavMenuTrigger as={Link}>it works</NavMenuTrigger>)
    expect(screen.getByText(/it works/i).tagName).toBe('A')
  })
})
