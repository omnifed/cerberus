import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { RadioGroup, Radio, RadioParts } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('RadioGroup & Radio', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a radio', () => {
    render(
      <RadioGroup>
        <Radio value="test">Test label</Radio>
      </RadioGroup>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByRole('radio')).toBeTruthy()
  })

  test('should render a radio with a sm size', () => {
    render(
      <RadioGroup>
        <Radio size="sm" value="test">
          Test Label
        </Radio>
      </RadioGroup>,
    )
    expect(
      screen
        .getByRole('radiogroup')
        .classList.contains('cerberus-radio-group__root--size_sm'),
    ).toBeTruthy()
  })

  test('should render a radio with a md size', () => {
    render(
      <RadioGroup>
        <Radio size="md" value="test">
          Test Label
        </Radio>
      </RadioGroup>,
    )
    expect(
      screen
        .getByText(/test label/i)
        .classList.contains('cerberus-radio-group__itemText--size_md'),
    ).toBeTruthy()
  })

  test('should render a horizontal orientation', () => {
    render(
      <RadioGroup orientation="horizontal">
        <Radio value="test">Test Label</Radio>
      </RadioGroup>,
    )
    expect(
      screen
        .getByRole('radiogroup')
        .classList.contains(
          'cerberus-radio-group__root--orientation_horizontal',
        ),
    ).toBeTruthy()
  })

  test('should render a vertical orientation', () => {
    render(
      <RadioGroup orientation="vertical">
        <Radio value="test">Test Label</Radio>
      </RadioGroup>,
    )
    expect(
      screen
        .getByRole('radiogroup')
        .classList.contains('cerberus-radio-group__root--orientation_vertical'),
    ).toBeTruthy()
  })

  test('should render primitives', () => {
    render(
      <RadioParts.Root>
        <RadioParts.Label>Test Group</RadioParts.Label>
        <RadioParts.Indicator />
        <RadioParts.Item>
          <RadioParts.ItemText>Test Label</RadioParts.ItemText>
          <RadioParts.ItemControl />
          <RadioParts.ItemHiddenInput />
        </RadioParts.Item>
      </RadioParts.Root>,
    )
    expect(screen.getByText(/test group/i)).toBeTruthy()
    expect(screen.getByText(/test label/i)).toBeTruthy()
    expect(screen.getByRole('radio')).toBeTruthy()
  })
})
