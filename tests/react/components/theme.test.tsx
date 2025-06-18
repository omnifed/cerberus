import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Theme } from '@cerberus-design/react'

describe('Theme', () => {
  test('should render child content', () => {
    render(
      <Theme data-testid="root">
        <div>it works</div>
      </Theme>,
    )
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
    expect(screen.getByTestId('root')).toHaveAttribute(
      'data-color-mode',
      'light',
    )
    expect(screen.getByTestId('root')).toHaveAttribute(
      'data-panda-theme',
      'cerberus',
    )
  })

  test('it should apply the mode if provided', () => {
    render(
      <Theme data-testid="root" mode="dark">
        <div>it works</div>
      </Theme>,
    )
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
    expect(screen.getByTestId('root')).toHaveAttribute(
      'data-color-mode',
      'dark',
    )
  })

  test('it should apply the theme if provided', () => {
    render(
      <Theme data-testid="root" theme="acheron">
        <div>it works</div>
      </Theme>,
    )
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
    expect(screen.getByTestId('root')).toHaveAttribute(
      'data-panda-theme',
      'acheron',
    )
  })
})
