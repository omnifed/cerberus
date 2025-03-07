import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarRoot, CerberusProvider } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Avatar', () => {
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
    ).toBeInTheDocument()
  })

  test('should render a fallback icon if no src or label', () => {
    render(
      <CerberusProvider config={config}>
        <Avatar fallback={<p>TB</p>} />
      </CerberusProvider>,
    )
    expect(screen.getByText(/tb/i)).toBeInTheDocument()
  })

  test('should allow a custom element', () => {
    render(
      <CerberusProvider config={config}>
        <AvatarRoot asChild>
          <div data-testid="custom-element">Custom Element</div>
        </AvatarRoot>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('custom-element')).toBeInTheDocument()
  })
})
