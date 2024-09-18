import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Avatar } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Avatar', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render an image element', () => {
    render(
      <Avatar
        ariaLabel="Protector Cerberus"
        src="https://cerberus.digitalu.design/logo.svg"
      />,
    )
    expect(screen.getByRole('img')).toBeTruthy()
  })

  test('should render a fallback icon if no src or label', () => {
    render(<Avatar ariaLabel="" src="" />)
    // Not really a good way to test this because we want it to be hidden
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
  })

  test('should render initials if no src', () => {
    render(<Avatar ariaLabel="Protector Cerberus" src="" />)
    expect(screen.getByText('PC')).toBeTruthy()
  })

  test('should allow a custom element', () => {
    render(
      <Avatar as={<div data-testid="custom-element">Custom Element</div>} />,
    )
    expect(screen.getByTestId('custom-element')).toBeTruthy()
  })

  test('should accept a custom icon', () => {
    render(
      <Avatar ariaLabel="" icon={<svg data-testid="custom-icon" />} src="" />,
    )
    expect(screen.getByTestId('custom-icon')).toBeTruthy()
  })
})
