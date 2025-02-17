import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Admonition, CerberusProvider } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Admonition', () => {
  setupStrictMode()
  afterEach(cleanup)

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
    expect(screen.getByText(/when to use/i)).toBeTruthy()
    expect(
      screen.getByText(
        /use this component when you want to display a page-level message/i,
      ),
    ).toBeTruthy()
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
    expect(
      screen
        .getByText(/when to use/i)
        .classList.contains('cerberus-admonition__heading--palette_page'),
    ).toBeTruthy()
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
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
    expect(
      screen
        .getByTestId('admonition')
        .classList.contains('cerberus-admonition__root--palette_info'),
    ).toBeTruthy()
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
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
    expect(
      screen
        .getByTestId('admonition')
        .classList.contains('cerberus-admonition__root--palette_success'),
    ).toBeTruthy()
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
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
    expect(
      screen
        .getByTestId('admonition')
        .classList.contains('cerberus-admonition__root--palette_warning'),
    ).toBeTruthy()
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
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
    expect(
      screen
        .getByTestId('admonition')
        .classList.contains('cerberus-admonition__root--palette_danger'),
    ).toBeTruthy()
    expect(
      screen.queryByRole('img', {
        hidden: false,
      }),
    ).toBeNull()
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
    expect(screen.getByText(/🚀/)).toBeTruthy()
  })
})
