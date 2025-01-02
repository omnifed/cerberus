import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import {
  render,
  screen,
  cleanup,
  renderHook,
  waitFor,
} from '@testing-library/react'
import {
  NotificationCenter,
  useNotificationCenter,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('NotificationCenter & useNotificationCenter', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  function Feature() {
    const { notify } = useNotificationCenter()
    function handleClick() {
      notify({
        palette: 'info',
        heading: 'New feature!',
        description: 'We have added a new feature to the app.',
      })
    }

    return <button onClick={handleClick}>Notify</button>
  }

  function Test() {
    return (
      <CerberusProvider config={config}>
        <NotificationCenter>
          <Feature />
        </NotificationCenter>
      </CerberusProvider>
    )
  }

  test('should export a NotificationCenter', () => {
    render(<Test />)
    expect(screen.getByText(/notify/i)).toBeTruthy()
  })

  test('should notify', async () => {
    render(<Test />)
    await userEvent.click(screen.getByText(/notify/i))
    expect(screen.getByText(/new feature!/i)).toBeTruthy()
    expect(
      screen.getByText(/we have added a new feature to the app./i),
    ).toBeTruthy()
  })

  test('should close the notification', async () => {
    render(<Test />)
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    await waitFor(() => {
      expect(screen.queryByText(/new feature!/i)).toBeNull()
    })
  })

  test('should close all notifications', async () => {
    render(<Test />)
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByRole('button', { name: /close all/i }))
    expect(screen.queryByText(/new feature!/i)).toBeNull()
  })

  test('should throw an error if used outside of FeatureFlags', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useNotificationCenter())).toThrow(
      'useNotificationCenter must be used within a NotificationsProvider',
    )
  })
})
