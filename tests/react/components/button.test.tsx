import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Button, ButtonIcon, ButtonParts } from '@cerberus-design/react'
import { Model } from '@carbon/icons-react'

describe('Button', () => {
  test('should render a button element', () => {
    render(<Button>it works</Button>)
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
  })

  test('should render a action button', () => {
    render(<Button>it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--palette_action',
    )
  })

  test('should render a danger button', () => {
    render(<Button palette="danger">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--palette_danger',
    )
  })

  test('should render a ghost button', () => {
    render(<Button usage="ghost">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--usage_ghost',
    )
  })

  test('should render an outlined button', () => {
    render(<Button usage="outlined">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--usage_outlined',
    )
  })

  test('should render a filled button', () => {
    render(<Button usage="filled">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--usage_filled',
    )
  })

  test('should render a sharp button', () => {
    render(<Button shape="sharp">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--shape_sharp',
    )
  })

  test('should render a rounded button', () => {
    render(<Button shape="rounded">it works</Button>)
    expect(screen.getByText(/it works/i)).toHaveClass(
      'cerberus-button--shape_rounded',
    )
  })

  test('should render a button with an icon', () => {
    render(
      <Button>
        it works
        <ButtonIcon>
          <Model role="img" />
        </ButtonIcon>
      </Button>,
    )
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })

  test('should render a disabled button', () => {
    render(<Button disabled>it works</Button>)
    expect(screen.getByText(/it works/i)).toBeDisabled()
  })

  test('should render a pending button', () => {
    render(
      <ButtonParts.Root pending>
        it works
        <ButtonParts.Icon />
      </ButtonParts.Root>,
    )
    expect(screen.getByText(/it works/i)).toBeDisabled()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  test('should accept css prop from factory', () => {
    render(
      <Button css={{ color: 'blue' }} data-testid="css-button">
        it works
      </Button>,
    )
    expect(screen.getByTestId('css-button')).toBeInTheDocument()
  })

  test('should accept asChild prop from factory', () => {
    render(
      <Button asChild>
        <a href="/test">Link as button</a>
      </Button>,
    )
    expect(screen.getByRole('link')).toHaveTextContent('Link as button')
  })

  test('should accept style prop from factory', () => {
    render(
      <Button style={{ color: 'red' }} data-testid="style-button">
        it works
      </Button>,
    )
    expect(screen.getByTestId('style-button')).toHaveStyle({ color: 'red' })
  })
})
