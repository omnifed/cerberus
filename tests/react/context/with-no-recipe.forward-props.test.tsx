import { createCerberusPrimitive } from '@cerberus-design/react/src/system'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'bun:test'

function Probe(props: Record<string, unknown>) {
  return (
    <div
      data-testid="probe"
      data-page={String(props.page)}
      className={String(props.className ?? '')}
    />
  )
}

const { withNoRecipe } = createCerberusPrimitive()

test('forwardProps delivers a colliding prop and keeps style props working', () => {
  const Wrapped = withNoRecipe(Probe, { forwardProps: ['page'] })
  render(<Wrapped page="3" color="red" />)
  const el = screen.getByTestId('probe')
  expect(el.dataset.page).toBe('3')
  expect(el.className).not.toBe('')
})
