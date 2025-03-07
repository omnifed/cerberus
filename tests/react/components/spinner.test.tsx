import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Spinner } from '@cerberus-design/react'

describe('Spinner', () => {
  test('should render a spinner', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  test('should allow a custom size', () => {
    render(<Spinner size="1em" />)
    expect(screen.getByRole('status')).toHaveAttribute('width', '1em')
    expect(screen.getByRole('status')).toHaveAttribute('height', '1em')
  })
})
