import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Avatar, AvatarRoot, CerberusProvider } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Avatar', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render an image element', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar
          alt="Protector Cerberus"
          src="https://cerberus.digitalu.design/logo.svg"
        />
        ,
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeTruthy()
  })

  test('should render a fallback icon if no src or label', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar fallback={<p>TB</p>} />
      </CerberusProvider>,
    )
    expect(screen.getByText(/tb/i)).toBeTruthy()
  })

  test('should allow a custom element', () => {
    render(
      <CerberusProvider config={config}>
        <AvatarRoot asChild>
          <div data-testid="custom-element">Custom Element</div>
        </AvatarRoot>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('custom-element')).toBeTruthy()
  })
})
