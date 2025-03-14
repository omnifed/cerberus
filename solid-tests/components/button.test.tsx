import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'
import { Button, ButtonParts } from '@cerberus-design/solid'
import Model from '@carbon/icons/es/model/16'

describe('Button', () => {
  test('should render a button element', () => {
    render(() => <Button>it works</Button>)
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
  })

  test('should render a action button', () => {
    render(() => <Button>it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--palette_action',
    )
  })

  test('should render a danger button', () => {
    render(() => <Button palette="danger">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--palette_danger',
    )
  })

  test('should render a ghost button', () => {
    render(() => <Button usage="ghost">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--usage_ghost',
    )
  })

  test('should render an outlined button', () => {
    render(() => <Button usage="outlined">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--usage_outlined',
    )
  })

  test('should render a filled button', () => {
    render(() => <Button usage="filled">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--usage_filled',
    )
  })

  test('should render a sharp button', () => {
    render(() => <Button shape="sharp">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--shape_sharp',
    )
  })

  test('should render a rounded button', () => {
    render(() => <Button shape="rounded">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--shape_rounded',
    )
  })

  test('should render a button with an icon', () => {
    render(() => (
      <ButtonParts.Root>
        it works
        <ButtonParts.Icon>
          <Model role="img" />
        </ButtonParts.Icon>
      </ButtonParts.Root>
    ))
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })
})
