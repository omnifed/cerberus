import { describe, test, expect, afterEach, beforeEach, jest } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import {
  Field,
  Label,
  Toggle,
  useToggle,
  type UseToggleOptions,
} from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'

describe('useToggle', () => {
  setupStrictMode()

  function ToggleTest(props: UseToggleOptions) {
    const { checked, handleChange } = useToggle({
      checked: 'default',
      onChange: props.onChange,
    })
    return (
      <Field>
        <Toggle
          checked={checked === 'default'}
          id="default"
          onChange={handleChange}
          value="default"
        />
        <Label htmlFor="default">{checked || 'off'}</Label>
      </Field>
    )
  }

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(cleanup)

  test('should export a checked state', () => {
    render(<ToggleTest />)
    expect(screen.getByText('default')).toBeTruthy()
  })

  test('should toggle checked', async () => {
    render(<ToggleTest />)
    await user.click(screen.getByRole('switch'))
    expect(screen.getByText('off')).toBeTruthy()
  })

  test('should call the onChange callback', async () => {
    const onChange = jest.fn()
    render(<ToggleTest onChange={onChange} />)
    await user.click(screen.getByRole('switch'))
    expect(onChange).toHaveBeenCalled()
  })
})
