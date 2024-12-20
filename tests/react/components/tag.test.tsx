import { describe, test, expect, afterEach, jest } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { CerberusProvider, Tag } from '@cerberus-design/react'
import { makeConfig, setupStrictMode, user } from '@/utils'

describe('Tag', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a tag element', () => {
    render(
      <CerberusProvider config={config}>
        <Tag>it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should not render a action tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag>it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--palette_action'),
    ).toBeFalse()
  })

  test('should render a danger tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag palette="danger">it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--palette_danger'),
    ).toBeTrue()
  })

  test('should render an outlined tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag usage="outlined">it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--usage_outlined'),
    ).toBeTrue()
  })

  test('should render a filled tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag usage="filled">it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--usage_filled'),
    ).toBeTrue()
  })

  test('should render a pill tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag shape="pill">it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--shape_pill'),
    ).toBeTrue()
  })

  test('should render a pill when onClick is provided', () => {
    render(
      <CerberusProvider config={config}>
        <Tag onClick={jest.fn()}>it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--shape_pill'),
    ).toBeTrue()
  })

  test('should render a square tag', () => {
    render(
      <CerberusProvider config={config}>
        <Tag shape="square">it works</Tag>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--shape_square'),
    ).toBeTrue()
  })

  test('should render a tag with a close button', async () => {
    const onClick = jest.fn()
    render(
      <CerberusProvider config={config}>
        <Tag onClick={onClick}>it works</Tag>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/Close/i)).toBeTruthy()
    await user.click(screen.getByLabelText(/Close/i))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
