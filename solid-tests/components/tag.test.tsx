import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'
import { Tag } from '@cerberus-design/solid'

describe('Tag', () => {
  test('should render a tag element', () => {
    render(() => <Tag>it works</Tag>)
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
  })

  test('should not render a action tag', () => {
    render(() => <Tag>it works</Tag>)
    expect(screen.getByText(/it works/i)).not.toHaveClass(
      'cerberus-tag--palette_action',
    )
  })

  test('should render a danger tag', () => {
    render(() => <Tag palette="danger">it works</Tag>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--palette_danger',
    )
  })

  test('should render an outlined tag', () => {
    render(() => <Tag usage="outlined">it works</Tag>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--usage_outlined',
    )
  })

  test('should render a filled tag', () => {
    render(() => <Tag usage="filled">it works</Tag>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--usage_filled',
    )
  })

  test('should render a pill tag', () => {
    render(() => <Tag shape="pill">it works</Tag>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--shape_pill',
    )
  })

  test('should render a square tag', () => {
    render(() => <Tag shape="square">it works</Tag>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--shape_square',
    )
  })
})
