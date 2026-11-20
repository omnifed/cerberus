import { describe, test, expect } from 'bun:test'
import { fireEvent, render, screen } from '@testing-library/react'
import { RadioGroup, Radio, useRadioGroup } from '@cerberus-design/react'

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

  test('should apply the group size to every radio', () => {
    render(
      <RadioGroup size="md">
        <Radio value="test">Test Label</Radio>
      </RadioGroup>,
    )
    expect(screen.getByText(/test label/i)).toHaveClass(
      'cerberus-radio-group__itemText--size_md',
    )
  })

  test('should let a radio override the group size', () => {
    const { container } = render(
      <RadioGroup size="sm">
        <Radio size="md" value="test">
          Test Label
        </Radio>
      </RadioGroup>,
    )
    const text = screen.getByText(/test label/i)
    expect(text).toHaveClass('cerberus-radio-group__itemText--size_md')
    expect(text).not.toHaveClass('cerberus-radio-group__itemText--size_sm')
    const control = container.querySelector('[data-part="item-control"]')
    expect(control).toHaveClass('cerberus-radio-group__itemControl--size_md')
    expect(control).not.toHaveClass(
      'cerberus-radio-group__itemControl--size_sm',
    )
  })

  test('should check the default value and change on click', () => {
    render(
      <RadioGroup name="favorite" defaultValue="cerberus">
        <Radio value="cerberus">Cerberus</Radio>
        <Radio value="hades">Hades</Radio>
      </RadioGroup>,
    )
    const cerberus = screen.getByLabelText('Cerberus') as HTMLInputElement
    const hades = screen.getByLabelText('Hades') as HTMLInputElement
    expect(cerberus.checked).toBe(true)
    expect(hades.checked).toBe(false)
    expect(hades).toHaveAttribute('name', 'favorite')
    fireEvent.click(hades)
    expect(hades.checked).toBe(true)
    expect(cerberus.checked).toBe(false)
  })

  test('should apply part overrides on the Radio abstraction', () => {
    render(
      <RadioGroup>
        <Radio value="test">
          <RadioGroup.ItemText data-testid="text">Custom</RadioGroup.ItemText>
          <RadioGroup.ItemControl data-testid="control" />
          <RadioGroup.ItemHiddenInput data-testid="input" />
          ignored content
        </Radio>
      </RadioGroup>,
    )
    expect(screen.getByTestId('text')).toHaveTextContent('Custom')
    expect(screen.queryByText(/ignored content/i)).not.toBeInTheDocument()
    expect(screen.getByTestId('control')).toHaveAttribute(
      'data-part',
      'item-control',
    )
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'radio')
  })

  test('should contain all the parts', () => {
    expect(RadioGroup.Root).toBeDefined()
    expect(RadioGroup.Label).toBeDefined()
    expect(RadioGroup.Item).toBeDefined()
    expect(RadioGroup.ItemText).toBeDefined()
    expect(RadioGroup.ItemControl).toBeDefined()
    expect(RadioGroup.Indicator).toBeDefined()
    expect(RadioGroup.ItemHiddenInput).toBeDefined()
    expect(RadioGroup.RootProvider).toBeDefined()
    expect(RadioGroup.Context).toBeDefined()
    expect(RadioGroup.ItemContext).toBeDefined()
    expect(RadioGroup.Radio).toBe(Radio)
  })

  test('should render primitives', () => {
    render(
      <RadioGroup.Root>
        <RadioGroup.Label>Test Group</RadioGroup.Label>
        <RadioGroup.Indicator />
        <RadioGroup.Item value="test">
          <RadioGroup.ItemText>Test Label</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </RadioGroup.Root>,
    )
    expect(screen.getByText(/test group/i)).toHaveClass(
      'cerberus-radio-group__label',
    )
    expect(screen.getByText(/test label/i)).toBeInTheDocument()
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  test('should render Root and Item asChild with their context', () => {
    render(
      <RadioGroup.Root asChild defaultValue="test">
        <section data-testid="root">
          <RadioGroup.Item value="test" asChild>
            <span data-testid="item">
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>Test Label</RadioGroup.ItemText>
              <RadioGroup.ItemHiddenInput />
            </span>
          </RadioGroup.Item>
        </section>
      </RadioGroup.Root>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('role', 'radiogroup')
    expect(root).toHaveClass('cerberus-radio-group__root')
    const item = screen.getByTestId('item')
    expect(item.tagName).toBe('SPAN')
    expect(item).toHaveAttribute('data-state', 'checked')
    expect(item).toHaveClass('cerberus-radio-group__item')
    expect(screen.getByText(/test label/i)).toHaveClass(
      'cerberus-radio-group__itemText',
    )
  })

  test('should expose state through Context and ItemContext', () => {
    render(
      <RadioGroup defaultValue="hades">
        <RadioGroup.Context>
          {(group) => <p data-testid="value">{group.value}</p>}
        </RadioGroup.Context>
        <RadioGroup.Item value="hades">
          <RadioGroup.ItemContext>
            {(item) => (
              <RadioGroup.ItemText>
                {item.checked ? 'checked' : 'unchecked'}
              </RadioGroup.ItemText>
            )}
          </RadioGroup.ItemContext>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </RadioGroup>,
    )
    expect(screen.getByTestId('value')).toHaveTextContent('hades')
    expect(screen.getByText('checked')).toBeInTheDocument()
  })
})

describe('RadioGroup.RootProvider', () => {
  test('provides the recipe to radios driven by useRadioGroup()', () => {
    function Controlled() {
      const radioGroup = useRadioGroup({ defaultValue: 'zeus' })
      return (
        <RadioGroup.RootProvider value={radioGroup} size="md">
          <Radio value="zeus">Zeus</Radio>
          <p data-testid="value">{radioGroup.value}</p>
        </RadioGroup.RootProvider>
      )
    }
    render(<Controlled />)
    expect(screen.getByRole('radiogroup')).toHaveClass(
      'cerberus-radio-group__root--size_md',
    )
    expect(screen.getByText('Zeus')).toHaveClass(
      'cerberus-radio-group__itemText--size_md',
    )
    expect((screen.getByLabelText('Zeus') as HTMLInputElement).checked).toBe(
      true,
    )
    expect(screen.getByTestId('value')).toHaveTextContent('zeus')
  })
})
