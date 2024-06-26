import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { IconButton } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('IconButton', () => {
  const DATA_POSITION = 'data-position'

  setupStrictMode()
  afterEach(cleanup)

  test('should render a icon button element', () => {
    render(<IconButton ariaLabel="test button">it works</IconButton>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
    expect(screen.getByLabelText(/test button/i)).toBeTruthy()
  })

  test('should render a action icon button', () => {
    render(<IconButton ariaLabel="test button">it works</IconButton>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--palette_action'),
    ).toBeTrue()
  })

  test('should render a danger icon button', () => {
    render(
      <IconButton ariaLabel="test button" palette="danger">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--palette_danger'),
    ).toBeTrue()
  })

  test('should render a text icon button', () => {
    render(
      <IconButton ariaLabel="test button" usage="text">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--usage_text'),
    ).toBeTrue()
  })

  test('should render a filled icon button', () => {
    render(
      <IconButton ariaLabel="test button" usage="filled">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--usage_filled'),
    ).toBeTrue()
  })

  test('should render a circle icon button', () => {
    render(
      <IconButton ariaLabel="test button" shape="circle">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--shape_circle'),
    ).toBeTrue()
  })

  test('should render a small icon button', () => {
    render(
      <IconButton ariaLabel="test button" size="sm">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--size_sm'),
    ).toBeTrue()
  })

  test('should render a large icon button', () => {
    render(
      <IconButton ariaLabel="test button" size="lg">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--size_lg'),
    ).toBeTrue()
  })

  test('should render a icon button with tooltip on top', () => {
    render(
      <IconButton ariaLabel="test button" tooltipPosition="top">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i).getAttribute(DATA_POSITION)).toBe(
      'top',
    )
  })

  test('should render a icon button with tooltip on bottom', () => {
    render(
      <IconButton ariaLabel="test button" tooltipPosition="bottom">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i).getAttribute(DATA_POSITION)).toBe(
      'bottom',
    )
  })

  test('should render a icon button with tooltip on left', () => {
    render(
      <IconButton ariaLabel="test button" tooltipPosition="left">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i).getAttribute(DATA_POSITION)).toBe(
      'left',
    )
  })

  test('should render a icon button with tooltip on right', () => {
    render(
      <IconButton ariaLabel="test button" tooltipPosition="right">
        it works
      </IconButton>,
    )
    expect(screen.getByText(/it works/i).getAttribute(DATA_POSITION)).toBe(
      'right',
    )
  })
})
