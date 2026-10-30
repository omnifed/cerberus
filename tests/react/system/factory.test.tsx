import {
  Button,
  cerberus,
  CerberusPrimitiveRecipe,
  createCerberusPrimitive,
} from '@cerberus-design/react'
import { recipes, slotRecipes } from '@cerberus/panda-preset'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'bun:test'
import type { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react'

describe('cerberus', () => {
  test('should return a Cerberus component by name', () => {
    const Button = cerberus('button')
    expect(Button as unknown as CerberusPrimitiveRecipe).toBeDefined()
    render(
      <Button data-test="124" bgColor="black" css={{ color: 'blue' }}>
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })

  test('should also work with object syntax', () => {
    render(
      <cerberus.button data-test="124" bgColor="black" css={{ color: 'blue' }}>
        Click me
      </cerberus.button>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })

  test('should allow asChild prop', () => {
    render(
      <cerberus.div asChild data-test="124" bgColor="black" css={{ color: 'blue' }}>
        <Button>click me</Button>
      </cerberus.div>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })
})

// THIS WILL CHANGE IN V2
describe.skip('createCerberusPrimitive', () => {
  const { button } = recipes
  const { field } = slotRecipes

  test('withNoRecipe should render an Element with Cerberus props applied', () => {
    interface RawButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      customProp?: string
    }

    function RawButton(props: RawButtonProps) {
      const { customProp, ...nativeProps } = props
      return <button {...nativeProps} className={customProp} />
    }

    const { withNoRecipe } = createCerberusPrimitive(
      button as unknown as CerberusPrimitiveRecipe,
    )
    const Button = withNoRecipe(RawButton)

    render(
      <Button
        customProp="custom"
        bgColor="black"
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

    function RawButton(props: PropsWithChildren<RawButtonProps>) {
      const { customProp, ...nativeProps } = props
      return <button {...nativeProps} className={customProp} />
    }

    const { withRecipe } = createCerberusPrimitive(
      button as unknown as CerberusPrimitiveRecipe,
    )
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

    function RawFieldRoot(props: PropsWithChildren<RawFieldRootProps>) {
      const { customProp, ...nativeProps } = props
      return <div {...nativeProps} className={customProp} />
    }

    const { withSlotRecipe } = createCerberusPrimitive(
      field as unknown as CerberusPrimitiveRecipe,
    )
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
    const { withNoRecipe } = createCerberusPrimitive(
      button as unknown as CerberusPrimitiveRecipe,
    )
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
    const { withNoRecipe } = createCerberusPrimitive(
      button as unknown as CerberusPrimitiveRecipe,
    )
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
    const { withRecipe } = createCerberusPrimitive(
      button as unknown as CerberusPrimitiveRecipe,
    )
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
    const { withRecipe } = createCerberusPrimitive(
      button as unknown as CerberusPrimitiveRecipe,
    )
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
    const { withSlotRecipe } = createCerberusPrimitive(
      field as unknown as CerberusPrimitiveRecipe,
    )
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
    const { withSlotRecipe } = createCerberusPrimitive(
      field as unknown as CerberusPrimitiveRecipe,
    )
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
