import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Button, IconButton, IconButtonRoot } from '@cerberus-design/react'

describe('IconButton', () => {
  test('should render a icon button element', () => {
    render(<IconButton ariaLabel="test button">it works</IconButton>)
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/test button/i)).toBeInTheDocument()
  })

  test('should render a action icon button', () => {
    render(<IconButton ariaLabel="test button">it works</IconButton>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--palette_action',
    )
  })

  test('should render a danger icon button', () => {
    render(
      <IconButton ariaLabel="test button" palette="danger">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--palette_danger',
    )
  })

  test('should render a ghost icon button', () => {
    render(
      <IconButton ariaLabel="test button" usage="ghost">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--usage_ghost',
    )
  })

  test('should render a filled icon button', () => {
    render(
      <IconButton ariaLabel="test button" usage="filled">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--usage_filled',
    )
  })

  test('should render a circle icon button', () => {
    render(
      <IconButton ariaLabel="test button" shape="circle">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--shape_circle',
    )
  })

  test('should render a small icon button', () => {
    render(
      <IconButton ariaLabel="test button" size="sm">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--size_sm',
    )
  })

  test('should render a large icon button', () => {
    render(
      <IconButton ariaLabel="test button" size="lg">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-icon-btn--size_lg',
    )
  })

  test('should alias Button.IconButton', () => {
    expect(IconButton).toBe(Button.IconButton)
  })

  test('should render IconButtonRoot as a focusable button', () => {
    render(<IconButtonRoot aria-label="raw">x</IconButtonRoot>)
    const button = screen.getByRole('button', { name: 'raw' })
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('data-scope', 'icon-button')
    expect(button).toHaveAttribute('data-part', 'root')
    expect(button.className).toContain('cerberus-icon-btn')
  })
})
