import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Avatar, CerberusProvider } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Avatar', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render an image element', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar
          ariaLabel="Protector Cerberus"
          src="https://cerberus.digitalu.design/logo.svg"
        />
        ,
      </CerberusProvider>,
    )
    expect(screen.getByRole('img')).toBeTruthy()
  })

  test('should render a fallback icon if no src or label', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar ariaLabel="" src="" />
      </CerberusProvider>,
    )
    // Not really a good way to test this because we want it to be hidden
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
  })

  test('should render initials if no src', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar ariaLabel="Protector Cerberus" src="" />
      </CerberusProvider>,
    )
    expect(screen.getByText('PC')).toBeTruthy()
  })

  test('should allow a custom element', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar as={<div data-testid="custom-element">Custom Element</div>} />
      </CerberusProvider>,
    )
    expect(screen.getByTestId('custom-element')).toBeTruthy()
  })

  test('should accept a custom icon', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar ariaLabel="" icon={<svg data-testid="custom-icon" />} src="" />
      </CerberusProvider>,
    )
    expect(screen.getByTestId('custom-icon')).toBeTruthy()
  })
})
