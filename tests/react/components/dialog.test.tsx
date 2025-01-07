import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Button,
  CerberusProvider,
  Dialog,
  DialogCloseIconTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode, user } from '@/utils'

describe('Dialog', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render', () => {
    render(
      <CerberusProvider config={config}>
        <DialogProvider>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <Dialog>
            <DialogHeading>Dialog Title</DialogHeading>
            <DialogDescription>Dialog Description</DialogDescription>
            <DialogCloseIconTrigger />
          </Dialog>
        </DialogProvider>
      </CerberusProvider>,
    )

    expect(screen.getByText(/open dialog/i)).toBeTruthy()
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  test('should open dialog', async () => {
    render(
      <CerberusProvider config={config}>
        <DialogProvider>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <Dialog>
            <DialogHeading>Dialog Title</DialogHeading>
            <DialogDescription>Dialog Description</DialogDescription>
            <DialogCloseIconTrigger />
          </Dialog>
        </DialogProvider>
      </CerberusProvider>,
    )

    expect(screen.getByText(/open dialog/i)).toBeTruthy()
    await user.click(screen.getByText(/open dialog/i))
    expect(screen.getByRole('dialog')).toBeTruthy()
  })
})
