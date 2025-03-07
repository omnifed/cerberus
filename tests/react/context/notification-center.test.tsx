import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import {
  NotificationCenter,
  toaster,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('NotificationCenter & useNotificationCenter', () => {
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

  test('should notify', async () => {
    render(<Test />)
    await userEvent.click(screen.getByText(/notify/i))
    await waitFor(() =>
      expect(screen.getByText(/new feature!/i)).toBeInTheDocument(),
    )
    await waitFor(() =>
      expect(
        screen.getByText(/we have added a new feature to the app./i),
      ).toBeInTheDocument(),
    )
  })
})
