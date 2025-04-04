import { describe, test, expect, spyOn } from 'bun:test'
import { render, screen, renderHook, waitFor } from '@testing-library/react'
import {
  CerberusProvider,
  PromptModal,
  usePromptModal,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import { useState } from 'react'
import userEvent from '@testing-library/user-event'

describe('PromptModal & usePromptModal', () => {
  const config = makeConfig()

  function TestFeature() {
    const prompt = usePromptModal()
    const [userValue, setUserValue] = useState<string | null>(null)
    const KEY = 'SECRET_KEY'

    async function handleClick() {
      const consent = await prompt.show({
        heading: 'Add new payment method?',
        description:
          'This will add a new payment method to your account to be billed for future purchases.',
        key: KEY,
        actionText: 'Yes, add payment method',
        cancelText: 'No, cancel',
      })
      if (consent === KEY) setUserValue(consent)
    }

    return (
      <div>
        <button onClick={handleClick}>confirm choice</button>
        <div>key: {userValue}</div>
      </div>
    )
  }

  function TestPage() {
    return (
      <CerberusProvider config={config}>
        <PromptModal>
          <TestFeature />
        </PromptModal>
      </CerberusProvider>
    )
  }

  test('should show prompt modal', async () => {
    render(<TestPage />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await waitFor(() =>
      expect(screen.getByText(/Add new payment method?/i)).toBeInTheDocument(),
    )
    await waitFor(() =>
      expect(
        screen.getByText(
          /This will add a new payment method to your account to be billed for future purchases./i,
        ),
      ).toBeInTheDocument(),
    )
    await waitFor(() => expect(screen.getByRole('textbox')).toBeInTheDocument())
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
    await waitFor(() => expect(screen.getByText(/Add new payment method?/i)))
    await userEvent.type(screen.getByRole('textbox'), 'SECRET_KEY')
    await userEvent.click(
      screen.getByRole('button', { name: /yes, add payment method/i }),
    )
    expect(screen.getByText(/key: secret_key/i)).toBeInTheDocument()
  })

  test('should not return anything after user cancels', async () => {
    render(<TestPage />)
    await userEvent.click(
      screen.getByRole('button', { name: /confirm choice/i }),
    )
    await userEvent.click(screen.getByRole('button', { name: /no, cancel/i }))
    await waitFor(() =>
      expect(screen.queryByText(/key: super_secret/i)).toBeFalsy(),
    )
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => usePromptModal())).toThrow(
      'usePromptModal must be used within a PromptModal Provider',
    )
  })
})
