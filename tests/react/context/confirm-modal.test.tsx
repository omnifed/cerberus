import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import {
  render,
  screen,
  cleanup,
  renderHook,
  waitFor,
} from '@testing-library/react'
import { ConfirmModal, useConfirmModal } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import { useState } from 'react'
import userEvent from '@testing-library/user-event'

describe('ConfirmModal & useConfirmModal', () => {
  setupStrictMode()
  afterEach(cleanup)

  function TestFeature() {
    const confirm = useConfirmModal()
    const [consent, setConsent] = useState<boolean | null>(null)

    async function handleConfirm() {
      const consent = await confirm.show({
        heading: 'Add new payment method?',
        description:
          'This will add a new payment method to your account to be billed for future purchases.',
        actionText: 'Yes, add payment method',
        cancelText: 'No, cancel',
      })
      setConsent(consent)
    }

    return (
      <div>
        <button onClick={handleConfirm}>confirm choice</button>
        <div>User consent: {JSON.stringify(consent)}</div>
      </div>
    )
  }

  function TestPage() {
    return (
      <ConfirmModal>
        <TestFeature />
      </ConfirmModal>
    )
  }

  test('should show confirm modal', async () => {
    render(<TestPage />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await waitFor(() =>
      expect(screen.getByText(/Add new payment method?/i)).toBeTruthy(),
    )
    await waitFor(() =>
      expect(
        screen.getByText(
          /This will add a new payment method to your account to be billed for future purchases./i,
        ),
      ).toBeTruthy(),
    )
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /yes, add payment method/i })),
    )
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /no, cancel/i })),
    )
  })

  test('should set consent after user confirms', async () => {
    render(<TestPage />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await userEvent.click(
      screen.getByRole('button', { name: /yes, add payment method/i }),
    )
    await waitFor(() =>
      expect(screen.getByText(/User consent: true/i)).toBeTruthy(),
    )
  })

  test('should set consent to false after user cancels', async () => {
    render(<TestPage />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await userEvent.click(screen.getByRole('button', { name: /no, cancel/i }))
    await waitFor(() =>
      expect(screen.getByText(/User consent: false/i)).toBeTruthy(),
    )
  })

  test('should trap focus in the dialog', async () => {
    render(<TestPage />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await waitFor(() =>
      expect(screen.getByText(/Add new payment method?/i)).toBeTruthy(),
    )
    expect(screen.getByText(/Add new payment method?/i).focus).toBeTruthy()
    await userEvent.tab()
    expect(
      screen.getByRole('button', { name: /no, cancel/i }).focus,
    ).toBeTruthy()
    await userEvent.tab()
    expect(screen.getByText(/Add new payment method?/i).focus).toBeTruthy()
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useConfirmModal())).toThrow(
      'useConfirmModal must be used within a ConfirmModal Provider',
    )
  })
})
