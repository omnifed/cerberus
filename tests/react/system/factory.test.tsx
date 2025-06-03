import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { createCerberusPrimitive } from '@cerberus-design/react'
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'
import { button, field } from 'styled-system/recipes'
import type { CerberusPrimitiveProps } from '@cerberus-design/react/src/system/types'

describe('createCerberusPrimitive', () => {
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
})
