import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { ModalIcon } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('ModalIcon', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render children', () => {
    render(
      <ModalIcon>
        <div>children</div>
      </ModalIcon>,
    )
    expect(screen.getByText('children')).toBeTruthy()
  })

  test('should have action palette variant', () => {
    render(
      <ModalIcon palette="action" data-testid="container">
        <div>children</div>
      </ModalIcon>,
    )
    expect(
      screen
        .getByTestId('container')
        .classList.contains('cerberus-modal-icon--palette_action'),
    ).toBeTrue()
  })

  test('should have danger palette variant', () => {
    render(
      <ModalIcon palette="danger" data-testid="container">
        <div>children</div>
      </ModalIcon>,
    )
    expect(
      screen
        .getByTestId('container')
        .classList.contains('cerberus-modal-icon--palette_danger'),
    ).toBeTrue()
  })
})
