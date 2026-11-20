import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Spinner } from '@cerberus-design/react'

describe('Spinner', () => {
  test('should render a spinner', () => {
    render(<Spinner />)
    const root = screen.getByRole('status')
    expect(root).toBeInTheDocument()
    expect(root.tagName.toLowerCase()).toBe('svg')
    expect(root).toHaveAttribute('aria-busy', 'true')
    expect(root).toHaveAttribute('data-scope', 'spinner')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root).toHaveAttribute('viewBox', '0 0 24 24')
    expect(root).not.toHaveAttribute('width')
    expect(root).not.toHaveAttribute('height')
    expect(root).not.toHaveAccessibleName()
    expect(root.querySelectorAll('path')).toHaveLength(2)
  })

  test('should allow a custom size', () => {
    render(<Spinner size="1em" />)
    expect(screen.getByRole('status')).toHaveAttribute('width', '1em')
    expect(screen.getByRole('status')).toHaveAttribute('height', '1em')
  })

  test('should set a numeric size as the svg attributes', () => {
    render(<Spinner size={24} />)
    const root = screen.getByRole('status')
    expect(root).toHaveAttribute('width', '24')
    expect(root).toHaveAttribute('height', '24')
    expect(root.getAttribute('class') ?? '').not.toContain('w_')
  })

  test('should let width and height override size', () => {
    render(<Spinner size={24} width={32} />)
    const root = screen.getByRole('status')
    expect(root).toHaveAttribute('width', '32')
    expect(root).toHaveAttribute('height', '24')
  })

  test('should accept an accessible name and svg attributes', () => {
    render(<Spinner aria-label="Saving" id="spinner" data-testid="spinner" />)
    const root = screen.getByRole('status', { name: 'Saving' })
    expect(root).toHaveAttribute('id', 'spinner')
    expect(screen.getByTestId('spinner')).toBe(root)
  })

  test('should accept Panda style props', () => {
    render(<Spinner color="page.text.100" w="4" className="custom" />)
    const root = screen.getByRole('status')
    expect(root.getAttribute('class')).toContain('custom')
    expect(root.getAttribute('class')).toContain('w_4')
    expect(root).not.toHaveAttribute('w')
    expect(root).not.toHaveAttribute('color')
  })

  test('should expose the root primitive', () => {
    render(
      <Spinner.Root aria-label="Uploading">
        <circle cx="12" cy="12" r="9" />
      </Spinner.Root>,
    )
    const root = screen.getByRole('status', { name: 'Uploading' })
    expect(root).toHaveAttribute('data-scope', 'spinner')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root).toHaveAttribute('aria-busy', 'true')
    expect(root.querySelector('circle')).toBeInTheDocument()
  })

  test('should be the default El abstraction', () => {
    expect(Spinner.El).toBe(Spinner)
  })
})
