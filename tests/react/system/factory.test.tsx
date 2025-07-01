import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { createCerberusPrimitive, cerberus } from '@cerberus-design/react'
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'
import { button, field } from 'styled-system/recipes'
import type { CerberusPrimitiveProps } from '@cerberus-design/react/src/system/types'

describe('cerberus', () => {
  test('should return a Cerberus component by name', () => {
    const Button = cerberus('button')
    expect(Button).toBeDefined()
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })

  test('should accept defaultProps', () => {
    const Button = cerberus('button', { type: 'button' })
    render(<Button css={{ color: 'blue' }}>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })

  test('should also work with object syntax', () => {
    render(<cerberus.button css={{ color: 'blue' }}>Click me</cerberus.button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })
})

describe('createCerberusPrimitive', () => {
  // Custom Elements

  test('withNoRecipe should render an Element with Cerberus props applied', () => {
    interface RawButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      customProp?: string
    }

    function RawButton(
      props: PropsWithChildren<CerberusPrimitiveProps<RawButtonProps>>,
    ) {
      const { customProp, ...nativeProps } = props
      return <button {...nativeProps} className={customProp} />
    }

    const { withNoRecipe } = createCerberusPrimitive(button)
    const Button = withNoRecipe(RawButton)

    render(
      <Button
        customProp="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
        value="test"
      >
        test
      </Button>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('custom')
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' })
  })

  test('withRecipe should render an Element with Cerberus props applied', () => {
    interface RawButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      customProp?: string
    }

    function RawButton(
      props: PropsWithChildren<CerberusPrimitiveProps<RawButtonProps>>,
    ) {
      const { customProp, ...nativeProps } = props
      return <button {...nativeProps} className={customProp} />
    }

    const { withRecipe } = createCerberusPrimitive(button)
    const Button = withRecipe(RawButton)

    render(
      <Button
        customProp="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
        value="test"
      >
        test
      </Button>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('custom')
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' })
  })

  test('withSlotRecipe should render an Element with the recipe applied at the slot level', () => {
    interface RawFieldRootProps extends HTMLAttributes<HTMLDivElement> {
      customProp?: string
    }

    function RawFieldRoot(
      props: PropsWithChildren<CerberusPrimitiveProps<RawFieldRootProps>>,
    ) {
      const { customProp, ...nativeProps } = props
      return <div {...nativeProps} className={customProp} />
    }

    const { withSlotRecipe } = createCerberusPrimitive(field)
    const Field = withSlotRecipe(RawFieldRoot, 'root')

    render(
      <Field
        data-testid="field-root"
        customProp="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
      >
        test
      </Field>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByTestId('field-root')).toHaveClass('custom')
    expect(screen.getByTestId('field-root')).toHaveStyle({ color: 'red' })
  })

  // Factory Components

  test('should render an Element using a string component', () => {
    const { withNoRecipe } = createCerberusPrimitive(button)
    const Button = withNoRecipe('button')

    render(
      <Button
        data-custom="custom"
        className="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
        value="test"
      >
        test
      </Button>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('custom')
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' })
  })

  test('should render an Element using the factory component', () => {
    const { withNoRecipe } = createCerberusPrimitive(button)
    const Button = withNoRecipe(cerberus.button)

    render(
      <Button
        data-custom="custom"
        className="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
        value="test"
      >
        test
      </Button>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('custom')
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' })
  })

  test('withRecipe should render an Element given a string', () => {
    const { withRecipe } = createCerberusPrimitive(button)
    const Button = withRecipe('button')

    render(
      <Button
        data-custom="custom"
        className="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
        value="test"
      >
        test
      </Button>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('custom')
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' })
  })

  test('withRecipe should render an Element given a factory component', () => {
    const { withRecipe } = createCerberusPrimitive(button)
    const Button = withRecipe(cerberus.button)

    render(
      <Button
        data-custom="custom"
        className="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
        value="test"
      >
        test
      </Button>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('custom')
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' })
  })

  test('withSlotRecipe should render an Element given a string', () => {
    const { withSlotRecipe } = createCerberusPrimitive(field)
    const Field = withSlotRecipe('div', 'root')

    render(
      <Field
        data-testid="field-root"
        className="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
      >
        test
      </Field>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByTestId('field-root')).toHaveClass('custom')
    expect(screen.getByTestId('field-root')).toHaveStyle({ color: 'red' })
  })

  test('withSlotRecipe should render an Element given a factory component', () => {
    const { withSlotRecipe } = createCerberusPrimitive(field)
    const Field = withSlotRecipe(cerberus.div, 'root')

    render(
      <Field
        data-testid="field-root"
        className="custom"
        css={{ bgColor: 'yellow' }}
        style={{ color: 'red' }}
      >
        test
      </Field>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByTestId('field-root')).toHaveClass('custom')
    expect(screen.getByTestId('field-root')).toHaveStyle({ color: 'red' })
  })
})
