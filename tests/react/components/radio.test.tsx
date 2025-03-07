import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { RadioGroup, Radio, RadioParts } from '@cerberus-design/react'

describe('RadioGroup & Radio', () => {
  test('should render a radio', () => {
    render(
      <RadioGroup>
        <Radio value="test">Test label</Radio>
      </RadioGroup>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  test('should render a radio with a sm size', () => {
    render(
      <RadioGroup>
        <Radio size="sm" value="test">
          Test Label
        </Radio>
      </RadioGroup>,
    )
    expect(screen.getByRole('radiogroup')).toHaveClass(
      'cerberus-radio-group__root--size_sm',
    )
  })

  test('should render a radio with a md size', () => {
    render(
      <RadioGroup>
        <Radio size="md" value="test">
          Test Label
        </Radio>
      </RadioGroup>,
    )
    expect(screen.getByText(/test label/i)).toHaveClass(
      'cerberus-radio-group__itemText--size_md',
    )
  })

  test('should render a horizontal orientation', () => {
    render(
      <RadioGroup orientation="horizontal">
        <Radio value="test">Test Label</Radio>
      </RadioGroup>,
    )
    expect(screen.getByRole('radiogroup')).toHaveClass(
      'cerberus-radio-group__root--orientation_horizontal',
    )
  })

  test('should render a vertical orientation', () => {
    render(
      <RadioGroup orientation="vertical">
        <Radio value="test">Test Label</Radio>
      </RadioGroup>,
    )
    expect(screen.getByRole('radiogroup')).toHaveClass(
      'cerberus-radio-group__root--orientation_vertical',
    )
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
    expect(screen.getByText(/test group/i)).toBeInTheDocument()
    expect(screen.getByText(/test label/i)).toBeInTheDocument()
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })
})
