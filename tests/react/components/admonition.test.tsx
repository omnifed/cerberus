import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Admonition, CerberusProvider } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Admonition', () => {
  const config = makeConfig()

  test('should render a admonition element', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition heading="When to use" palette="page">
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByText(/when to use/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /use this component when you want to display a page-level message/i,
      ),
    ).toBeInTheDocument()
  })

  test('should render a admonition element with a page palette', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition heading="When to use" palette="page">
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
        ,
      </CerberusProvider>,
    )
    expect(screen.getByText(/when to use/i)).toHaveClass(
      'cerberus-admonition__heading--palette_page',
    )
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).not.toBeInTheDocument()
  })

  test('should render a admonition element with a info palette', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition
          heading="When to use"
          palette="info"
          data-testid="admonition"
        >
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('admonition')).toHaveClass(
      'cerberus-admonition__root--palette_info',
    )
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).not.toBeInTheDocument()
  })

  test('should render a admonition element with a success palette', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition
          heading="When to use"
          palette="success"
          data-testid="admonition"
        >
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('admonition')).toHaveClass(
      'cerberus-admonition__root--palette_success',
    )
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).not.toBeInTheDocument()
  })

  test('should render a admonition element with a warning palette', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition
          heading="When to use"
          palette="warning"
          data-testid="admonition"
        >
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('admonition')).toHaveClass(
      'cerberus-admonition__root--palette_warning',
    )
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).not.toBeInTheDocument()
  })

  test('should render a admonition element with a danger palette', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition
          heading="When to use"
          palette="danger"
          data-testid="admonition"
        >
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('admonition')).toHaveClass(
      'cerberus-admonition__root--palette_danger',
    )
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).not.toBeInTheDocument()
  })

  test('should allow to render a custom icon', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition icon={<span>🚀</span>}>
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByText(/🚀/)).toBeInTheDocument()
  })
})
