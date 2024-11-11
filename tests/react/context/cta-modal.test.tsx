import { describe, test, expect, afterEach, spyOn, jest } from 'bun:test'
import {
  render,
  screen,
  cleanup,
  renderHook,
  waitFor,
} from '@testing-library/react'
import { CTAModal, useCTAModal } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('CTAModal & useCTAModal', () => {
  setupStrictMode()
  afterEach(cleanup)
  const action1 = jest.fn()
  const action2 = jest.fn()

  function TestFeature() {
    const cta = useCTAModal()

    function handleMakeChoice() {
      cta.show({
        heading: 'Copy or create a Cohort',
        description: 'Create a new cohort or copy an existing one.',
        icon: <span role="img" aria-label="custom-icon" />,
        actions: [
          {
            text: 'Create new',
            onClick: action1,
          },
          {
            text: 'Copy existing',
            onClick: action2,
          },
        ],
      })
    }

    return (
      <div>
        <button onClick={handleMakeChoice}>make choice</button>
      </div>
    )
  }

  function TestPage() {
    return (
      <CTAModal>
        <TestFeature />
      </CTAModal>
    )
  }

  test('should show cta modal', async () => {
    render(<TestPage />)
    await userEvent.click(screen.getByRole('button', { name: /make choice/i }))
    await waitFor(() =>
      expect(screen.getByText(/Copy or create a Cohort/i)).toBeTruthy(),
    )
    await waitFor(() =>
      expect(
        screen.getByText(/Create a new cohort or copy an existing one./i),
      ).toBeTruthy(),
    )
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /create new/i })),
    )
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /copy existing/i })),
    )
    await waitFor(() =>
      expect(screen.getByRole('img', { name: /custom-icon/i })),
    )
  })

  test('should call actions when clicked', async () => {
    render(<TestPage />)
    await userEvent.click(screen.getByRole('button', { name: /make choice/i }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /create new/i })),
    )
    await userEvent.click(screen.getByRole('button', { name: /create new/i }))
    await waitFor(() => expect(action1).toHaveBeenCalled())
    // open the modal again
    await userEvent.click(screen.getByRole('button', { name: /make choice/i }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /copy existing/i })),
    )
    await userEvent.click(
      screen.getByRole('button', { name: /copy existing/i }),
    )
    await waitFor(() => expect(action2).toHaveBeenCalled())
  })

  test('should trap focus in the dialog', async () => {
    render(<TestPage />)
    await userEvent.click(screen.getByRole('button', { name: /make choice/i }))
    await waitFor(() =>
      expect(screen.getByText(/Copy or create a Cohort/i)).toBeTruthy(),
    )
    await userEvent.tab()
    expect(
      screen.getByRole('button', { name: /create new/i }).focus,
    ).toBeTruthy()
    await userEvent.tab()
    expect(screen.getByText(/copy existing/i).focus).toBeTruthy()
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useCTAModal())).toThrow(
      'useCTAModal must be used within a CTAModal Provider',
    )
  })
})
