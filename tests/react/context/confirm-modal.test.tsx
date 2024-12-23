import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import {
  render,
  screen,
  cleanup,
  renderHook,
  waitFor,
} from '@testing-library/react'
import {
  CerberusProvider,
  ConfirmModal,
  useConfirmModal,
  type ShowConfirmModalOptions,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import { useState } from 'react'
import userEvent from '@testing-library/user-event'

describe('ConfirmModal & useConfirmModal', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  function TestFeature(props: {
    description?: ShowConfirmModalOptions['description']
  }) {
    const confirm = useConfirmModal()
    const [consent, setConsent] = useState<boolean | null>(null)

    async function handleConfirm() {
      const consent = await confirm.show({
        heading: 'Add new payment method?',
        description:
          props.description ??
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

  function DestructiveFeature() {
    const confirm = useConfirmModal()
    const [consent, setConsent] = useState<boolean | null>(null)

    async function handleConfirm() {
      const consent = await confirm.show({
        kind: 'destructive',
        heading: 'Delete account?',
        description:
          'This will permanently delete your account and all associated data.',
        actionText: 'Yes, delete',
        cancelText: 'No, keep',
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

  function TestPage(props: {
    description?: ShowConfirmModalOptions['description']
  }) {
    return (
      <CerberusProvider config={config}>
        <ConfirmModal>
          <TestFeature description={props.description} />
        </ConfirmModal>
      </CerberusProvider>
    )
  }

  function DestructiveTest() {
    return (
      <CerberusProvider config={config}>
        <ConfirmModal>
          <DestructiveFeature />
        </ConfirmModal>
      </CerberusProvider>
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

  test('should allow a React node as the description', async () => {
    render(
      <TestPage
        description={
          <>
            Custom description with a <a href="#">link</a>
          </>
        }
      />,
    )
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await waitFor(() =>
      expect(screen.getByText(/Custom description with a/i)).toBeTruthy(),
    )
  })

  test('should show destructive confirm modal', async () => {
    render(<DestructiveTest />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await waitFor(() =>
      expect(screen.getByText(/Delete account?/i)).toBeTruthy(),
    )
    await waitFor(() =>
      expect(
        screen.getByText(
          /This will permanently delete your account and all associated data./i,
        ),
      ).toBeTruthy(),
    )
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /yes, delete/i })),
    )
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /no, keep/i })),
    )
    expect(
      screen
        .getByRole('button', { name: /yes, delete/i })
        .classList.contains('cerberus-button--palette_danger'),
    ).toBeTruthy()
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useConfirmModal())).toThrow(
      'useConfirmModal must be used within a ConfirmModal Provider',
    )
  })
})
