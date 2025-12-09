import { describe, test, expect, jest } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { CerberusProvider, Tag } from '@cerberus-design/react'
import { makeConfig, user } from '@/utils'

describe('Tag', () => {
  const config = makeConfig()

  test('should render a tag element', () => {
    render(
      <CerberusProvider config={config}>
        <Tag>it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
  })

  test('should not render a action tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag>it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).not.toHaveClass(
      'cerberus-tag--palette_action',
    )
  })

  test('should render a danger tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag palette="danger">it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--palette_danger',
    )
  })

  test('should render an outlined tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag usage="outlined">it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--usage_outlined',
    )
  })

  test('should render a filled tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag usage="filled">it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--usage_filled',
    )
  })

  test('should render a pill tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag shape="pill">it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--shape_pill',
    )
  })

  test('should render a pill when onClick is provided', () => {
    render(
      <CerberusProvider config={config}>
        <Tag onClick={jest.fn()}>it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--shape_pill',
    )
  })

  test('should render a square tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag shape="square">it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-tag--shape_square',
    )
  })

  test('should render a tag with a close button', async () => {
    const onClick = jest.fn()
    render(
      <CerberusProvider config={config}>
        <Tag onClick={onClick}>it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/Close/i)).toBeInTheDocument()
    await user.click(screen.getByLabelText(/Close/i))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('should allow factory style props', () => {
    render(
      <Tag data-testid="tag" bgColor="black" css={{ mb: 0 }}>
        it works
      </Tag>,
    )
    expect(screen.getByTestId('tag')).toBeInTheDocument()
    expect(screen.getByTestId('tag')).toHaveClass('cerberus-bg-c_black')
    expect(screen.getByTestId('tag')).toHaveClass('cerberus-mb_0')
  })

  test('should allow factory asChild props', () => {
    render(
      <Tag asChild>
        <button>test</button>
      </Tag>,
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
