import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { createCerberusPrimitive } from '@cerberus-design/react'
import { recipes } from '@cerberus-design/panda-preset'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type {
  CerberusPrimitiveEl,
  CerberusRecipe,
} from '@cerberus-design/react/src/system/factory'

describe('createCerberusPrimitive', () => {
  test('withRecipe should render an Element with Cerberus props applied', () => {
    const recipe = recipes.button as unknown as CerberusRecipe

    interface RawButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      customProp?: string
    }

    function RawButton(
      props: PropsWithChildren<CerberusPrimitiveEl<RawButtonProps>>,
    ) {
      const { customProp, ...nativeProps } = props
      return <button {...nativeProps} className={customProp} />
    }

    const { withRecipe } = createCerberusPrimitive(recipe)
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

  test.todo(
    'withSlotRecipe should render an Element with the recipe applied at the slot level',
    () => {},
  )
})
