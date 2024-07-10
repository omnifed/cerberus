import { describe, test, expect, afterEach, jest } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Tag } from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'

describe('Tag', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a tag element', () => {
    render(<Tag>it works</Tag>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should not render a action tag', () => {
    render(<Tag>it works</Tag>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--palette_action'),
    ).toBeFalse()
  })

  test('should render a danger tag', () => {
    render(<Tag palette="danger">it works</Tag>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--palette_danger'),
    ).toBeTrue()
  })

  test('should render an outlined tag', () => {
    render(<Tag usage="outlined">it works</Tag>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--usage_outlined'),
    ).toBeTrue()
  })

  test('should render a filled tag', () => {
    render(<Tag usage="filled">it works</Tag>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--usage_filled'),
    ).toBeTrue()
  })

  test('should render a pill tag', () => {
    render(<Tag shape="pill">it works</Tag>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--shape_pill'),
    ).toBeTrue()
  })

  test('should render a pill when onClick is provided', () => {
    render(
      <Tag shape="pill" onClick={jest.fn()} usage="filled">
        it works
      </Tag>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--shape_pill'),
    ).toBeTrue()
  })

  test('should render a rounded tag', () => {
    render(<Tag shape="rounded">it works</Tag>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-tag--shape_rounded'),
    ).toBeTrue()
  })

  test('should render a tag with a close button', async () => {
    const onClick = jest.fn()
    render(
      <Tag shape="pill" onClick={onClick} usage="filled">
        it works
      </Tag>,
    )
    expect(screen.getByLabelText(/Close/i)).toBeTruthy()
    await user.click(screen.getByLabelText(/Close/i))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
