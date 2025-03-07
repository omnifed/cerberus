import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
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
import { makeConfig, user } from '@/utils'

describe('Dialog', () => {
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

    expect(screen.getByText(/open dialog/i)).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
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

    expect(screen.getByText(/open dialog/i)).toBeInTheDocument()
    await user.click(screen.getByText(/open dialog/i))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
