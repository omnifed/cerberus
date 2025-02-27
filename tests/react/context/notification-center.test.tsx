import { describe, test, expect, afterEach } from 'bun:test'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import {
  NotificationCenter,
  toaster,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('NotificationCenter & useNotificationCenter', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  function Feature() {
    function handleClick() {
      toaster.create({
        type: 'info',
        title: 'New feature!',
        description: 'We have added a new feature to the app.',
      })
    }

    return <button onClick={handleClick}>Notify</button>
  }

  function Test() {
    return (
      <CerberusProvider config={config}>
        <Feature />
        <NotificationCenter />
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

  test.skip('should close all notifications', async () => {
    render(<Test />)
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByText(/notify/i))
    await userEvent.click(screen.getByRole('button', { name: /close all/i }))
    await waitFor(() => {
      expect(screen.queryByText(/new feature!/i)).toBeNull()
    })
  })
})
