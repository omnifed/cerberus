import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Admonition,
  AdmonitionDescription,
  AdmonitionHeading,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Admonition', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a admonition element', () => {
    render(
      <CerberusProvider config={config}>
        <Admonition palette="page">
          <AdmonitionHeading palette="page">When to use</AdmonitionHeading>
          <AdmonitionDescription palette="page">
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
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
        <Admonition palette="page">
          <AdmonitionHeading palette="page">When to use</AdmonitionHeading>
          <AdmonitionDescription palette="page">
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
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
      screen
        .getByText(
          /use this component when you want to display a page-level message/i,
        )
        .classList.contains('cerberus-admonition__description--palette_page'),
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
        <Admonition palette="info">
          <AdmonitionHeading palette="info">When to use</AdmonitionHeading>
          <AdmonitionDescription palette="info">
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
        </Admonition>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/when to use/i)
        .classList.contains('cerberus-admonition__heading--palette_info'),
    ).toBeTruthy()
    expect(
      screen
        .getByText(
          /use this component when you want to display a page-level message/i,
        )
        .classList.contains('cerberus-admonition__description--palette_info'),
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
        <Admonition palette="success">
          <AdmonitionHeading palette="success">When to use</AdmonitionHeading>
          <AdmonitionDescription palette="success">
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
        </Admonition>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/when to use/i)
        .classList.contains('cerberus-admonition__heading--palette_success'),
    ).toBeTruthy()
    expect(
      screen
        .getByText(
          /use this component when you want to display a page-level message/i,
        )
        .classList.contains(
          'cerberus-admonition__description--palette_success',
        ),
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
        <Admonition palette="warning">
          <AdmonitionHeading palette="warning">When to use</AdmonitionHeading>
          <AdmonitionDescription palette="warning">
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
        </Admonition>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/when to use/i)
        .classList.contains('cerberus-admonition__heading--palette_warning'),
    ).toBeTruthy()
    expect(
      screen
        .getByText(
          /use this component when you want to display a page-level message/i,
        )
        .classList.contains(
          'cerberus-admonition__description--palette_warning',
        ),
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
        <Admonition palette="danger">
          <AdmonitionHeading palette="danger">When to use</AdmonitionHeading>
          <AdmonitionDescription palette="danger">
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
        </Admonition>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByText(/when to use/i)
        .classList.contains('cerberus-admonition__heading--palette_danger'),
    ).toBeTruthy()
    expect(
      screen
        .getByText(
          /use this component when you want to display a page-level message/i,
        )
        .classList.contains('cerberus-admonition__description--palette_danger'),
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
          <AdmonitionHeading>When to use</AdmonitionHeading>
          <AdmonitionDescription>
            Use this component when you want to display a page-level message.{' '}
            <a href="#">Learn more</a>
          </AdmonitionDescription>
        </Admonition>
      </CerberusProvider>,
    )
    expect(screen.getByText(/🚀/)).toBeTruthy()
  })
})
